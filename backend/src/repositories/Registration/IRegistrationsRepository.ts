import { Registration } from "../../entities/Registration/Registration";

export interface IRegistrationsRepository {
	// Method to save a new registration
	save(registration: Registration): Promise<void>;

	// Method to delete a registration by its ID
	delete(id: string): Promise<void>;

	// Method to find a registration by its ID
	findById(id: string): Promise<Registration>;

	// Method to find all registrations of a specific user by user ID
	findUserRegistrations(id: string): Promise<Registration[]>;

	// Method to find all registrations of a specific activity by activity ID
	findActivityParticipants(activityId: string): Promise<Registration[]>;
}
