import { PostgresRegistrationsRepository } from "../../../repositories/Registration/implementation/PostgresRegistrationsRepository";
import { FindUserRegistrationsUseCase } from "./FindUserRegistrationsUseCase";
import { FindUserRegistrationsController } from "./FindUserRegistrationsController";

// Instance of the repository for handling registrations in the Postgres database
const postgresRegistrationsRepository = new PostgresRegistrationsRepository();

// Create an instance of the use case to handle the logic for finding user registrations
const findUserRegistrationsUseCase = new FindUserRegistrationsUseCase(
	postgresRegistrationsRepository
);

// Create an instance of the controller to handle HTTP requests and responses
const findUserRegistrationsController = new FindUserRegistrationsController(
	findUserRegistrationsUseCase
);

export { findUserRegistrationsUseCase, findUserRegistrationsController };
