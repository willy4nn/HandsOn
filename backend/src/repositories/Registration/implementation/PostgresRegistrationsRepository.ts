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

	// Method to delete a registration by ID
	async delete(id: string): Promise<void> {
		const client = await pool.connect();
		try {
			// Delete the registration
			const result = await client.query(
				"DELETE FROM registrations WHERE id = $1",
				[id]
			);

			// If no rows are affected, throw an error
			if (result.rowCount === 0) {
				throw new CustomError(
					ErrorCatalog.ERROR.REGISTRATION.REPOSITORY.REGISTRATION_NOT_FOUND
				);
			}
		} catch (error) {
			throw new CustomError(
				ErrorCatalog.ERROR.REGISTRATION.REPOSITORY.REGISTRATION_DELETE_FAILED,
				error.message
			);
		} finally {
			client.release();
		}
	}

	// Method to find a registration by ID
	async findById(id: string): Promise<Registration> {
		const client = await pool.connect();
		try {
			const result = await client.query(
				"SELECT * FROM registrations WHERE id = $1",
				[id]
			);
			if (result.rowCount === 0) {
				throw new CustomError(
					ErrorCatalog.ERROR.REGISTRATION.REPOSITORY.REGISTRATION_NOT_FOUND
				);
			}
			const {
				id: regId,
				user_id,
				activity_id,
				created_at,
			} = result.rows[0];

			return new Registration({
				id: regId,
				userId: user_id,
				activityId: activity_id,
				createdAt: created_at,
			});
		} catch (error) {
			throw new CustomError(
				ErrorCatalog.ERROR.REGISTRATION.REPOSITORY.REGISTRATION_NOT_FOUND,
				error.message
			);
		} finally {
			client.release();
		}
	}
}
