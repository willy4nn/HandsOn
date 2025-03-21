import {
	IFindActivityParticipantsRequestDTO,
	IFindActivityParticipantsResponseDTO,
} from "./FindActivityParticipantsDTO";
import { IRegistrationsRepository } from "../../../repositories/Registration/IRegistrationsRepository";
import { findActivityParticipantsValidator } from "./FindActivityParticipantsValidator";

export class FindActivityParticipantsUseCase {
	constructor(private registrationsRepository: IRegistrationsRepository) {}

	async execute(
		data: IFindActivityParticipantsRequestDTO
	): Promise<IFindActivityParticipantsResponseDTO[]> {
		// Validate the input data before proceeding
		findActivityParticipantsValidator(data);

		// Retrieve participants of the specified activity from the repository
		const foundParticipants =
			await this.registrationsRepository.findActivityParticipants(
				data.id
			);

		return foundParticipants;
	}
}
