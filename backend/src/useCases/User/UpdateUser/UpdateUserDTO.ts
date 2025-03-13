// Fields allowed to update a user
export interface IUpdateUserRequestDTO {
	id: string;
	name?: string;
	email?: string;
	password?: string;
}

// Fields returned in the response after updating a user
export interface IUpdateUserResponseDTO {
	id: string;
	name: string;
	email: string;
	role: string;
	created_at: string;
	updated_at: string;
}
