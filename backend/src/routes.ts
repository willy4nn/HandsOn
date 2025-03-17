import { Router } from "express";
import { createUserController } from "./useCases/User/CreateUser";
import { loginUserController } from "./useCases/User/LoginUser";
import { logoutUserController } from "./useCases/User/LogoutUser";
import { authMiddleware } from "./middlewares/authMiddleware";
import { updateUserController } from "./useCases/User/UpdateUser";
import { deleteUserController } from "./useCases/User/DeleteUser";
import { createActivityController } from "./useCases/Activity/CreateActivity";
import { updateActivityController } from "./useCases/Activity/UpdateActivity";
import { deleteActivityController } from "./useCases/Activity/DeleteActivity";

const router = Router();

// POST route to create a new user
router.post("/users", (request, response, next) => {
	return createUserController.handle(request, response, next);
});

// POST route to log in a user
router.post("/login", (request, response, next) => {
	return loginUserController.handle(request, response, next);
});

// POST route to log out a user
router.post("/logout", authMiddleware, (request, response, next) => {
	return logoutUserController.handle(request, response, next);
});

// PUT route to update a user
router.put("/users", authMiddleware, (request, response, next) => {
	return updateUserController.handle(request, response, next);
});

// DELETE route to delete a user
router.delete("/users", authMiddleware, (request, response, next) => {
	return deleteUserController.handle(request, response, next);
});

// POST route to create a activity
router.post("/activities", authMiddleware, (request, response, next) => {
	return createActivityController.handle(request, response, next);
});

// POST route to create a activity
router.put("/activities/:id", authMiddleware, (request, response, next) => {
	return updateActivityController.handle(request, response, next);
});

// DELETE route to delete a activity
router.delete("/activities/:id", authMiddleware, (request, response, next) => {
	return deleteActivityController.handle(request, response, next);
});

export { router };
