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

	// Method to update a activity
	async update(activity: Activity): Promise<void> {
		const client = await pool.connect();
		try {
			await client.query(
				"UPDATE activities SET title = $2, date = $3, location = $4, description = $5, max_participants = $6, created_by = $7, updated_at = $8 WHERE id = $1",
				[
					activity.id,
					activity.title,
					activity.date,
					activity.location,
					activity.description,
					activity.max_participants,
					activity.created_by,
					activity.updatedAt,
				]
			);
		} catch (error) {
			throw new CustomError(
				ErrorCatalog.ERROR.ACTIVITY.REPOSITORY.ACTIVITY_UPDATE_FAILED,
				error.message
			);
		} finally {
			client.release();
		}
	}

	// Method to delete an activity by id
	async delete(id: string): Promise<void> {
		const client = await pool.connect();
		try {
			await client.query("DELETE FROM activities WHERE id = $1", [id]);
		} catch (error) {
			throw new CustomError(
				ErrorCatalog.ERROR.ACTIVITY.REPOSITORY.ACTIVITY_DELETE_FAILED,
				error.message
			);
		} finally {
			client.release();
		}
	}

	// Method to find an activity by id
	async findById(id: string): Promise<Activity> {
		const client = await pool.connect();
		try {
			const res = await client.query(
				"SELECT * FROM activities WHERE id = $1",
				[id]
			);
			// If no activity is found, throw an error
			if (res.rows.length > 0) {
				// Return the found activity mapped to the Activity entity
				const activityRow = res.rows[0];
				// Pass props and id to the Activity constructor
				const activity = new Activity(
					{
						title: activityRow.title,
						date: activityRow.date,
						location: activityRow.location,
						description: activityRow.description,
						max_participants: activityRow.max_participants,
						created_by: activityRow.created_by,
					},
					activityRow.id,
					activityRow.created_at,
					activityRow.updated_at
				);
				return activity;
			}
			return null;
		} catch (error) {
			throw new CustomError(
				ErrorCatalog.ERROR.ACTIVITY.REPOSITORY.ACTIVITY_FIND_FAILED,
				error.message
			);
		} finally {
			client.release();
		}
	}
}
