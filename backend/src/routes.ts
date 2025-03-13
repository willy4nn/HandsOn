import { Router } from "express";
import { createUserController } from "./useCases/User/CreateUser";
import { loginUserController } from "./useCases/User/LoginUser";

const router = Router();

// POST route to create a new user
router.post("/users", (request, response, next) => {
	return createUserController.handle(request, response, next);
});

// POST route to log in a user
router.post("/login", (request, response, next) => {
	return loginUserController.handle(request, response, next);
});

export { router };
