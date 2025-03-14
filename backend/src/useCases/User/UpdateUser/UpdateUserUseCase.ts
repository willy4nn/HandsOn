import { User } from "../../../entities/User/User";
import { CustomError, ErrorCatalog } from "../../../errors/CustomError";
import { IUsersRepository } from "../../../repositories/Users/IUsersRepository";
import { IUpdateUserRequestDTO, IUpdateUserResponseDTO } from "./UpdateUserDTO";
import { updateUserValidator } from "./UpdateUserValidator";
import bcrypt from "bcrypt";

export class UpdateUserUseCase {
	constructor(private usersRepository: IUsersRepository) {}

	async execute(
		data: IUpdateUserRequestDTO
	): Promise<IUpdateUserResponseDTO> {
		// Validate the user data before processing
		updateUserValidator(data);

		// Check if the user exists by ID
		const userExists = await this.usersRepository.findById(data.id);

		// If the user doesn't exist, throw an error
		if (!userExists) {
			throw new CustomError(
				ErrorCatalog.ERROR.USER.SERVICE.USER_NOT_FOUND
			);
		}

		// Check if the email is already in use by another user
		if (data.email) {
			const userByEmail = await this.usersRepository.findByEmail(
				data.email.toLowerCase()
			);
			if (userByEmail && userByEmail.id !== data.id) {
				throw new CustomError(
					ErrorCatalog.ERROR.USER.SERVICE.EMAIL_ALREADY_IN_USE
				);
			}
		}

		// Update user fields, using provided data or retaining existing values
		const name = data.name
			? data.name.trim().replace(/\s+/g, " ") // Remove extra spaces from the name
			: userExists.name;
		const email = data.email ? data.email.toLowerCase() : userExists.email; // Ensure email is in lowercase
		const password = data.password
			? await bcrypt.hash(data.password, 10) // Hash the new password if provided
			: userExists.password;
		const role = userExists.role;

		// Create a user entity with updated data
		const user = new User(
			{
				name,
				email,
				password,
				role,
			},
			data.id
		);

		// Save the updated user in the repository
		await this.usersRepository.update(user);

		// Prepare response data with updated user details
		const userResponse: IUpdateUserResponseDTO = {
			id: user.id,
			name: user.name,
			email: user.email,
			role: user.role,
			created_at: userExists.createdAt.toISOString(),
			updated_at: userExists.updatedAt.toISOString(),
		};

		// Return the updated user response
		return userResponse;
	}
}
