import { v4 as uuidv4 } from "uuid";

interface NewRegistrationProps {
	userId: string;
	activityId: string;
}

interface ExistingRegistrationProps extends NewRegistrationProps {
	id: string;
	createdAt: string;
}

export class Registration {
	readonly id: string;
	readonly userId: string;
	readonly activityId: string;
	readonly createdAt: string;

	constructor(props: NewRegistrationProps);
	constructor(props: ExistingRegistrationProps);
	constructor(props: NewRegistrationProps | ExistingRegistrationProps) {
		if ("id" in props) {
			// Initialize from an existing registration
			this.id = props.id;
			this.userId = props.userId;
			this.activityId = props.activityId;
			this.createdAt = props.createdAt;
		} else {
			// Initialize a new registration with default values
			this.id = uuidv4();
			this.userId = props.userId;
			this.activityId = props.activityId;
			this.createdAt = new Date().toISOString();
		}
	}
}
