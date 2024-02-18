"""Create a Python class called User that uses the init 
method and creates a username and a password. 
Create an object using the class. 
"""
class User:
    def __init__(self, username, password):
        self.username = username
        self.password = password

user_one = User("Endika", "mi complicada contraseña")

# Confirmar que todo funciona
print(f"Los atributos del user_one son: {user_one.__dict__}")
