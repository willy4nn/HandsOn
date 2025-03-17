import { Activity } from "../../../entities/Activity/Activity";
import { CustomError, ErrorCatalog } from "../../../errors/CustomError";
import {
	IUpdateActivityRequestDTO,
	IUpdateActivityResponseDTO,
} from "./UpdateActivityDTO";
import { IActivitiesRepository } from "../../../repositories/Activities/IActivitiesRepository";
import { updateActivityValidator } from "./UpdateActivityValidator";

export class UpdateActivityUseCase {
	constructor(private activiesRepository: IActivitiesRepository) {}

	async execute(
		data: IUpdateActivityRequestDTO
	): Promise<IUpdateActivityResponseDTO> {
		// Validate the data
		updateActivityValidator(data);

		// Validate if the role is admin
		if (data.role !== "admin") {
			throw new CustomError(
				ErrorCatalog.ERROR.ACTIVITY.VALIDATION.INVALID_ROLE
			);
		}

		// Find the activity by its ID
		const activity = await this.activiesRepository.findById(data.id);

		if (!activity) {
			throw new CustomError(
				ErrorCatalog.ERROR.ACTIVITY.SERVICE.ACTIVITY_NOT_FOUND
			);
		}

		// Create the updated activity object
		const updatedActivity = new Activity(
			{
				title: data.title ?? activity.title,
				date: data.date ?? activity.date,
				location: data.location ?? activity.location,
				description: data.description ?? activity.description,
				max_participants:
					data.max_participants ?? activity.max_participants,
				created_by: data.created_by ?? activity.created_by,
			},
			data.id
		);

		// Save the updated activity
		await this.activiesRepository.update(updatedActivity);

		// Return the response DTO
		return {
			id: updatedActivity.id,
			title: updatedActivity.title,
			description: updatedActivity.description,
			location: updatedActivity.location,
			max_participants: updatedActivity.max_participants,
			created_by: updatedActivity.created_by,
			date: updatedActivity.date,
			created_at: updatedActivity.createdAt.toISOString(),
			updated_at: updatedActivity.updatedAt.toISOString(),
		};
	}
}
