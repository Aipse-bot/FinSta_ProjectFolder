from django.contrib.auth.models import User
from django.db import models

class Player(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE,null=True)  # Links Player to a registered user
    name = models.CharField(max_length=255, null=True)  # Player's in-game name
    capital = models.IntegerField(default=50000)  # Starting money
    businessCategory = models.CharField(max_length=100, null=True)
    businessType = models.CharField(max_length=255, null=True)
    businessGoal = models.TextField(null=True)
    businessName = models.CharField(max_length=255, null=True)
    businessLocation = models.CharField(max_length=255, null=True)
    targetMarket = models.CharField(max_length=255, null=True)
    maxNumberOfWorkers = models.IntegerField(default=0)
    balance = models.IntegerField(default=50000)  # Initial funds, updated through transactions