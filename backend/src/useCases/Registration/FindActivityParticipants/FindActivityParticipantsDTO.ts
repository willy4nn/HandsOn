// DTO for the request to find activity participants
export interface IFindActivityParticipantsRequestDTO {
	id: string;
}

// DTO for the response containing activity participants' details
export interface IFindActivityParticipantsResponseDTO {
	id: string;
	userId: string;
	activityId: string;
	createdAt: string;
}
