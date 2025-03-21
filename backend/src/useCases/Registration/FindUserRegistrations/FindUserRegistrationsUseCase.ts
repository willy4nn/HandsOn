import {
	IFindUserRegistrationsRequestDTO,
	IFindUserRegistrationsResponseDTO,
} from "./FindUserRegistrationsDTO";
import { IRegistrationsRepository } from "../../../repositories/Registration/IRegistrationsRepository";
import { findUserRegistrationsValidator } from "./FindUserRegistrationsValidator";

export class FindUserRegistrationsUseCase {
	constructor(private registrationsRepository: IRegistrationsRepository) {}

	async execute(
		data: IFindUserRegistrationsRequestDTO
	): Promise<IFindUserRegistrationsResponseDTO[]> {
		// Validate the data
		findUserRegistrationsValidator(data);

		// Fetches the user's registrations based on the provided ID
		const foundRegistrations =
			await this.registrationsRepository.findUserRegistrations(data.id);

		// Returning the list of registrations
		return foundRegistrations;
	}
}
