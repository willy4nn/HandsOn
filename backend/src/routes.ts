import { Router } from "express";
import { createUserController } from "./useCases/User/CreateUser";

const router = Router();

// POST route to create a new user
router.post("/users", (request, response, next) => {
	return createUserController.handle(request, response, next);
});

export { router };
