import { pool } from "../config/db";

async function updateActivityStatus() {
	const query = `
    UPDATE activities
    SET status = 'closed'
    WHERE date <= NOW() AND status = 'upcoming';
`;

	try {
		const result = await pool.query(query); // Executes the update query
		console.log(
			`Status updated to 'closed' for ${result.rowCount} activities.`
		);
	} catch (error) {
		console.error("Error updating activity status:", error);
	}
}

export { updateActivityStatus }; // Exports the function
