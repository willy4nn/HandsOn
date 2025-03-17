import { Request, Response, NextFunction } from "express";
import { UpdateActivityUseCase } from "./UpdateActivityUseCase";
import { IUpdateActivityResponseDTO } from "./UpdateActivityDTO";
import { ApiResponse } from "../../../helpers/ApiResponse";

export class UpdateActivityController {
	constructor(private updateActivityUseCase: UpdateActivityUseCase) {}

	async handle(
		request: Request,
		response: Response,
		next: NextFunction
	): Promise<Response<ApiResponse<IUpdateActivityResponseDTO>>> {
		// Retrieve the user ID and role from the req.user object
		const { userId, role } = request.user;
		const { title, description, location, max_participants, date } =
			request.body;
		const { id } = request.params;

		try {
			// Execute the use case to update the activity
			const updatedActivityDTO = await this.updateActivityUseCase.execute(
				{
					id,
					role,
					created_by: userId,
					title,
					date,
					description,
					location,
					max_participants,
				}
			);

			// Prepare the success response body
			const responseBody = ApiResponse.success(
				updatedActivityDTO,
				"Activity updated successfully"
			);

			return response.status(200).json(responseBody);
		} catch (err) {
			// Pass the error to the next middleware
			next(err);
		}
	}
}
