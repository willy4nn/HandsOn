import { Request, Response, NextFunction } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { ICreateUserResponseDTO } from "./CreateUserDTO";

export class CreateUserController {
	constructor(private createUserUseCase: CreateUserUseCase) {}
	async handle(
		request: Request,
		response: Response,
		next: NextFunction
	): Promise<Response<ICreateUserResponseDTO>> {
		const { name, email, password } = request.body;

		try {
			// Execute the use case to create a new user
			const createdUserDTO = await this.createUserUseCase.execute({
				name,
				email,
				password,
			});

			const responseBody = {
				data: createdUserDTO,
				message: "User created successfully",
			};

			// Return the created user data with a 201 (Created) status code
			return response.status(201).json(responseBody);
		} catch (err) {
			// Return an error response with a 500 status code if something goes wrong
			return response.status(500).json({
				message: err.message || "Internal server error",
			});
		}
	}
}
