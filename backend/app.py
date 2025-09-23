# backend/app.py
from flask import Flask, jsonify, request
from flask_cors import CORS

from models.user_model import User
from config.settings import Config # <--- Idhu dhaan direct import! Correct
from routes.auth_routes import auth_bp

app = Flask(__name__)
CORS(app)

app.config.from_object(Config) # <--- Correct

app.register_blueprint(auth_bp, url_prefix='/api/auth')

@app.route('/')
def home():
    return jsonify({"message": "Python Flask Backend for GENVITAL is Running!"})

if __name__ == '__main__':
    app.run(debug=True, port=5000)