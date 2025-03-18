import { IActivitiesRepository } from "../../../repositories/Activities/IActivitiesRepository";
import { IListActivitiesResponseDTO } from "./ListActivitiesDTO";

export class ListActivitiesUseCase {
	constructor(private activitiesRepository: IActivitiesRepository) {}

	async execute(): Promise<IListActivitiesResponseDTO[]> {
		// Fetching all available activities from the repository
		const activitiesAvailable =
			await this.activitiesRepository.findAllAvailable();

		// Returning the list of available activities
		return activitiesAvailable;
	}
}
