"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)

@api.route('/signup', methods=['POST'])
def create_user():
    body_email = request.json.get("email")
    body_password = request.json.get("password")
    if body_email and body_password:
        new_user = User(email=body_email, password=body_password)
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"created": True, "user": new_user.serialize()}), 200
    else:
        return jsonify({"created": False, "msg": "missing info"}), 200

  