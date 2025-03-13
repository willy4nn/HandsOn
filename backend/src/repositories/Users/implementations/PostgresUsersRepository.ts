import { pool } from "../../../config/db";
import { User } from "../../../entities/User/User";
import { IUsersRepository } from "../IUsersRepository";

export class PostgresUsersRepository implements IUsersRepository {
	// Method to save a new user
	async save(user: User): Promise<void> {
		const client = await pool.connect();
		try {
			await client.query(
				"INSERT INTO users (id, name, role, email, password, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6, $7)",
				[
					user.id,
					user.name,
					user.role,
					user.email,
					user.password,
					user.createdAt,
					user.updatedAt,
				]
			);
		} catch (error) {
			throw new Error("Failed to save user");
		} finally {
			client.release(); // Release the client
		}
	}

	// Method to find user by email
	async findByEmail(email: string): Promise<User> {
		const client = await pool.connect();
		try {
			const res = await client.query(
				"SELECT * FROM users WHERE email = $1",
				[email]
			);
			if (res.rows.length > 0) {
				const userRow = res.rows[0];

				// Pass props and id to the User constructor
				const user = new User(
					{
						name: userRow.name,
						email: userRow.email,
						password: userRow.password,
						role: userRow.role,
					},
					userRow.id,
					new Date(userRow.created_at),
					new Date(userRow.updated_at)
				);

				return user;
			}
			return null;
		} catch (error) {
			throw new Error("Database query failed");
		} finally {
			client.release(); // Release the client
		}
	}
}
