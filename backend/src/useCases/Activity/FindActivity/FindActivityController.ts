import { Request, Response, NextFunction } from "express";
import { FindActivityUseCase } from "./FindActivityUseCase";
import { IFindActivityResponseDTO } from "./FindActivityDTO";
import { ApiResponse } from "../../../helpers/ApiResponse";

export class FindActivityController {
	// Injecting the use case dependency into the controller
	constructor(private findActivityUseCase: FindActivityUseCase) {}

	// Handling the incoming request to find an activity by ID
	async handle(
		request: Request,
		response: Response,
		next: NextFunction
	): Promise<Response<ApiResponse<IFindActivityResponseDTO>>> {
		const { id } = request.params;

		try {
			// Executing the use case to find the activity
			const foundActivityDTO = await this.findActivityUseCase.handle({
				id,
			});

			// Creating the success response with the found activity
			const responseBody = ApiResponse.success(
				foundActivityDTO,
				"Activity retrieved successfully"
			);

			// Returning the response with status 200 (OK)
			return response.status(200).json(responseBody);
		} catch (err) {
			next(err);
		}
	}
}
