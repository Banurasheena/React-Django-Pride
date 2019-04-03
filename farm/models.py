from django.db import models
from django.contrib.auth.models import User

class User(User):
    is_farmer = models.BooleanField()
    is_officer = models.BooleanField()

    def __str__ (self):
        return self.username



class Farmer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    def __str__ (self):
        return self.user.username