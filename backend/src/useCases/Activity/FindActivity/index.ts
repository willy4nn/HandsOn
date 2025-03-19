import { PostgresActivitiesRepository } from "../../../repositories/Activities/implementations/PostgresActivitiesRepository";
import { FindActivityUseCase } from "./FindActivityUseCase";
import { FindActivityController } from "./FindActivityController";

// Creating an instance of the repository to interact with the Postgres database for finding activities
const postgresActivitiesRepository = new PostgresActivitiesRepository();

// Creating an instance of the use case to handle the logic for finding an activity by ID
const findActivityUseCase = new FindActivityUseCase(
	postgresActivitiesRepository
);

// Creating an instance of the controller to handle HTTP requests and responses for finding an activity
const findActivityController = new FindActivityController(findActivityUseCase);

// Exporting the use case and controller for use in other parts of the application
export { findActivityUseCase, findActivityController };
