import { ICreateActivityRequestDTO } from "./CreateActivityDTO";
import {
	validateTitle,
	validateDescription,
	validateLocation,
	validateMaxParticipants,
	validateCreatedBy,
	validateRole,
	validateDate,
} from "../../../validators/activityValidators";

// Validator function to validate activity creation data
export function createActivityValidator(data: ICreateActivityRequestDTO): void {
	validateTitle(data.title);
	validateDescription(data.description);
	validateLocation(data.location);
	validateMaxParticipants(data.max_participants);
	validateCreatedBy(data.created_by);
	validateRole(data.role);
	validateDate(data.date);
}
