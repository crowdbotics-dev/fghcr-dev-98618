from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import CvcbViewSet,JvceeViewSet,Vbb4ViewSet

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")
router.register('cvcb', CvcbViewSet )
router.register('vbb4', Vbb4ViewSet )
router.register('jvcee', JvceeViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
