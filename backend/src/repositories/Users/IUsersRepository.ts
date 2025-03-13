import { User } from "../../entities/User/User";

export interface IUsersRepository {
	// Method to save a new user
	save(user: User): Promise<void>;

	// Method to find a user by email
	findByEmail(email: string): Promise<User>;
}
