bash:
	docker compose exec -it node /bin/bash

dev-api:
	docker compose exec -it node npx nx serve api
