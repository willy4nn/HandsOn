import { PostgresRegistrationsRepository } from "../../../repositories/Registration/implementation/PostgresRegistrationsRepository";
import { PostgresActivitiesRepository } from "../../../repositories/Activities/implementations/PostgresActivitiesRepository";
import { DeleteRegistrationUseCase } from "./DeleteRegistrationUseCase";
import { DeleteRegistrationController } from "./DeleteRegistrationController";

// Instance of the repository for handling registrations in the Postgres database
const postgresRegistrationsRepository = new PostgresRegistrationsRepository();

// Instance of the repository for handling activities in the Postgres database
const postgresActivitiesRepository = new PostgresActivitiesRepository();

// Instance of the use case responsible for deleting a registration
const deleteRegistrationUseCase = new DeleteRegistrationUseCase(
	postgresRegistrationsRepository,
	postgresActivitiesRepository
);

// Instance of the controller responsible for handling HTTP requests for deleting a registration
const deleteRegistrationController = new DeleteRegistrationController(
	deleteRegistrationUseCase
);

// Exporting instances for use in other parts of the application
export { deleteRegistrationUseCase, deleteRegistrationController };
