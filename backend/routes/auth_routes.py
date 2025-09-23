# backend/routes/auth_routes.py
from flask import Blueprint, request, jsonify
from ..models.user_model import User # <--- Relative import to go up to backend, then down to models
from werkzeug.security import generate_password_hash, check_password_hash
import jwt
import datetime
from ..config.settings import Config # <--- Relative import to go up to backend, then down to config

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')
    role = data.get('role', 'patient')
    license_id = data.get('license_id')

    if not all([username, email, password]):
        return jsonify({"error": "Missing required fields"}), 400

    if User.find_by_email(email):
        return jsonify({"error": "User with this email already exists"}), 409

    new_user = User(username=username, email=email, password=password, role=role, license_id=license_id)
    result = new_user.save()
    if result.acknowledged:
        return jsonify({"message": "User registered successfully", "user_id": str(result.inserted_id)}), 201
    else:
        return jsonify({"error": "Failed to register user"}), 500

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if not all([email, password]):
        return jsonify({"error": "Missing email or password"}), 400

    user = User.find_by_email(email)

    if not user or not User.check_password(user['password'], password):
        return jsonify({"error": "Invalid email or password"}), 401

    token_payload = {
        'user_id': str(user['_id']),
        'user_role': user['role'],
        'exp': datetime.datetime.utcnow() + datetime.timedelta(days=1)
    }
    token = jwt.encode(token_payload, Config.JWT_SECRET_KEY, algorithm='HS256')

    return jsonify({
        "message": "Login successful",
        "token": token,
        "role": user['role']
    }), 200