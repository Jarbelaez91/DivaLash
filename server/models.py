from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from flask_restful import Api
from sqlalchemy.ext.hybrid import hybrid_property
from config import db, bcrypt


class Appointment(db.Model, SerializerMixin):
    __tablename__ = 'appointments'

    serialize_rules = ('-reviews',)

    id = db.Column(db.Integer, primary_key=True)
    service = db.Column(db.String, nullable=False)
    date = db.Column(db.String)
    time = db.Column(db.String)
    price= db.Column(db.String)
    confirmation= db.Column(db.String)

    reviews = db.relationship( 'Review', back_populates = 'appointment', cascade = 'all, delete-orphan' )
    users = association_proxy( 'reviews', 'user' )



class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    serialize_rules = ('-reviews',)

    id = db.Column(db.Integer, primary_key=True)
    name= db.Column(db.String)
    lastname= db.Column(db.String)
    email = db.Column(db.String(30), unique=True, nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)
    phone_number = db.Column(db.String(100))
    
    reviews = db.relationship('Review', back_populates='user')
    appointments = association_proxy('reviews', 'appointment')
    def __init__(self, name, lastname, password, email, phone):
        self.name = name
        self.name = lastname
        self.password = password
        self.email = email
        self.phone = phone

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
        }

    @property
    def password(self):
        return self.password_hash

    @password.setter
    def password(self, password):
        self.password_hash = bcrypt.generate_password_hash(password.encode("utf-8")).decode('utf-8')

    def authenticate(self, password):
        return bcrypt.check_password_hash(self.password_hash, password.encode('utf-8'))

    
    

class Review (db.Model, SerializerMixin):
    __tablename__ = 'reviews'

    serialize_rules = ('id', 'rating', 'review', 'style', 'user', 'appointment')

    id = db.Column(db.Integer, primary_key=True)
    rating = db.Column(db.Float)
    review=db.Column(db.String)
    style= db.Column(db.String)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    appointment_id = db.Column(db.Integer, db.ForeignKey('appointment.id'))
   

    appointment = db.relationship( 'Appointment', back_populates = 'reviews' )
    user = db.relationship( 'User', back_populates = 'reviews' )

    def to_dict(self):
        return {
            'id': self.id,
            'rating': self.rating,
            'review': self.review,
            'style': self.style,
            'user_id': self.user_id,
            'appointment_id': self.appointment_id,
        }
