import { Request, Response, NextFunction } from "express";
import { CustomError, ErrorCatalog } from "../errors/CustomError";

export const adminMiddleware = (
	request: Request,
	response: Response,
	next: NextFunction
) => {
	// Check if the user has the 'admin' role
	if (request.user?.role !== "admin") {
		throw new CustomError(ErrorCatalog.ERROR.USER.PERMISSION.UNAUTHORIZED);
	}

	// Proceed to the next middleware
	next();
};
