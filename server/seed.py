#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app,db
from models import db, Review, Appointment, User
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt(app)

fake = Faker()

def clear_database():
    with app.app_context():
        Appointment.query.delete()
        User.query.delete()
        Review.query.delete()
        db.session.commit()


def create_users():
    users = []
    for _ in range(20):
        u = User(
            username=fake.user_name(),
            location=fake.city(),
        )
        plain_password = fake.password()
        hashed_password = bcrypt.generate_password_hash(
            plain_password.encode('utf-8')
        ).decode('utf-8')  # Hash the password and convert bytes to str
        u.password_hash = hashed_password
        users.append(u)
    return users

def appointments():
    with app.app_context():
        a1= Appointment(lash_style= 'classic', style_id='1', price= '$90')
        a2= Appointment(lash_style= 'volume', style_id='2' ,price= '$110')
        a3= Appointment(lash_style= 'mega volume', style_id= "3" , price= '$130')
        a4= Appointment(lash_style= 'hybrid' , style_id = '4' ,price= '$150' )

        appointment = [a1, a2, a3, a4 ]
        return appointment

def create_reviews(appointments, users):
    with app.app_context():
        i1 = Review(rating=5.0, review='Got my lashes done here and they are amazing! Top-notch quality.', user_id=1, style_id=1)
        i2 = Review(rating=4.5, review='My daughter got her lashes done here and they look fabulous. Perfect for any occasion!', user_id=2, style_id=2)
        i3 = Review(rating=3.0, review='Lashes look great, but they feel a bit snug. Could be more comfortable.', user_id=3, style_id=3)
        i4 = Review(rating=4.0, review='Absolutely love my lashes! They look and feel great.', user_id=3, style_id=4)
        i5 = Review(rating=4.0, review='Always the best lashes! So comfy and natural-looking.', user_id=4, style_id=1)
        i6 = Review(rating=2.5, review='Lashes are a bit narrow and uncomfortable. Not the best fit for me.', user_id=5, style_id=2)
        i7 = Review(rating=5.0, review='Loved the lashes! They match with everything.', user_id=6, style_id=3)
        i8 = Review(rating=2.0, review='Not happy with the quality of the lashes. Visible glue spots and not durable.', user_id=7, style_id=3)
        i9 = Review(rating=3.5, review='Lashes are too bulky and uncomfortable. Not practical for everyday wear.', user_id=7, style_id=4)
        i10 = Review(rating=5.0, review='Lashes crease easily and need to be more breathable.', user_id=8, style_id=1)
        i11 = Review(rating=2.0, review='Love the look of the lashes, but durability is an issue. Developed a hole after a few months.', user_id=9, style_id=2)
        i12 = Review(rating=4.0, review='Average lashes, could be better with more attention to detail.', user_id=10, style_id=3)
        i13 = Review(rating=5.0, review='Great job on my lashes! They look fabulous and feel comfortable.', user_id=13, style_id=4)
        i14 = Review(rating=4.0, review='Love these lashes! Comfortable and can wear them all day.', user_id=11, style_id=1)
        i15 = Review(rating=4.0, review='Absolutely love my lashes! Simple packaging and comfortable to wear.', user_id=14, style_id=2)
        i16 = Review(rating=4.5, review='Lashes are very comfortable with breathable material.', user_id=15, style_id=3)
        i17 = Review(rating=5.0, review='Extremely comfortable and well-fitting lashes. Highly recommend!', user_id=16, style_id=4)
        i18 = Review(rating=2.0, review='The lashes wore out quickly with light use.', user_id=17, style_id=1)
        i19 = Review(rating=5.0, review='Got my lashes done here and they are amazing! Top-notch quality.', user_id=12, style_id=2)
        i20 = Review(rating=4.5, review='My daughter got her lashes done here and they look fabulous. Perfect for any occasion!', user_id=2, style_id=2)
        i21 = Review(rating=2.0, review='Lashes look great, but they feel a bit snug. Could be more comfortable.', user_id=16, style_id=1)
        i22 = Review(rating=4.5, review='Lashes are very comfortable and look nice with any attire.', user_id=12, style_id=1)
        i23 = Review(rating=3.0, review='Lashes look great, but they feel a bit snug. Could be more comfortable.', user_id=16, style_id=2)
        i24 = Review(rating=4.0, review='Absolutely love my lashes! They look and feel great.', user_id=17, style_id=3)
        i25 = Review(rating=4.0, review='Always the best lashes! So comfy and natural-looking.', user_id=18, style_id=4)
        i26 = Review(rating=2.5, review='Lashes are a bit narrow and uncomfortable. Not the best fit for me.', user_id=5, style_id=1)
        i27 = Review(rating=5.0, review='Loved the lashes! They match with everything.', user_id=16, style_id=2)
        i28 = Review(rating=2.0, review='Not happy with the quality of the lashes. Visible glue spots and not durable.', user_id=19, style_id=3)
        i29 = Review(rating=3.5, review='Lashes are too bulky and uncomfortable. Not practical for everyday wear.', user_id=20, style_id=4)
        i30 = Review(rating=5.0, review='Lashes crease easily and need to be more breathable.', user_id=18, style_id=1)
        i31 = Review(rating=2.0, review='Love the look of the lashes, but durability is an issue. Developed a hole after a few months.', user_id=19, style_id=2)

        review = [i1, i2, i3, i4, i5, i6 , i7, i8, i9, i10, i11, i12, i13, i14, i15, i16, i17, i18,i19,i20, i21, i22, i23, i24, i25, i26 , i27, i28, i29, i30, i31 ]
        return review
    


if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        # Seed code goes here!

        print('Clearing database...')
        User.query.delete()
        Appointment.query.delete()
        Review.query.delete()

        print("Seeding User...")
        users = create_users()
        db.session.add_all(users)
        db.session.commit()

        print("Seeding Appointment...")
        appointments = appointments()
        db.session.add_all(appointments)
        db.session.commit()

        print("Seeding Review...")
        reviews = create_reviews(appointments, users)
        db.session.add_all(reviews)
        db.session.commit()


        print("Done Seeding!")



