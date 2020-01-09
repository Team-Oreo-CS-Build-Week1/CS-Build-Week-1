from django.contrib import admin
from django.urls import path, include
from django.conf.urls import include
from django.conf.urls import url
from . import views

urlpatterns = [  
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('api/adv/', include('adventure.urls')),
    url(r'^', views.FrontendAppView.as_view()), 
    
]
