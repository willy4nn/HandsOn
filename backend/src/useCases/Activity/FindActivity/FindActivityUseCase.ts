import { Activity } from "../../../entities/Activity/Activity";
import { CustomError, ErrorCatalog } from "../../../errors/CustomError";
import {
	IFindActivityRequestDTO,
	IFindActivityResponseDTO,
} from "./FindActivityDTO";
import { IActivitiesRepository } from "../../../repositories/Activities/IActivitiesRepository";
import { findActivityValidator } from "./FindActivityValidator";

export class FindActivityUseCase {
	constructor(private activiesRepository: IActivitiesRepository) {}

	async handle(
		data: IFindActivityRequestDTO
	): Promise<IFindActivityResponseDTO> {
		// Validate the data
		findActivityValidator(data);

		// Find the activity by its ID
		const foundActivity = await this.activiesRepository.findById(data.id);

		if (!foundActivity) {
			throw new CustomError(
				ErrorCatalog.ERROR.ACTIVITY.SERVICE.ACTIVITY_NOT_FOUND
			);
		}

		// Return the response DTO
		return {
			id: foundActivity.id,
			title: foundActivity.title,
			description: foundActivity.description,
			location: foundActivity.location,
			maxParticipants: foundActivity.maxParticipants,
			currentParticipants: foundActivity.currentParticipants,
			createdBy: foundActivity.createdBy,
			date: foundActivity.date,
			status: foundActivity.status,
			createdAt: foundActivity.createdAt,
			updatedAt: foundActivity.updatedAt,
		};
	}
}
