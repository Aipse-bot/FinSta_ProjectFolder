from django.shortcuts import render, redirect, HttpResponse
from django.contrib import messages

def test(request):
    return render(request, "module1.html")

def module1t1t2(request):
    return render(request, "module1_t1_t2.html")

def module1_t3(request):
    return render(request, "module1_t3.html")

def module1_t4(request):
    return render(request, "module1_t4.html")



