import jwt from "jsonwebtoken";
import { CustomError, ErrorCatalog } from "../errors/CustomError";

export function generateToken(userId: string, role: string): string {
	const secretKey: string | undefined = process.env.JWT_SECRET_KEY;

	if (!secretKey) {
		throw new CustomError(
			ErrorCatalog.ERROR.USER.AUTHENTICATION.INVALID_SECRET_KEY
		);
	}

	return jwt.sign({ userId, role }, secretKey, {
		expiresIn: "1h",
	});
}
