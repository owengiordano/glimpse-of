import os
import requests
from flask import Flask, request, jsonify
from dotenv import load_dotenv
from flask_cors import CORS

load_dotenv(dotenv_path="./.env.local")

DEBUG = bool(os.environ.get("DEBUG", True))
SECRET_CLIENT = os.environ.get("SECRET_CLIENT", "")

app = Flask(__name__)
CORS(app)

app.config["DEBUG"] = DEBUG


@app.route("/")
def first():
    pass


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5050)
