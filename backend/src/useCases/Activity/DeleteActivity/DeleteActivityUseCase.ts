import { IActivitiesRepository } from "../../../repositories/Activities/IActivitiesRepository";
import { IDeleteActivityRequestDTO } from "./DeleteActivityDTO";
import { CustomError, ErrorCatalog } from "../../../errors/CustomError";
import { deleteActivityValidator } from "./DeleteActivityValidator";

export class DeleteActivityUseCase {
	constructor(private activitiesRepository: IActivitiesRepository) {}

	async execute(data: IDeleteActivityRequestDTO) {
		// Validates the passed information
		deleteActivityValidator(data);

		// Validate if the role is admin
		if (data.role !== "admin") {
			throw new CustomError(
				ErrorCatalog.ERROR.ACTIVITY.VALIDATION.INVALID_ROLE
			);
		}

		// Checks if the user exists by ID
		const activityExists = await this.activitiesRepository.findById(
			data.id
		);

		// If not exists, throws an error
		if (!activityExists) {
			throw new CustomError(
				ErrorCatalog.ERROR.ACTIVITY.SERVICE.ACTIVITY_NOT_FOUND
			);
		}

		// Delete the activity
		await this.activitiesRepository.delete(data.id);
	}
}
