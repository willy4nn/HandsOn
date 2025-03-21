import { Request, Response, NextFunction } from "express";
import { FindUserRegistrationsUseCase } from "./FindUserRegistrationsUseCase";
import { IFindUserRegistrationsResponseDTO } from "./FindUserRegistrationsDTO";
import { ApiResponse } from "../../../helpers/ApiResponse";

export class FindUserRegistrationsController {
	constructor(
		private findUserRegistrationsUseCase: FindUserRegistrationsUseCase
	) {}

	async handle(
		request: Request,
		response: Response,
		next: NextFunction
	): Promise<Response<ApiResponse<IFindUserRegistrationsResponseDTO>>> {
		const { userId } = request.user; // Get the user ID from the request
		try {
			// Execute the use case to find the user's registrations
			const foundRegistrationsDTO =
				await this.findUserRegistrationsUseCase.execute({ id: userId });

			// Create the success response with the list of registrations
			const responseBody = ApiResponse.success(
				foundRegistrationsDTO,
				"User registrations retrieved successfully"
			);

			return response.status(200).json(responseBody); // Return the response with status 200
		} catch (err) {
			next(err);
		}
	}
}
