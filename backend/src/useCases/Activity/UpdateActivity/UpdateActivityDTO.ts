// Fields required to update a activity
export interface IUpdateActivityRequestDTO {
	id: string;
	title?: string;
	description?: string;
	location?: string;
	max_participants?: number;
	created_by: string;
	role: string;
	date?: string;
}

// Fields returned in the response after updating a activity
export interface IUpdateActivityResponseDTO {
	id: string;
	title: string;
	description: string;
	location: string;
	max_participants: number;
	created_by: string;
	date: string;
	created_at: string;
	updated_at: string;
}
