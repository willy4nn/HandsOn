import { PostgresRegistrationsRepository } from "../../../repositories/Registration/implementation/PostgresRegistrationsRepository";
import { PostgresActivitiesRepository } from "../../../repositories/Activities/implementations/PostgresActivitiesRepository";
import { CreateRegistrationUseCase } from "./CreateRegistrationUseCase";
import { CreateRegistrationController } from "./CreateRegistrationController";

// Creating an instance of the repository to interact with the Postgres database for registrations
const postgresRegistrationsRepository = new PostgresRegistrationsRepository();

// Creating an instance of the repository to interact with the Postgres database for activities
const postgresActivitiesRepository = new PostgresActivitiesRepository();

// Creating an instance of the use case to handle the logic for creating a registration
const createRegistrationUseCase = new CreateRegistrationUseCase(
	postgresRegistrationsRepository,
	postgresActivitiesRepository
);

// Creating an instance of the controller to handle HTTP requests and responses for creating a registration
const createRegistrationController = new CreateRegistrationController(
	createRegistrationUseCase
);

// Exporting the use case and controller for use in other parts of the application
export { createRegistrationUseCase, createRegistrationController };
