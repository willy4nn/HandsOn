import { IFindActivityRequestDTO } from "./FindActivityDTO";
import { validateId } from "../../../validators/activityValidators";

// Function to validate the input data for finding an activity
export function findActivityValidator(data: IFindActivityRequestDTO): void {
	// Validate the activity ID format
	validateId(data.id);
}
