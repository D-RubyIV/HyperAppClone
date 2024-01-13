from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from app.models import KeyEntity
from .serializers import KeySerializer
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.shortcuts import redirect

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token
    
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

# KEY ENTITY
# GetAll
@api_view(['GET'])
def findAllKey(request):
    listKey = KeyEntity.objects.all()
    serializer = KeySerializer(listKey, many=True)
    return Response(serializer.data)

# Check Authentication
@api_view(["POST"])
def isAuthenticationKey(request):
    print(request.POST.get("key"))

    
@api_view(['GET','POST'])
def login(request):
    return redirect('/')
    