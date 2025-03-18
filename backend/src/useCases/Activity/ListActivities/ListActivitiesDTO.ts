// Fields returned in the response after listing all available activities
export interface IListActivitiesResponseDTO {
	id: string;
	createdBy: string;
	title: string;
	description: string;
	location: string;
	date: string;
	maxParticipants: number;
	currentParticipants: number;
	status: string;
	createdAt: string;
	updatedAt: string;
}
