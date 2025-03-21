// Fields required to find registrations
export interface IFindUserRegistrationsRequestDTO {
	id: string;
}

// Fields returned after finding registrations
export interface IFindUserRegistrationsResponseDTO {
	id: string;
	userId: string;
	activityId: string;
	createdAt: string;
}
