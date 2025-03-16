import { v4 as uuidv4 } from "uuid";

export class Activity {
	readonly id: string;
	readonly title: string;
	readonly location: string;
	readonly date: string;
	readonly description: string;
	readonly max_participants: number;
	readonly created_by: string;
	readonly createdAt: Date;
	readonly updatedAt: Date;

	constructor(
		props: Omit<Activity, "id" | "createdAt" | "updatedAt">,
		id?: string,
		createdAt?: Date,
		updatedAt?: Date
	) {
		// Assign provided properties to the instance
		Object.assign(this, props);

		// Generate ID if not provided
		this.id = id ?? uuidv4();

		// Set createdAt date (default to current date if not provided)
		this.createdAt = createdAt ?? new Date();

		// Set updatedAt date (default to createdAt if not provided)
		this.updatedAt = updatedAt ?? this.createdAt;
	}
}
