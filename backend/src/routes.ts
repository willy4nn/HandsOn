import { Router } from "express";

const router = Router();

router.post("/users", (request, response) => {
	return response.status(201).send(); // Send a 201 status for user creation
});

export { router };
