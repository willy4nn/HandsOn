import { Activity } from "../../entities/Activity/Activity";

export interface IActivitiesRepository {
	// Method to save a new activity
	save(activity: Activity): Promise<void>;

	// Method to update a activity
	update(activity: Activity): Promise<void>;

	// Method to delete a activity by id
	delete(id: string): Promise<void>;

	// Method to find a activity by id
	findById(id: string): Promise<Activity>;

	// Method to find all available activities
	findAllAvailable(): Promise<Activity[]>;
}
