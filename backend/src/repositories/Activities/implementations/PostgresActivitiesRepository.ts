import { pool } from "../../../config/db";
import { Activity } from "../../../entities/Activity/Activity";
import { CustomError, ErrorCatalog } from "../../../errors/CustomError";
import { IActivitiesRepository } from "../IActivitiesRepository";

export class PostgresActivitiesRepository implements IActivitiesRepository {
	// Method to save a new activitie
	async save(activity: Activity): Promise<void> {
		const client = await pool.connect();
		try {
			await client.query(
				"INSERT INTO activities (id, title, date, location, description, max_participants, created_by, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)",
				[
					activity.id,
					activity.title,
					activity.date,
					activity.location,
					activity.description,
					activity.max_participants,
					activity.created_by,
					activity.createdAt,
					activity.updatedAt,
				]
			);
		} catch (error) {
			throw new CustomError(
				ErrorCatalog.ERROR.ACTIVITY.REPOSITORY.ACTIVITY_SAVE_FAILED,
				error.message
			);
		} finally {
			client.release(); // Release the client
		}
	}
}
