import { ICreateRegistrationRequestDTO } from "./CreateRegistrationDTO";
import { validateId } from "../../../validators/activityValidators";

// Validator function to validate registration creation data
export function createRegistrationValidator(
	data: ICreateRegistrationRequestDTO
): void {
	validateId(data.activityId);
}
