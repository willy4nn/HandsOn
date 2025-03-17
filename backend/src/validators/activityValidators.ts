import { CustomError, ErrorCatalog } from "../errors/CustomError";

// Validate activity ID (must be a valid UUID)
function validateId(id: string): void {
	if (!id) {
		throw new CustomError(
			ErrorCatalog.ERROR.ACTIVITY.VALIDATION.ID_REQUIRED
		);
	}
	if (typeof id !== "string" || id.trim() === "") {
		throw new CustomError(
			ErrorCatalog.ERROR.ACTIVITY.VALIDATION.ID_INVALID
		);
	}
	const uuidRegex =
		/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/;
	if (!uuidRegex.test(id)) {
		throw new CustomError(
			ErrorCatalog.ERROR.ACTIVITY.VALIDATION.ID_INVALID_FORMAT
		);
	}
}

// Validate activity title (required, 3-100 characters)
function validateTitle(title: string): void {
	if (!title) {
		throw new CustomError(
			ErrorCatalog.ERROR.ACTIVITY.VALIDATION.TITLE_REQUIRED
		);
	}
	if (title.length < 3 || title.length > 100) {
		throw new CustomError(
			ErrorCatalog.ERROR.ACTIVITY.VALIDATION.TITLE_INVALID_LENGTH
		);
	}
}

// Validate activity description (required, 10-500 characters)
function validateDescription(description: string): void {
	if (!description) {
		throw new CustomError(
			ErrorCatalog.ERROR.ACTIVITY.VALIDATION.DESCRIPTION_REQUIRED
		);
	}
	if (description.length < 10 || description.length > 500) {
		throw new CustomError(
			ErrorCatalog.ERROR.ACTIVITY.VALIDATION.DESCRIPTION_INVALID_LENGTH
		);
	}
}

// Validate activity location (required, 3-100 characters)
function validateLocation(location: string): void {
	if (!location) {
		throw new CustomError(
			ErrorCatalog.ERROR.ACTIVITY.VALIDATION.LOCATION_REQUIRED
		);
	}
	if (location.length < 3 || location.length > 100) {
		throw new CustomError(
			ErrorCatalog.ERROR.ACTIVITY.VALIDATION.LOCATION_INVALID_LENGTH
		);
	}
}

// Validate max participants (required, integer between 1 and 5)
function validateMaxParticipants(maxParticipants: number): void {
	if (maxParticipants === undefined || maxParticipants === null) {
		throw new CustomError(
			ErrorCatalog.ERROR.ACTIVITY.VALIDATION.MAX_PARTICIPANTS_REQUIRED
		);
	}
	if (
		!Number.isInteger(maxParticipants) ||
		maxParticipants < 1 ||
		maxParticipants > 5
	) {
		throw new CustomError(
			ErrorCatalog.ERROR.ACTIVITY.VALIDATION.MAX_PARTICIPANTS_INVALID
		);
	}
}

// Validate user role (must be 'user' or 'admin')
function validateRole(role: string): void {
	if (!role) {
		throw new CustomError(
			ErrorCatalog.ERROR.ACTIVITY.VALIDATION.ROLE_REQUIRED
		);
	}
	if (!["user", "admin"].includes(role.trim().toLowerCase())) {
		throw new CustomError(
			ErrorCatalog.ERROR.ACTIVITY.VALIDATION.INVALID_ROLE
		);
	}
}

// Validate activity date (must be a valid date format)
function validateDate(date: string): void {
	if (!date) {
		throw new CustomError(
			ErrorCatalog.ERROR.ACTIVITY.VALIDATION.DATE_REQUIRED
		);
	}
	if (isNaN(Date.parse(date))) {
		throw new CustomError(
			ErrorCatalog.ERROR.ACTIVITY.VALIDATION.INVALID_DATE_FORMAT
		);
	}
}

// Validate createdBy (must be a valid user ID)
function validateCreatedBy(createdBy: string): void {
	validateId(createdBy);
}

export {
	validateTitle,
	validateDescription,
	validateLocation,
	validateMaxParticipants,
	validateRole,
	validateDate,
	validateCreatedBy,
	validateId,
};
