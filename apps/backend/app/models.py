import os
from django.db import models
from django.contrib.auth.models import User
from pathlib import Path
from enum import Enum
from django.contrib.auth.models import AbstractUser, BaseUserManager


class Role(models.TextChoices):
    ADMIN = "Admin"
    USER = "User"
    MENDATOR = "Mendator"


class UserEntity(models.Model):
    username = models.OneToOneField(User, on_delete=models.CASCADE)
    balance = models.FloatField(default=0)
    role = models.CharField(max_length=10, choices=Role.choices, default=Role.USER)
    enable = models.BooleanField(default=False)

    def __str__(self) -> str:
        return self.user.username


class KeyType(models.Model):
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name


class KeyEntity(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    key = models.CharField(max_length=200, null=True, blank=True)
    type = models.ForeignKey(KeyType, on_delete=models.CASCADE,null=True, blank=True)
    expired = models.DateTimeField(null=True)


    def __str__(self):
        return self.name
