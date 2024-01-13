from rest_framework import serializers
from app.models import KeyEntity

class KeySerializer(serializers.ModelSerializer):
    class Meta:
        model = KeyEntity
        fields = "__all__"
        