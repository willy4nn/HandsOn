import { Registration } from "../../entities/Registration/Registration";

export interface IRegistrationsRepository {
	// Method to save a new registration
	save(registration: Registration): Promise<void>;
}
