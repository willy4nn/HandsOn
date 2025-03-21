import { IFindActivityParticipantsRequestDTO } from "./FindActivityParticipantsDTO";
import { validateId } from "../../../validators/activityValidators";

// Validates the request data for finding activity participants
export function findActivityParticipantsValidator(
	data: IFindActivityParticipantsRequestDTO
): void {
	validateId(data.id); // Ensure the activity ID is valid
}
