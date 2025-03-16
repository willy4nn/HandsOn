// Fields required to create a activity
export interface ICreateActivityRequestDTO {
	title: string;
	description: string;
	location: string;
	max_participants: number;
	created_by: string;
	role: string;
	date: string;
}

// Fields returned in the response after creating a activity
export interface ICreateActivityResponseDTO {
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
