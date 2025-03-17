import { Activity } from "../../entities/Activity/Activity";

export interface IActivitiesRepository {
	// Method to save a new activity
	save(activity: Activity): Promise<void>;

	// Method to update a activity
	update(activity: Activity): Promise<void>;
}
