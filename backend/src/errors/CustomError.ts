// Interface for CustomError parameters
interface CustomErrorParams {
	message: string;
	statusCode: number;
	errorName?: string;
}

// Definition of the error catalog with strong types
class ErrorCatalog {
	static ERROR = {
		USER: {
			VALIDATION: {
				ID_REQUIRED: {
					message: "User ID is required",
					errorName: "ID_REQUIRED",
					statusCode: 400,
				},
				ID_INVALID: {
					message: "User ID is invalid",
					errorName: "ID_INVALID",
					statusCode: 400,
				},
				ID_INVALID_FORMAT: {
					message: "User ID format is invalid",
					errorName: "ID_INVALID_FORMAT",
					statusCode: 400,
				},
				NAME_REQUIRED: {
					message: "Name is required",
					errorName: "NAME_REQUIRED",
					statusCode: 400,
				},
				EMAIL_REQUIRED: {
					message: "Email is required",
					errorName: "EMAIL_REQUIRED",
					statusCode: 400,
				},
				PASSWORD_REQUIRED: {
					message: "Password is required",
					errorName: "PASSWORD_REQUIRED",
					statusCode: 400,
				},
				INVALID_NAME_LENGTH: {
					message: "Name must be 3-50 characters",
					errorName: "INVALID_NAME_LENGTH",
					statusCode: 400,
				},
				INVALID_NAME_FORMAT: {
					message: "Name must only contain letters and spaces",
					errorName: "INVALID_NAME_FORMAT",
					statusCode: 400,
				},
				INVALID_EMAIL_FORMAT: {
					message: "Invalid email format",
					errorName: "INVALID_EMAIL_FORMAT",
					statusCode: 400,
				},
				EMAIL_TOO_LONG: {
					message: "Email exceeds 254 characters",
					errorName: "EMAIL_TOO_LONG",
					statusCode: 400,
				},
				EMAIL_DOMAIN_MISSING: {
					message: "Email domain is missing",
					errorName: "EMAIL_DOMAIN_MISSING",
					statusCode: 400,
				},
				EMAIL_DOMAIN_INVALID: {
					message: "Invalid email domain",
					errorName: "EMAIL_DOMAIN_INVALID",
					statusCode: 400,
				},
				EMAIL_DOMAIN_INVALID_FORMAT: {
					message: "Email domain can't start or end with a period",
					errorName: "EMAIL_DOMAIN_INVALID_FORMAT",
					statusCode: 400,
				},
				LOCAL_PART_INVALID: {
					message: "Email local part has invalid characters",
					errorName: "LOCAL_PART_INVALID",
					statusCode: 400,
				},
				PASSWORD_TOO_SHORT: {
					message: "Password must be at least 8 characters",
					errorName: "PASSWORD_TOO_SHORT",
					statusCode: 400,
				},
				PASSWORD_NO_UPPERCASE: {
					message: "Password needs an uppercase letter",
					errorName: "PASSWORD_NO_UPPERCASE",
					statusCode: 400,
				},
				PASSWORD_NO_LOWERCASE: {
					message: "Password needs a lowercase letter",
					errorName: "PASSWORD_NO_LOWERCASE",
					statusCode: 400,
				},
				PASSWORD_NO_NUMBER: {
					message: "Password needs a number",
					errorName: "PASSWORD_NO_NUMBER",
					statusCode: 400,
				},
				PASSWORD_NO_SPECIAL_CHAR: {
					message: "Password needs a special character",
					errorName: "PASSWORD_NO_SPECIAL_CHAR",
					statusCode: 400,
				},
				INVALID_ROLE: {
					message: "Role is invalid",
					errorName: "INVALID_ROLE",
					statusCode: 400,
				},
			},
			AUTHENTICATION: {
				INVALID_CREDENTIALS: {
					message: "Invalid credentials",
					errorName: "INVALID_CREDENTIALS",
					statusCode: 401,
				},
				USER_NOT_FOUND: {
					message: "User not found",
					errorName: "USER_NOT_FOUND",
					statusCode: 404,
				},
				ACCOUNT_LOCKED: {
					message: "Account locked, contact support",
					errorName: "ACCOUNT_LOCKED",
					statusCode: 423,
				},
				NO_TOKEN_PROVIDED: {
					message: "Access denied. No authentication token provided.",
					errorName: "NO_TOKEN_PROVIDED",
					statusCode: 401,
				},
				INVALID_TOKEN_PAYLOAD: {
					message: "Invalid token payload.",
					errorName: "INVALID_TOKEN_PAYLOAD",
					statusCode: 401,
				},
				INVALID_OR_EXPIRED_TOKEN: {
					message: "Invalid or expired token.",
					errorName: "INVALID_OR_EXPIRED_TOKEN",
					statusCode: 401,
				},
				INVALID_SECRET_KEY: {
					message:
						"JWT_SECRET_KEY is not defined in the environment variables.",
					errorName: "INVALID_SECRET_KEY",
					statusCode: 500,
				},
			},
			REPOSITORY: {
				USER_SAVE_FAILED: {
					message: "Failed to save user",
					errorName: "USER_SAVE_FAILED",
					statusCode: 500,
				},
				QUERY_FAILED: {
					message: "Database query failed",
					errorName: "QUERY_FAILED",
					statusCode: 500,
				},
				USER_NOT_FOUND: {
					message: "User not found",
					errorName: "USER_NOT_FOUND",
					statusCode: 404,
				},
				USER_UPDATE_FAILED: {
					message: "Failed to update user",
					errorName: "USER_UPDATE_FAILED",
					statusCode: 500,
				},
				USER_DELETE_FAILED: {
					message: "Failed to delete user",
					errorName: "USER_DELETE_FAILED",
					statusCode: 500,
				},
			},
			PERMISSION: {
				UNAUTHORIZED: {
					message: "Unauthorized action",
					errorName: "UNAUTHORIZED",
					statusCode: 403,
				},
				FORBIDDEN: {
					message: "Action forbidden",
					errorName: "FORBIDDEN",
					statusCode: 403,
				},
			},
			SERVICE: {
				USER_ALREADY_EXISTS: {
					message: "User already exists",
					errorName: "USER_ALREADY_EXISTS",
					statusCode: 409,
				},
				EMAIL_ALREADY_IN_USE: {
					message: "Email is already in use",
					errorName: "EMAIL_ALREADY_IN_USE",
					statusCode: 409,
				},
				INVALID_USER_STATUS: {
					message: "Invalid user status",
					errorName: "INVALID_USER_STATUS",
					statusCode: 400,
				},
				INSUFFICIENT_PRIVILEGES: {
					message: "Insufficient privileges",
					errorName: "INSUFFICIENT_PRIVILEGES",
					statusCode: 403,
				},
				USER_NOT_FOUND: {
					message: "User does not exist",
					errorName: "USER_NOT_FOUND",
					statusCode: 404,
				},
				INVALID_ROLE: {
					message: "Invalid user role",
					errorName: "INVALID_ROLE",
					statusCode: 400,
				},
			},
		},
		ACTIVITY: {
			REPOSITORY: {
				ACTIVITY_SAVE_FAILED: {
					message: "Failed to save activity",
					errorName: "ACTIVITY_SAVE_FAILED",
					statusCode: 500,
				},
				ACTIVITY_UPDATE_FAILED: {
					message: "Failed to update activity",
					errorName: "ACTIVITY_UPDATE_FAILED",
					statusCode: 500,
				},
				ACTIVITY_NOT_FOUND: {
					message: "Activity not found",
					errorName: "ACTIVITY_NOT_FOUND",
					statusCode: 404,
				},
				ACTIVITY_FIND_FAILED: {
					message: "Failed to find activity",
					errorName: "ACTIVITY_FIND_FAILED",
					statusCode: 500,
				},
				ACTIVITY_DELETE_FAILED: {
					message: "Failed to delete activity",
					errorName: "ACTIVITY_DELETE_FAILED",
					statusCode: 500,
				},
				ACTIVITY_FIND_ALL_FAILED: {
					message: "Failed to find all available activities",
					errorName: "ACTIVITY_FIND_ALL_FAILED",
					statusCode: 500,
				},
			},
			VALIDATION: {
				ID_REQUIRED: {
					message: "Activity ID is required",
					errorName: "ID_REQUIRED",
					statusCode: 400,
				},
				ID_INVALID: {
					message: "Activity ID is invalid",
					errorName: "ID_INVALID",
					statusCode: 400,
				},
				ID_INVALID_FORMAT: {
					message: "Activity ID format is invalid",
					errorName: "ID_INVALID_FORMAT",
					statusCode: 400,
				},
				TITLE_REQUIRED: {
					message: "Title is required",
					errorName: "TITLE_REQUIRED",
					statusCode: 400,
				},
				TITLE_INVALID_LENGTH: {
					message: "Title must be between 3 and 100 characters",
					errorName: "TITLE_INVALID_LENGTH",
					statusCode: 400,
				},
				DESCRIPTION_REQUIRED: {
					message: "Description is required",
					errorName: "DESCRIPTION_REQUIRED",
					statusCode: 400,
				},
				DESCRIPTION_INVALID_LENGTH: {
					message:
						"Description must be between 10 and 500 characters",
					errorName: "DESCRIPTION_INVALID_LENGTH",
					statusCode: 400,
				},
				LOCATION_REQUIRED: {
					message: "Location is required",
					errorName: "LOCATION_REQUIRED",
					statusCode: 400,
				},
				LOCATION_INVALID_LENGTH: {
					message: "Location must be between 3 and 100 characters",
					errorName: "LOCATION_INVALID_LENGTH",
					statusCode: 400,
				},
				MAX_PARTICIPANTS_REQUIRED: {
					message: "Max participants is required",
					errorName: "MAX_PARTICIPANTS_REQUIRED",
					statusCode: 400,
				},
				MAX_PARTICIPANTS_INVALID: {
					message:
						"Max participants must be an integer between 1 and 5",
					errorName: "MAX_PARTICIPANTS_INVALID",
					statusCode: 400,
				},
				ROLE_REQUIRED: {
					message: "Role is required",
					errorName: "ROLE_REQUIRED",
					statusCode: 400,
				},
				INVALID_ROLE: {
					message: "Role is invalid",
					errorName: "INVALID_ROLE",
					statusCode: 400,
				},
				DATE_REQUIRED: {
					message: "Date is required",
					errorName: "DATE_REQUIRED",
					statusCode: 400,
				},
				INVALID_DATE_FORMAT: {
					message: "Date format is invalid",
					errorName: "INVALID_DATE_FORMAT",
					statusCode: 400,
				},
			},
			SERVICE: {
				ACTIVITY_NOT_FOUND: {
					message: "Activity not found",
					errorName: "ACTIVITY_NOT_FOUND",
					statusCode: 404,
				},
			},
		},
		SERVER: {
			INTERNAL_ERROR: {
				message: "Internal server error",
				errorName: "INTERNAL_ERROR",
				statusCode: 500,
			},
			DATABASE_CONNECTION_FAILED: {
				message: "Database connection failed",
				errorName: "DATABASE_CONNECTION_FAILED",
				statusCode: 500,
			},
			SQL_QUERY_FAILED: {
				message: "SQL query error",
				errorName: "SQL_QUERY_FAILED",
				statusCode: 500,
			},
		},
	};
}

// Custom error class with optional defaults
class CustomError extends Error {
	statusCode: number;
	details?: string;
	errorName?: string;

	constructor(
		{ message, statusCode, errorName }: CustomErrorParams,
		details?: string
	) {
		super(message);
		this.errorName = errorName;
		this.statusCode = statusCode;
		this.details = details;

		// Capture stack trace for debugging
		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, CustomError);
		}
	}
}

export { CustomError, ErrorCatalog };
