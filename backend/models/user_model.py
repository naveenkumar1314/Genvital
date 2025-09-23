# backend/models/user_model.py
from pymongo import MongoClient
from bson.objectid import ObjectId
from werkzeug.security import generate_password_hash, check_password_hash
from config.settings import Config

# MongoDB Connection
client = MongoClient(Config.MONGO_URI)
db = client.get_database()
users_collection = db.users

class User:
    def __init__(self, username, email, password=None):
        self.username = username
        self.email = email
        if password:
            self.password_hash = generate_password_hash(password)
        else:
            self.password_hash = None

    def save(self):
        """Insert user into MongoDB"""
        user_data = {
            "username": self.username,
            "email": self.email,
            "password": self.password_hash
        }
        result = users_collection.insert_one(user_data)
        return str(result.inserted_id)

    @staticmethod
    def find_by_id(user_id):
        return users_collection.find_one({"_id": ObjectId(user_id)})

    @staticmethod
    def check_password(hashed_pw, password):
        return check_password_hash(hashed_pw, password)
