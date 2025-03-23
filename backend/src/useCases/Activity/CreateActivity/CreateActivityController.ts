import { Request, Response, NextFunction } from "express";
import { CreateActivityUseCase } from "./CreateActivityUseCase";
import { ICreateActivityResponseDTO } from "./CreateActivityDTO";
import { ApiResponse } from "../../../helpers/ApiResponse";

export class CreateActivityController {
	constructor(private createActivityUseCase: CreateActivityUseCase) {}

	async handle(
		request: Request,
		response: Response,
		next: NextFunction
	): Promise<Response<ICreateActivityResponseDTO>> {
		// Retrieve the user ID from the req.user object
		const { userId } = request.user;
		const { title, description, location, maxParticipants, date } =
			request.body;

		try {
			// Call the use case to create a new activity
			const createdActivityDTO = await this.createActivityUseCase.execute(
				{
					createdBy: userId,
					title,
					description,
					location,
					date,
					maxParticipants,
				}
			);

			// Format the success response
			const responseBody = ApiResponse.success(
				createdActivityDTO,
				"Activity created successfully"
			);

			// Return HTTP 201 (Created) with the response data
			return response.status(201).json(responseBody);
		} catch (err) {
			// Pass the error to the error-handling middleware
			next(err);
		}
	}
}
