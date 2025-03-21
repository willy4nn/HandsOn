import { Request, Response, NextFunction } from "express";
import { DeleteRegistrationUseCase } from "./DeleteRegistrationUseCase";
import { ApiResponse } from "../../../helpers/ApiResponse";

export class DeleteRegistrationController {
	constructor(private deleteRegistrationUseCase: DeleteRegistrationUseCase) {}

	async handle(
		request: Request,
		response: Response,
		next: NextFunction
	): Promise<Response<ApiResponse<null>>> {
		const { id } = request.params;

		try {
			// Execute the use case to delete the registration
			await this.deleteRegistrationUseCase.execute({
				registrationId: id,
			});

			// Return a success response after deletion
			const responseBody = ApiResponse.success(
				{},
				"Registration deleted successfully"
			);

			// Returning the success response with status 200
			return response.status(200).json(responseBody);
		} catch (err) {
			next(err);
		}
	}
}
