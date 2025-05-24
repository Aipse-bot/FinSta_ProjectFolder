from django.urls import path
from . import views 


urlpatterns = [

    path('register', views.register_view, name='register'),
    path('login', views.login_view, name='login'),


    path('save_player_name', views.save_player_name, name='save_player_name'),
    path('save_business_category_type', views.save_business_category_type, name='save_business_category_type'),
    path('save_business_goals', views.save_business_goals, name='save_business_goals'),
    path('save_business_name', views.save_business_name, name='save_business_name'),
    path('save_business_location', views.save_business_location, name='save_business_location'),
    

    path('intro', views.intro_view, name='intro'),
    path('mod2t1t2', views.mod2t1t2_view, name='mod2t1t2'),
    path('mod2t3', views.mod2t3_view, name='mod2t3'),
    path('mod2t4', views.mod2t4_view, name='mod2t4'),

    path('mod3t1t2t3', views.mod3t1t2t3_view, name='mod3t1t2t3'),
    path('mod3t4', views.mod3t4_view, name='mod3t4'),
    path('mod4t1', views.mod4t1_view, name='mod4t1'),
    
    path('reset',views.reset,name='reset'),

    path('get_business_data/',views.get_business_data,name='get_business_data/')


]