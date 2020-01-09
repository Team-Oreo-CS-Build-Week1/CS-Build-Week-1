from django.contrib import admin
from django.urls import path, include
from django.conf.urls import include
from . import views

urlpatterns = [
    include(r'^', views.FrontendAppView.as_view()),   
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('api/adv/', include('adventure.urls')),
    
]
