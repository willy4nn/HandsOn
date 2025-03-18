// Fields required to update a activity
export interface IUpdateActivityRequestDTO {
	id: string;
	title?: string;
	description?: string;
	location?: string;
	maxParticipants?: number;
	date?: string;
	role: string;
}

// Fields returned in the response after updating a activity
export interface IUpdateActivityResponseDTO {
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
