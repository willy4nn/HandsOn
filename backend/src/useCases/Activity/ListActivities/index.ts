import { PostgresActivitiesRepository } from "../../../repositories/Activities/implementations/PostgresActivitiesRepository";
import { ListActivitiesUseCase } from "./ListActivitiesUseCase";
import { ListActivitiesController } from "./ListActivitiesController";

// Creating an instance of the repository to interact with the Postgres database for listing activities
const postgresActivitiesRepository = new PostgresActivitiesRepository();

// Creating an instance of the use case to handle the logic for listing activities
const listActivitiesUseCase = new ListActivitiesUseCase(
	postgresActivitiesRepository
);

// Creating an instance of the controller to handle HTTP requests and responses for listing activities
const listActivitiesController = new ListActivitiesController(
	listActivitiesUseCase
);

// Exporting the use case and controller for listing activities in other parts of the application
export { listActivitiesUseCase, listActivitiesController };
