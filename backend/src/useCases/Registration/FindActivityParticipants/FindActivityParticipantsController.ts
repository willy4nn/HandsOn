import { Request, Response, NextFunction } from "express";
import { FindActivityParticipantsUseCase } from "./FindActivityParticipantsUseCase";
import { IFindActivityParticipantsResponseDTO } from "./FindActivityParticipantsDTO";
import { ApiResponse } from "../../../helpers/ApiResponse";

export class FindActivityParticipantsController {
	constructor(
		private findActivityParticipantsUseCase: FindActivityParticipantsUseCase
	) {}

	async handle(
		request: Request,
		response: Response,
		next: NextFunction
	): Promise<Response<ApiResponse<IFindActivityParticipantsResponseDTO>>> {
		const { id } = request.params; // Extract activity ID from request parameters

		try {
			// Execute the use case to retrieve activity participants
			const foundParticipantsDTO =
				await this.findActivityParticipantsUseCase.execute({ id });

			// Create a success response with the list of participants
			const responseBody = ApiResponse.success(
				foundParticipantsDTO,
				"Activity participants retrieved successfully" // Updated success message
			);

			return response.status(200).json(responseBody);
		} catch (err) {
			next(err); // Pass the error to the next middleware
		}
	}
}
