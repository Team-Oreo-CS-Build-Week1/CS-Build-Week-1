from django.db import models

# Create your models here.
from django.utils import timezone
user = models.ForeignKey('auth.User', on_delete=models.CASCADE)
