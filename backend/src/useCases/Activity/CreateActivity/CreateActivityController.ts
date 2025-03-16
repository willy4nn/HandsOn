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
		console.log("Controller");

		// Retrieve the user ID from the req.user object
		const { userId, role } = request.user;
		const { title, description, location, max_participants, date } = request.body;

		try {
			const createdActivityDTO = await this.createActivityUseCase.execute(
				{
					created_by: userId,
					title,
					date,
					description,
					location,
					max_participants,
					role,
				}
			);

			const responseBody = ApiResponse.success(
				createdActivityDTO,
				"Activity created successfully"
			);

			return response.status(201).json(responseBody);
		} catch (err) {
			next(err);
		}
	}
}
