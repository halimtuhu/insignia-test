bash:
	docker compose exec -it node /bin/bash

dev-api:
	docker compose exec -it node npm run dev:api

dev-web:
	docker compose exec -it node npm run dev:web
