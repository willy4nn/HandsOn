import { Registration } from "../../../entities/Registration/Registration";
import { CustomError, ErrorCatalog } from "../../../errors/CustomError";
import {
	ICreateRegistrationRequestDTO,
	ICreateRegistrationResponseDTO,
} from "./CreateRegistrationDTO";
import { IRegistrationsRepository } from "../../../repositories/Registration/IRegistrationsRepository";
import { createRegistrationValidator } from "./CreateRegistrationValidator";
import { IActivitiesRepository } from "../../../repositories/Activities/IActivitiesRepository";

export class CreateRegistrationUseCase {
	constructor(
		private registrationsRepository: IRegistrationsRepository,
		private activitiesRepository: IActivitiesRepository
	) {}

	async execute(
		data: ICreateRegistrationRequestDTO
	): Promise<ICreateRegistrationResponseDTO> {
		// Validating the registration data
		createRegistrationValidator(data);
		const { userId, activityId } = data;
		const foundActivity = await this.activitiesRepository.findById(
			activityId
		);

		// If activity is not found, throw an error
		if (!foundActivity) {
			throw new CustomError(
				ErrorCatalog.ERROR.ACTIVITY.SERVICE.ACTIVITY_NOT_FOUND
			);
		}

		const { currentParticipants, maxParticipants, status } = foundActivity;

		// If the activity is not available (status is not "upcoming"), throw an error
		if (status !== "upcoming") {
			throw new CustomError(
				ErrorCatalog.ERROR.REGISTRATION.SERVICE.ACTIVITY_NOT_AVAILABLE
			);
		}

		// If the activity has reached its maximum participants, throw an error
		if (currentParticipants >= maxParticipants) {
			throw new CustomError(
				ErrorCatalog.ERROR.REGISTRATION.SERVICE.MAX_PARTICIPANTS_REACHED
			);
		}

		// Create a new registration
		const registration = new Registration({ userId, activityId });

		// Save the registration
		await this.registrationsRepository.save(registration);

		// Update the activity's participant count and status
		await this.activitiesRepository.update({
			...foundActivity,
			currentParticipants: currentParticipants + 1,
		});

		// Return the registration response
		return {
			id: registration.id,
			userId: registration.userId,
			activityId: registration.activityId,
			createdAt: registration.createdAt,
		};
	}
}
