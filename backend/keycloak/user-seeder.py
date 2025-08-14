import requests
from faker import Faker
import random

# Keycloak configuration
KEYCLOAK_URL = "http://localhost:8081"
REALM = "connect"
ADMIN_USERNAME = "admin"
ADMIN_PASSWORD = "admin"
CLIENT_ID = "admin-cli"

# Settings
NUM_USERS = 100
PASSWORD = "1234"
BIO_CHANCE = 0.60
MAX_BIO_LENGTH = 150

fake = Faker()

# Get admin token
token_url = f"{KEYCLOAK_URL}/realms/master/protocol/openid-connect/token"
token_data = {
    "username": ADMIN_USERNAME,
    "password": ADMIN_PASSWORD,
    "grant_type": "password",
    "client_id": CLIENT_ID
}
token_headers = {"Content-Type": "application/x-www-form-urlencoded"}

response = requests.post(token_url, data=token_data, headers=token_headers)
response.raise_for_status()
access_token = response.json()["access_token"]

# Create users
user_url = f"{KEYCLOAK_URL}/admin/realms/{REALM}/users"
headers = {"Authorization": f"Bearer {access_token}", "Content-Type": "application/json"}

for _ in range(NUM_USERS):
    first_name = fake.first_name()
    last_name = fake.last_name()
    username = f"{first_name.lower()}{last_name.lower()}"
    email = f"{username}@email.com"

    bio = None
    if random.random() < BIO_CHANCE:
        bio = fake.text(max_nb_chars=MAX_BIO_LENGTH)

    payload = {
        "username": username,
        "email": email,
        "enabled": True,
        "credentials": [{
            "type": "password",
            "value": PASSWORD,
            "temporary": False
        }],
        "attributes": {
            "name": f"{first_name} {last_name}",
            "bio": bio if bio else ""
        }
    }

    res = requests.post(user_url, headers=headers, json=payload)
    if res.status_code in [201, 204]:
        print(f"Created user: {username}")
    else:
        print(f"Failed to create {username}: {res.text}")
