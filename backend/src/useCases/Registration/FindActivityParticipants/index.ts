import { PostgresRegistrationsRepository } from "../../../repositories/Registration/implementation/PostgresRegistrationsRepository";
import { FindActivityParticipantsUseCase } from "./FindActivityParticipantsUseCase";
import { FindActivityParticipantsController } from "./FindActivityParticipantsController";

// Instance of the repository to handle registrations in the Postgres database
const postgresRegistrationsRepository = new PostgresRegistrationsRepository();

// Create an instance of the use case to find participants of an activity
const findActivityParticipantsUseCase = new FindActivityParticipantsUseCase(
	postgresRegistrationsRepository
);

// Create an instance of the controller to handle HTTP requests and responses
const findActivityParticipantsController =
	new FindActivityParticipantsController(findActivityParticipantsUseCase);

export { findActivityParticipantsUseCase, findActivityParticipantsController };
