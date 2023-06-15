import os
import requests
from flask import Flask, request, jsonify
from dotenv import load_dotenv
from flask_cors import CORS

load_dotenv(dotenv_path="./.env.local")

DEBUG = bool(os.environ.get("DEBUG", True))
CLIENT_SECRET = os.environ.get("CLIENT_SECRET", "")

app = Flask(__name__)
CORS(app)

app.config["DEBUG"] = DEBUG


@app.route("/login", methods=["GET", "POST"])
def login():
    info = request.get_json()
    code = info["code"]

    headers = {"Content-Type": "application/x-www-form-urlencoded"}

    params = {
        "client_id": "4f3b4354d2ba41e68c9178f52f2303a9",
        "client_secret": CLIENT_SECRET,
        "grant_type": "authorization_code",
        "code": code,
        "redirect_uri": "http://localhost:3000",
    }
    response = requests.post(
        url="https://accounts.spotify.com/api/token",
        headers=headers,
        params=params,
        timeout=2.5,
    )
    data = response.json()
    return data


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
