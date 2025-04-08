from django.urls import path
from . import views

urlpatterns = [
    path('test', views.test, name='test'),
    path('mod1t1t2', views.module1t1t2, name='module1t1t2'),
    path('mod1t3', views.module1_t3, name='module1t3'),
    path('mod1t4', views.module1_t4, name='module1t4'),
]