# Hibernated Node Server

Minimal Express server exposing:
- GET `/health` → returns 200 OK
- POST `/test` → waits for a configurable delay, then returns 200

## Run the server

The app listens on port 8080 by default (override with `PORT`).

```bash
npm start
# or with a custom port
PORT=4000 npm start
```

## Invoke the `/test` endpoint

The `/test` endpoint accepts an optional `sleep` query parameter in seconds. If not provided or invalid, it defaults to 5 seconds.

- Default (5 seconds):
```bash
curl -i -X POST "http://localhost:8080/test"
```

- Custom delay (2 seconds):
```bash
curl -i -X POST "http://localhost:8080/test?sleep=2"
```

### Response

- Status: `200 OK` after the delay
- Body: `Slept for <seconds> seconds`

## Health check

```bash
curl -i http://localhost:8080/health
```

