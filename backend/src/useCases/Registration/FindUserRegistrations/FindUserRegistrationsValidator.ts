import { IFindUserRegistrationsRequestDTO } from "./FindUserRegistrationsDTO";
import { validateId } from "../../../validators/userValidators";

// Function to validate the input data for finding registrations
export function findUserRegistrationsValidator(
	data: IFindUserRegistrationsRequestDTO
): void {
	// Validate the user ID format
	validateId(data.id);
}
