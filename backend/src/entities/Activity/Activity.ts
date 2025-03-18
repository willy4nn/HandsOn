import { v4 as uuidv4 } from "uuid";

// Interface for creating a new activity
interface NewActivityProps {
	title: string;
	location: string;
	date: string;
	description: string;
	maxParticipants: number;
	createdBy: string;
}

// Interface for an existing activity with additional properties
interface ExistingActivityProps extends NewActivityProps {
	id: string;
	currentParticipants: number;
	status: "pending" | "active" | "completed" | "cancelled" | "full";
	createdAt: string;
	updatedAt: string;
}

export class Activity {
	readonly id: string;
	readonly createdBy: string;
	readonly title: string;
	readonly description: string;
	readonly location: string;
	readonly date: string;
	readonly maxParticipants: number;
	readonly currentParticipants: number;
	readonly status: "pending" | "active" | "completed" | "cancelled" | "full";
	readonly createdAt: string;
	readonly updatedAt: string;

	// Overloaded constructor to handle both new and existing activities
	constructor(props: NewActivityProps);
	constructor(props: ExistingActivityProps);
	constructor(props: NewActivityProps | ExistingActivityProps) {
		if ("id" in props) {
			// Initialize from an existing activity
			this.id = props.id;
			this.createdBy = props.createdBy;
			this.title = props.title;
			this.description = props.description;
			this.location = props.location;
			this.date = props.date;
			this.maxParticipants = props.maxParticipants;
			this.currentParticipants = props.currentParticipants;
			this.status = props.status;
			this.createdAt = props.createdAt;
			this.updatedAt = props.updatedAt;
		} else {
			// Initialize a new activity with default values
			this.id = uuidv4();
			this.createdBy = props.createdBy;
			this.title = props.title;
			this.description = props.description;
			this.location = props.location;
			this.date = props.date;
			this.maxParticipants = props.maxParticipants;
			this.currentParticipants = 0; // Default value for new activities
			this.status = "pending"; // Default status for new activities
			this.createdAt = new Date().toISOString();
			this.updatedAt = this.createdAt;
		}
	}
}
