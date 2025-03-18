import { Request, Response, NextFunction } from "express";
import { ListActivitiesUseCase } from "./ListActivitiesUseCase";
import { IListActivitiesResponseDTO } from "./ListActivitiesDTO";
import { ApiResponse } from "../../../helpers/ApiResponse";

export class ListActivitiesController {
	constructor(private listActivitiesUseCase: ListActivitiesUseCase) {}

	async handle(
		request: Request,
		response: Response,
		next: NextFunction
	): Promise<Response<ApiResponse<IListActivitiesResponseDTO>>> {
		try {
			// Executing the use case to list activities
			const listedActivitiesDTO =
				await this.listActivitiesUseCase.execute();

			// Creating the success response with the listed activities
			const responseBody = ApiResponse.success(
				listedActivitiesDTO,
				"Activities listed successfully"
			);

			// Returning the response with status 200
			return response.status(201).json(responseBody);
		} catch (err) {
			next(err);
		}
	}
}
