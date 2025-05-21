from django.contrib import admin
# Register your models here.
from .models import Player

@admin.register(Player)
class PlayerAdmin(admin.ModelAdmin):
    list_display = ("user","name", "capital", "businessCategory", "businessType","businessGoal","businessName","businessLocation","targetMarket","maxNumberOfWorkers","balance")
