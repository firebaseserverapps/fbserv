import firebase_admin
from firebase_admin import credentials, db

from utils.misc import read_yaml_from_file

#print(read_yaml_from_file("firebase/fbcreds.yml", None))

cred = credentials.Certificate('firebase/fbsacckey.json')
default_app = firebase_admin.initialize_app(cred, {
    "databaseURL": "https://fbserv-36b3e.firebaseio.com"
})

print(default_app)

fooref = db.reference("test")
print(fooref)
#fooref.set({"foo": "bar"})
print(fooref.get())