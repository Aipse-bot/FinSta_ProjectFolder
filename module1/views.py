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
from django.http import JsonResponse



@login_required
def save_player_name(request):
    print("-------------save_player_name------------")
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

            return redirect("mod2t1t2")  # Redirect after saving

    return redirect("login")  # If invalid, reload registration page

@login_required
def save_business_category_type(request):
    print("-------------save_business_category_type------------")
    print(request.POST)  # ✅ See if businessCategory & businessType are received
    if request.method == "POST":
        print(request.POST)  # ✅ See if businessCategory & businessType are received
        form = PlayerForm(request.POST)
        if form.is_valid():
            player = Player.objects.get(user=request.user)

            # ✅ Update business details
            player.businessCategory = form.cleaned_data["businessCategory"]
            player.businessType = form.cleaned_data["businessType"]
            player.save()

            print(player.businessCategory)
            print(player.businessType)

            return redirect("mod2t3")  # Redirect after saving
        else:
            print("not valid form: ", form.errors)
    return redirect("login")  # If invalid, reload form

@login_required
def save_business_goals(request):
    print("-------------save_business_goals------------")
    print(request.POST)  # ✅ See if businessCategory & businessType are received
    if request.method == "POST":
        print(request.POST)  
        form = PlayerForm(request.POST)
        if form.is_valid():
            player = Player.objects.get(user=request.user)

            # ✅ Update business details
            player.businessGoal = form.cleaned_data["businessGoal"]

            player.save()

            print(player.businessGoal)


            return redirect("mod2t4")  # Redirect after saving
        else:
            print("not valid form: ", form.errors)
    return redirect("login")  # If invalid, reload form

@login_required
def save_business_name(request):
    print("-------------save_business_name------------")
    print(request.POST)  # ✅ See if businessCategory & businessType are received
    if request.method == "POST":
        print(request.POST)  
        form = PlayerForm(request.POST)
        if form.is_valid():
            player = Player.objects.get(user=request.user)

            # ✅ Update business details
            player.businessName = form.cleaned_data["businessName"]

            player.save()

            print(player.businessName)
            print("--------------proceed to mod 3----------------------")
            return redirect("mod3t1t2t3")  # Redirect after saving
        else:
            print("not valid form: ", form.errors)
    return redirect("login")  # If invalid, reload form

@login_required
def save_business_location(request):
    print(request.POST)  # ✅ See if businessCategory & businessType are received
    if request.method == "POST":
        print(request.POST)  
        form = PlayerForm(request.POST)
        if form.is_valid():
            player = Player.objects.get(user=request.user)

            # ✅ Update business details
            player.businessLocation = form.cleaned_data["businessLocation"]
            player.targetMarket = form.cleaned_data["targetMarket"]
            player.maxNumberOfWorkers = form.cleaned_data["maxNumberOfWorkers"]
            player.save()

            print(player.businessLocation)
            print(player.targetMarket)
            print(player.maxNumberOfWorkers)
            print("--------------proceed to t4----------------------")
            return redirect("mod3t4")  # Redirect after saving
        else:
            print("not valid form: ", form.errors)
    return redirect("login")  # If invalid, reload form

@login_required
def mod2t1t2_view(request):
    print("-------------mod2t1t2_view------------")
    player = Player.objects.get(user=request.user)  # Get existing player data
    form = PlayerForm(instance=player)  # Load player's current data into form
    return render(request, "mod2_t1_t2.html", {"form": form})

@login_required
def mod2t3_view(request):
    print("-------------mod2t3_view------------")
    player = Player.objects.get(user=request.user)  # Get existing player data
    form = PlayerForm(instance=player)  # Load player's current data into form
    return render(request, "mod2_t3.html", {"form": form})

@login_required
def mod2t4_view(request):
    print("-------------mod2t4_view------------")
    player = Player.objects.get(user=request.user)  # Get existing player data
    form = PlayerForm(instance=player)  # Load player's current data into form
    return render(request, "mod2_t4.html", {"form": form})

@login_required
def mod3t1t2t3_view(request):
    print("-------------mod3t1t2t3_view------------")
    player = Player.objects.get(user=request.user)  # Get existing player data
    form = PlayerForm(instance=player)  # Load player's current data into form
    return render(request, "mod3_t1_t2_t3.html", {"form": form})

@login_required
def mod3t4_view(request):
    print("-------------mod3t4_view------------")
    player = Player.objects.get(user=request.user)  # Get existing player data

    context = {
        "name": player.name,
        "businessName": player.businessName,
        "businessLocation": player.businessLocation,
        "businessType": player.businessType,
        "businessGoal": player.businessGoal,
        "targetMarket": player.targetMarket,
        "maxNumberOfWorkers": player.maxNumberOfWorkers,
    }
    return render(request, "mod3_t4.html", context)  # ✅ Pass data to template

@login_required
def mod4t1_view(request):
    return render(request, "mod4_t1.html")

@login_required
def intro_view(request):
    form = PlayerForm()
    return render(request, "introScreen.html", {"form": form})

@login_required
def reset(request):
    player = Player.objects.get(user=request.user)  # Adjust based on your model
    player.name = None
    player.businessCategory = None
    player.businessType = None
    player.businessGoal = None
    player.businessName= None
    player.businessLocation = None
    player.targetMarket = None
    player.maxNumberOfWorkers = 0
    player.save()
    form = PlayerForm()
    return render(request, "introScreen.html", {"form": form})  # Redirect after reset 

@login_required
def get_business_data(request):
    try:
        player = Player.objects.get(user=request.user)
        business_data = {

            "business_name": player.businessName,
            "business_location": player.businessLocation, # If you use this in JS
            "business_type": player.businessType,
            "target_market": player.targetMarket, # If you use this in JS
            "business_goal": player.businessGoal, # If you use this in JS
            "max_number_of_workers": player.maxNumberOfWorkers, # If you use this in JS
            "balance": player.balance,
            "capital": player.capital, # If needed
            "businessCategory": player.businessCategory # If needed
            # Add any other fields from the Player model that your game logic/JS needs.
        }
        return JsonResponse({"businesses": [business_data]})
    except Player.DoesNotExist:
        return JsonResponse({"error": "Player data not found for the logged-in user."}, status=404)
    except Exception as e:
        # Log the exception e for server-side debugging
        print(f"Error in get_business_data: {e}")
        return JsonResponse({"error": "An unexpected error occurred on the server."}, status=500)

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
