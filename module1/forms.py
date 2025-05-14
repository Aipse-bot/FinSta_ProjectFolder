from django import forms
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth.models import User

from django import forms
from django.contrib.auth.models import User

from .models import Player 

class PlayerForm(forms.ModelForm):
    name = forms.CharField(
        label= '',
        required= True,
        widget=forms.TextInput(attrs={"id":"name", "class": "w-full p-3 rounded bg-gray-700 text-white", "placeholder": "Your in-game name"})
    )
    businessCategory = forms.CharField(
        label= '',
        required= False,
        widget=forms.TextInput(attrs={"id":"businessCategory","class": "w-full p-3 rounded bg-gray-700 text-white hidden", "placeholder": "Business Category"})
    )
    businessType = forms.CharField(
        label= '',
        required= False,
        widget=forms.TextInput(attrs={"id":"businessType","class": "w-full p-3 rounded bg-gray-700 text-white hidden", "placeholder": "Business Type"})
    )
    businessGoal = forms.CharField(
        label= '',
        required= False,
        widget=forms.Textarea(attrs={"id":"businessGoal","class": "w-full p-3 rounded bg-gray-700 text-white hidden", "placeholder": "Describe your business goal..."})
    )
    businessName = forms.CharField(
        label= '',
        required= False,
        widget=forms.TextInput(attrs={"id":"businessName","class": "hidden w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-[#3B82F6]", "placeholder": "Enter your business name"})
    )
    businessLocation = forms.CharField(
        label= '',
        required= False,
        widget=forms.TextInput(attrs={"id":"businessLocation","class": "w-full p-3 rounded bg-gray-700 text-white hidden", "placeholder": "Business Location"})
    )

    class Meta:
        model = Player
        fields = ["name", "businessCategory", "businessType", "businessGoal", "businessName", "businessLocation"]
class RegisterForm(forms.ModelForm):
    username = forms.CharField(
        widget=forms.TextInput(attrs={"class": "w-full px-4 py-2 border rounded-lg", "placeholder": "Enter Username"})
    )
    password = forms.CharField(
        widget=forms.PasswordInput(attrs={"class": "w-full px-4 py-2 border rounded-lg", "placeholder": "Enter Password"})
    )
    confirm_password = forms.CharField(
        widget=forms.PasswordInput(attrs={"class": "w-full px-4 py-2 border rounded-lg", "placeholder": "Confirm Password"})
    )

    class Meta:
        model = User
        fields = ["username", "email", "password"]
        widgets = {
            "email": forms.EmailInput(attrs={"class": "w-full px-4 py-2 border rounded-lg", "placeholder": "Enter Email"})
        }

    def clean(self):
        cleaned_data = super().clean()
        password = cleaned_data.get("password")
        confirm_password = cleaned_data.get("confirm_password")

        if password and confirm_password and password != confirm_password:
            raise forms.ValidationError("Passwords do not match!")

        return cleaned_data
class LoginForm(AuthenticationForm):
    username = forms.CharField(
        widget=forms.TextInput(attrs={"class": "w-full px-4 py-2 border rounded-lg", "placeholder": "Enter Username"})
    )
    password = forms.CharField(
        widget=forms.PasswordInput(attrs={"class": "w-full px-4 py-2 border rounded-lg", "placeholder": "Enter Password"})
    )