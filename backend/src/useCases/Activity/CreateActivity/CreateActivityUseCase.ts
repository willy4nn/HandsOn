import { Activity } from "../../../entities/Activity/Activity";
import { CustomError, ErrorCatalog } from "../../../errors/CustomError";
import {
	ICreateActivityRequestDTO,
	ICreateActivityResponseDTO,
} from "./CreateActivityDTO";
import { IActivitiesRepository } from "../../../repositories/Activities/IActivitiesRepository";
import { createActivityValidator } from "./CreateActivityValidator";

export class CreateActivityUseCase {
	constructor(private activitiesRepository: IActivitiesRepository) {}

	async execute(
		data: ICreateActivityRequestDTO
	): Promise<ICreateActivityResponseDTO> {
		// Validate input data before processing
		createActivityValidator(data);

		const {
			title,
			description,
			location,
			createdBy,
			maxParticipants,
			date,
		} = data;

		// Create a new activity instance
		const activity = new Activity({
			title,
			description,
			date,
			location,
			createdBy,
			maxParticipants,
		});

		// Persist the activity in the repository
		await this.activitiesRepository.save(activity);

		// Return the response DTO with formatted dates
		return {
			id: activity.id,
			createdBy: activity.createdBy,
			title: activity.title,
			description: activity.description,
			location: activity.location,
			date: activity.date,
			maxParticipants: activity.maxParticipants,
			currentParticipants: activity.currentParticipants,
			status: activity.status,
			createdAt: activity.createdAt,
			updatedAt: activity.updatedAt,
		};
	}
}
