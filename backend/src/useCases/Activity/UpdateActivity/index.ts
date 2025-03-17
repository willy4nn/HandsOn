import { PostgresActivitiesRepository } from "../../../repositories/Activities/implementations/PostgresActivitiesRepository";
import { UpdateActivityUseCase } from "./UpdateActivityUseCase";
import { UpdateActivityController } from "./UpdateActivityController";

// Creating an instance of the repository to interact with the Postgres database
const postgresActivitiesRepository = new PostgresActivitiesRepository();

// Creating an instance of the use case to handle the logic for creating an activity
const updateActivityUseCase = new UpdateActivityUseCase(
	postgresActivitiesRepository
);

// Creating an instance of the controller to handle HTTP requests and responses
const updateActivityController = new UpdateActivityController(
	updateActivityUseCase
);

// Exporting the use case and controller for use in other parts of the application
export { updateActivityUseCase, updateActivityController };
