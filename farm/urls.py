from django.urls import path
from rest_framework import views
from .api import FarmerApi

urlpatterns=[
path('api/farmer',FarmerApi.as_view() )
path('api/Officer', OfficerApi.as_view())
path('api/District', DistrictApi.as_view())
path('api/Subcounty', SubcountyApi.as_view())
]