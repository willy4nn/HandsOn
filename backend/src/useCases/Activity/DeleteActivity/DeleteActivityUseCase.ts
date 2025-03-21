import { IActivitiesRepository } from "../../../repositories/Activities/IActivitiesRepository";
import { IDeleteActivityRequestDTO } from "./DeleteActivityDTO";
import { CustomError, ErrorCatalog } from "../../../errors/CustomError";
import { deleteActivityValidator } from "./DeleteActivityValidator";

export class DeleteActivityUseCase {
	constructor(private activitiesRepository: IActivitiesRepository) {}

	async execute(data: IDeleteActivityRequestDTO) {
		// Validates the passed information
		deleteActivityValidator(data);

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
