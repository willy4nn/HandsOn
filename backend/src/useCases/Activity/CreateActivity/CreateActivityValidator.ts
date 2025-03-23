import { ICreateActivityRequestDTO } from "./CreateActivityDTO";
import {
	validateCreatedBy,
	validateTitle,
	validateDescription,
	validateLocation,
	validateDate,
	validateMaxParticipants,
	validateRole,
} from "../../../validators/activityValidators";

// Validator function to validate activity creation data
export function createActivityValidator(data: ICreateActivityRequestDTO): void {
	validateCreatedBy(data.createdBy);
	validateTitle(data.title);
	validateDescription(data.description);
	validateLocation(data.location);
	validateDate(data.date);
	validateMaxParticipants(data.maxParticipants);
}
