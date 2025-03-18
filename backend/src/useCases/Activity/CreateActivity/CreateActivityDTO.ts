// Fields required to create an activity
export interface ICreateActivityRequestDTO {
	title: string;
	createdBy: string;
	description: string;
	location: string;
	date: string;
	maxParticipants: number;
	role: string;
}

// Fields returned in the response after creating an activity
export interface ICreateActivityResponseDTO {
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
