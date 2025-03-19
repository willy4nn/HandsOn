import { Request, Response, NextFunction } from "express";
import { CreateRegistrationUseCase } from "./CreateRegistrationUseCase";
import { ICreateRegistrationResponseDTO } from "./CreateRegistrationDTO";
import { ApiResponse } from "../../../helpers/ApiResponse";

export class CreateRegistrationController {
	constructor(private createRegistrationUseCase: CreateRegistrationUseCase) {}

	async handle(
		request: Request,
		response: Response,
		next: NextFunction
	): Promise<Response<ApiResponse<ICreateRegistrationResponseDTO>>> {
		const { userId } = request.user;
		const { id } = request.params;

		try {
			// Executing the use case to create a registration for the user in the activity
			const createdRegistrationDTO =
				await this.createRegistrationUseCase.execute({
					userId,
					activityId: id,
				});

			// Creating the success response with the created registration data
			const responseBody = ApiResponse.success(
				createdRegistrationDTO,
				"Registration created successfully"
			);

			// Returning the response with status 201 (Created)
			return response.status(201).json(responseBody);
		} catch (err) {
			next(err);
		}
	}
}
