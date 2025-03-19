import { pool } from "../../../config/db";
import { Registration } from "../../../entities/Registration/Registration";
import { CustomError, ErrorCatalog } from "../../../errors/CustomError";
import { IRegistrationsRepository } from "../IRegistrationsRepository";

export class PostgresRegistrationsRepository
	implements IRegistrationsRepository
{
	// Method to save a new registration
	async save(registration: Registration): Promise<void> {
		const client = await pool.connect();
		try {
			// Insert the registration
			await client.query(
				"INSERT INTO registrations (id, user_id, activity_id, created_at) VALUES ($1, $2, $3, $4)",
				[
					registration.id,
					registration.userId,
					registration.activityId,
					registration.createdAt,
				]
			);
		} catch (error) {
			throw new CustomError(
				ErrorCatalog.ERROR.REGISTRATION.REPOSITORY.REGISTRATION_SAVE_FAILED,
				error.message
			);
		} finally {
			client.release();
		}
	}
}
