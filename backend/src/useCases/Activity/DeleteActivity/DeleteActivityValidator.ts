import { IDeleteActivityRequestDTO } from "./DeleteActivityDTO";
import { validateId } from "../../../validators/activityValidators";

// Validator function to validate activity deletion data
export function deleteActivityValidator(data: IDeleteActivityRequestDTO): void {
	validateId(data.id);
}
