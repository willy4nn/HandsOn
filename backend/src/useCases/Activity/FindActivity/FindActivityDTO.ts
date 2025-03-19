// Fields required to find an activity
export interface IFindActivityRequestDTO {
	id: string;
}

// Fields returned when an activity is found
export interface IFindActivityResponseDTO {
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
