import { PostgresActivitiesRepository } from "../../../repositories/Activities/implementations/PostgresActivitiesRepository";
import { DeleteActivityUseCase } from "./DeleteActivityUseCase";
import { DeleteActivityController } from "./DeleteActivityController";

// Creating an instance of the repository to interact with the Postgres database
const postgresActivitiesRepository = new PostgresActivitiesRepository();

// Creating an instance of the use case to handle the logic for creating an activity
const deleteActivityUseCase = new DeleteActivityUseCase(
	postgresActivitiesRepository
);

// Creating an instance of the controller to handle HTTP requests and responses
const deleteActivityController = new DeleteActivityController(
	deleteActivityUseCase
);

// Exporting the use case and controller for use in other parts of the application
export { deleteActivityUseCase, deleteActivityController };
