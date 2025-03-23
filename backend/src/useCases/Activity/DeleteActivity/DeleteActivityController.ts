import { Request, Response, NextFunction } from "express";
import { DeleteActivityUseCase } from "./DeleteActivityUseCase";
import { IDeleteActivityRequestDTO } from "./DeleteActivityDTO";
import { ApiResponse } from "../../../helpers/ApiResponse";

export class DeleteActivityController {
	constructor(private deleteActivityUseCase: DeleteActivityUseCase) {}

	async handle(
		request: Request,
		response: Response,
		next: NextFunction
	): Promise<Response<ApiResponse<IDeleteActivityRequestDTO>>> {
		const { id } = request.params;

		try {
			// Execute the use case to delete the activity
			const updatedActivityDTO = await this.deleteActivityUseCase.execute(
				{
					id,
				}
			);

			// Prepare the success response body
			const responseBody = ApiResponse.success(
				updatedActivityDTO,
				"Activity deleted successfully"
			);

			return response.status(200).json(responseBody);
		} catch (err) {
			// Pass the error to the next middleware
			next(err);
		}
	}
}
