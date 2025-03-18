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
		const updatedActivity = new Activity({
			id: activity.id,
			createdBy: activity.createdBy,
			title: data.title ?? activity.title,
			description: data.description ?? activity.description,
			location: data.location ?? activity.location,
			date: data.date ?? activity.date,
			maxParticipants: data.maxParticipants ?? activity.maxParticipants,
			currentParticipants: activity.currentParticipants,
			status: activity.status,
			createdAt: activity.createdAt,
			updatedAt: new Date().toISOString(),
		});

		// Save the updated activity
		await this.activiesRepository.update(updatedActivity);

		// Return the response DTO
		return {
			id: updatedActivity.id,
			title: updatedActivity.title,
			description: updatedActivity.description,
			location: updatedActivity.location,
			maxParticipants: updatedActivity.maxParticipants,
			currentParticipants: updatedActivity.currentParticipants,
			createdBy: updatedActivity.createdBy,
			date: updatedActivity.date,
			status: updatedActivity.status,
			createdAt: updatedActivity.createdAt,
			updatedAt: updatedActivity.updatedAt,
		};
	}
}
