import { Activity } from "../../entities/Activity/Activity";

export interface IActivitiesRepository {
	// Method to save a new activitie
	save(activity: Activity): Promise<void>;
}
