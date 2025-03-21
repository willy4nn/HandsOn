import { IDeleteRegistrationRequestDTO } from "./DeleteRegistrationDTO";
import { validateId } from "../../../validators/activityValidators";

// Validator function to validate registration deletion data
export function deleteRegistrationValidator(
	data: IDeleteRegistrationRequestDTO
): void {
	validateId(data.registrationId);
}
