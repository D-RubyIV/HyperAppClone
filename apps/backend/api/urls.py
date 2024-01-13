from django.urls import path
from . import views
from . views import MyTokenObtainPairView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path("api/key", views.findAllKey),
    path("api/key/<str:pk>/", views.isAuthenticationKey),
]
urlpatterns += [
    path('api/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]