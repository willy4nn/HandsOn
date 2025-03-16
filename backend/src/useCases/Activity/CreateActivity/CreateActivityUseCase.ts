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
			created_by,
			max_participants,
			date,
			role,
		} = data;

		// Validate if the role is admin
		if (role !== "admin") {
			throw new CustomError(
				ErrorCatalog.ERROR.ACTIVITY.VALIDATION.INVALID_ROLE
			);
		}

		// Create a new activity instance
		const activity = new Activity({
			title,
			description,
			date,
			location,
			created_by,
			max_participants,
		});

		// Persist the activity in the repository
		await this.activitiesRepository.save(activity);

		// Return the response DTO with formatted dates
		return {
			id: activity.id,
			title: activity.title,
			description: activity.description,
			date: activity.date,
			location: activity.location,
			max_participants: activity.max_participants,
			created_by: activity.created_by,
			created_at: activity.createdAt.toISOString(),
			updated_at: activity.updatedAt.toISOString(),
		};
	}
}
