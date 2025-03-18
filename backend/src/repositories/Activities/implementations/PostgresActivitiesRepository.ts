import { pool } from "../../../config/db";
import { Activity } from "../../../entities/Activity/Activity";
import { CustomError, ErrorCatalog } from "../../../errors/CustomError";
import { IActivitiesRepository } from "../IActivitiesRepository";

export class PostgresActivitiesRepository implements IActivitiesRepository {
	// Method to save a new activity
	async save(activity: Activity): Promise<void> {
		const client = await pool.connect();
		try {
			await client.query(
				"INSERT INTO activities (id, created_by, title, description, location, date, max_participants, current_participants, status, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)",
				[
					activity.id,
					activity.createdBy,
					activity.title,
					activity.description,
					activity.location,
					activity.date,
					activity.maxParticipants,
					activity.currentParticipants,
					activity.status,
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
			client.release();
		}
	}

	// Method to update a activity
	async update(activity: Activity): Promise<void> {
		const client = await pool.connect();
		try {
			await client.query(
				"UPDATE activities SET title = $2, description = $3, location = $4, date = $5, status = $6, current_participants = $7, max_participants = $8, updated_at = $9 WHERE id = $1",
				[
					activity.id,
					activity.title,
					activity.description,
					activity.location,
					activity.date,
					activity.status,
					activity.currentParticipants,
					activity.maxParticipants,
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
				const activity = new Activity({
					id: activityRow.id,
					createdBy: activityRow.created_by,
					title: activityRow.title,
					description: activityRow.description,
					location: activityRow.location,
					date: activityRow.date,
					maxParticipants: activityRow.max_participants,
					currentParticipants: activityRow.current_participants,
					status: activityRow.status,
					createdAt: activityRow.created_at,
					updatedAt: activityRow.updated_at,
				});
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

	// Method to find all available activities (status = pending)
	async findAllAvailable(): Promise<Activity[]> {
		const client = await pool.connect();
		try {
			const res = await client.query(
				"SELECT * FROM activities WHERE status = $1",
				["pending"]
			);
			// Map the rows to Activity entities
			return res.rows.map(
				(activityRow) =>
					new Activity({
						id: activityRow.id,
						createdBy: activityRow.created_by,
						title: activityRow.title,
						description: activityRow.description,
						location: activityRow.location,
						date: activityRow.date,
						maxParticipants: activityRow.max_participants,
						currentParticipants: activityRow.current_participants,
						status: activityRow.status,
						createdAt: activityRow.created_at,
						updatedAt: activityRow.updated_at,
					})
			);
		} catch (error) {
			throw new CustomError(
				ErrorCatalog.ERROR.ACTIVITY.REPOSITORY.ACTIVITY_FIND_ALL_FAILED,
				error.message
			);
		} finally {
			client.release();
		}
	}
}
