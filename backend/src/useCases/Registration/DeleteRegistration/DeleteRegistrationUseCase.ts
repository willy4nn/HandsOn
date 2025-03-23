import { Registration } from "../../../entities/Registration/Registration";
import { CustomError, ErrorCatalog } from "../../../errors/CustomError";
import { IDeleteRegistrationRequestDTO } from "./DeleteRegistrationDTO";
import { IRegistrationsRepository } from "../../../repositories/Registration/IRegistrationsRepository";
import { IActivitiesRepository } from "../../../repositories/Activities/IActivitiesRepository";
import { deleteRegistrationValidator } from "./DeleteRegistrationValidator";

export class DeleteRegistrationUseCase {
	constructor(
		private registrationsRepository: IRegistrationsRepository,
		private activitiesRepository: IActivitiesRepository
	) {}

	async execute(data: IDeleteRegistrationRequestDTO) {
		// Validate the registration data
		deleteRegistrationValidator(data);
		const { registrationId } = data;

		// Check if the registration exists
		const foundRegistration = await this.registrationsRepository.findById(
			registrationId
		);
		if (!foundRegistration) {
			throw new CustomError(
				ErrorCatalog.ERROR.REGISTRATION.SERVICE.REGISTRATION_NOT_FOUND
			);
		}

		// Check if the related activity exists
		const foundActivity = await this.activitiesRepository.findById(
			foundRegistration.activityId
		);

		if (!foundActivity) {
			throw new CustomError(
				ErrorCatalog.ERROR.ACTIVITY.SERVICE.ACTIVITY_NOT_FOUND
			);
		}

		// Check if the activity has already started
		if (new Date() > new Date(foundActivity.date)) {
			throw new CustomError(
				ErrorCatalog.ERROR.REGISTRATION.SERVICE.CANNOT_CANCEL_AFTER_START
			);
		}

		// Delete the registration
		await this.registrationsRepository.delete(registrationId);

		// Update the number of current participants in the activity
		await this.activitiesRepository.update({
			...foundActivity,
			currentParticipants: foundActivity.currentParticipants - 1,
		});
	}
}
