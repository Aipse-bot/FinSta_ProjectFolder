from django.shortcuts import render, HttpResponse, redirect
from django.shortcuts import redirect, HttpResponse
from django.contrib import messages
from django.contrib.auth.forms import UserCreationForm

from django.contrib.auth import authenticate, login
from django.shortcuts import render
from .forms import LoginForm

from django.middleware.csrf import get_token
from .forms import RegisterForm

from .forms import PlayerForm

from django.contrib.auth.decorators import login_required
from .models import Player


@login_required
def save_player_name(request):
    if request.method == "POST":
        form = PlayerForm(request.POST)
        if form.is_valid():
            player_name = form.cleaned_data["name"]  # Get submitted name
            # ✅ Check if the user already has a Player profile
            player = Player.objects.get(user=request.user)
            # ✅ Update player's name
            player.name = player_name
            player.save()
            print(player)
            print(player.name)

            return redirect("intro")  # Redirect after saving

    return redirect("register")  # If invalid, reload registration page

def intro_view(request):
    form = PlayerForm()
    return render(request, "introScreen.html", {"form": form})

def login_view(request):
    if request.method == "POST":
        form = LoginForm(data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)

            # Generate a CSRF token for the session
            request.session["csrf_token"] = get_token(request)
            print(user)  # This should display the username
            print("Login Success")
            return redirect("intro")

    else:
        form = LoginForm()

    return render(request, "login.html", {"form": form})
        

def register_view(request):
    if request.method == "POST":
        form = RegisterForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.set_password(form.cleaned_data["password"])  # Hash password
            user.save()  # Save user

            # ✅ Create Player instance after user registration
            Player.objects.create(user=user)  # Default values

            login(request, user)  # Auto-login after registration
            return redirect("login")  # Redirect after success

    else:
        form = RegisterForm()

    return render(request, "register.html", {"form": form})

def test(request):
    return render(request, "module1.html")

def module1t1t2(request):
    return render(request, "module1_t1_t2.html")

def module1_t3(request):
    return render(request, "module1_t3.html")

def module1_t4(request):
    return render(request, "module1_t4.html")

def module2_t1_t2_t3(request):
    return render(request, "mod2_t1_t2_t3.html")

def module2_t4(request):
    return render(request, "mod2_t4.html")

def module3_t1_t2_t3(request):
    return render(request, "mod3_t1_t2_t3.html")

def module3_t4(request):
    return render(request, "mod3_t4.html")

def module4_t1(request):
    return render(request, "mod4_t1.html")