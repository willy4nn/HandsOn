// Fields required to create an registration
export interface ICreateRegistrationRequestDTO {
	userId: string;
	activityId: string;
}

// Fields returned in the response after creating an registration
export interface ICreateRegistrationResponseDTO {
	id: string;
	userId: string;
	activityId: string;
	createdAt: string;
}
