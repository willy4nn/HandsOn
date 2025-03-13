import { v4 as uuidv4 } from "uuid";

export class User {
	readonly id: string;
	readonly createdAt: Date;
	readonly updatedAt: Date;
	readonly name: string;
	readonly email: string;
	readonly password: string;
	readonly role: string;

	constructor(
		props: Omit<User, "id" | "createdAt" | "updatedAt">,
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
