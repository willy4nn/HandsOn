import { PostgresActivitiesRepository } from "../../../repositories/Activities/implementations/PostgresActivitiesRepository";
import { CreateActivityUseCase } from "./CreateActivityUseCase";
import { CreateActivityController } from "./CreateActivityController";

// Creating an instance of the repository to interact with the Postgres database
const postgresActivitiesRepository = new PostgresActivitiesRepository();

// Creating an instance of the use case to handle the logic for creating an activity
const createActivityUseCase = new CreateActivityUseCase(
	postgresActivitiesRepository
);

// Creating an instance of the controller to handle HTTP requests and responses
const createActivityController = new CreateActivityController(
	createActivityUseCase
);

// Exporting the use case and controller for use in other parts of the application
export { createActivityUseCase, createActivityController };
