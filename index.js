// Minimal Express server
const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;

// Health endpoint
app.get('/health', (req, res) => {
	res.status(200).send('OK');
});

// Helper sleep function
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

app.get('/', (req, res) => res.status(200).send('OK'));

// POST /test endpoint
// Accepts optional query param `sleep` (seconds). Defaults to 5 seconds.
app.post('/test', async (req, res) => {
	const raw = req.query.sleep;
	const defaultSeconds = 5;

	// Accept values like 1000 or "1000"; ignore invalid values and use default
	let seconds = Number.parseInt(raw, 10);
	if (!Number.isFinite(seconds) || seconds < 0) {
		seconds = defaultSeconds;
	}

	const ms = seconds * 1000;
	await sleep(ms);
	res.status(200).send(`Slept for ${seconds} seconds`);
});

app.listen(PORT, () => {
	console.log(`Server listening on http://localhost:${PORT}`);
});
