import { IUpdateActivityRequestDTO } from "./UpdateActivityDTO";
import {
	validateTitle,
	validateDescription,
	validateLocation,
	validateMaxParticipants,
	validateDate,
} from "../../../validators/activityValidators";

// Validator function to validate activity update data
export function updateActivityValidator(data: IUpdateActivityRequestDTO): void {
	// Validate title if provided
	if (data.title) {
		validateTitle(data.title);
	}

	// Validate description if provided
	if (data.description) {
		validateDescription(data.description);
	}

	// Validate location if provided
	if (data.location) {
		validateLocation(data.location);
	}

	// Validate max participants if provided
	if (data.maxParticipants) {
		validateMaxParticipants(data.maxParticipants);
	}

	// Validate date if provided
	if (data.date) {
		validateDate(data.date);
	}
}
