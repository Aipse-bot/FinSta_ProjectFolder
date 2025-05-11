from django import forms
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth.models import User

from django import forms
from django.contrib.auth.models import User

from .models import Player 

class PlayerForm(forms.ModelForm):
    name = forms.CharField(
        label='',  # Removes the default label
        widget=forms.TextInput(attrs={"class": "w-full p-3 mb-5 rounded bg-gray-700 text-white", "placeholder": "Your name..."})
    )

    class Meta:
        model = Player
        fields = ["name"]

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