from .serializers import FarmerSerializer
from rest_framework.generics import ListAPIView, CreateAPIView
from .models import Farmer, Officer, District, Subcounty

class FarmerApi(CreateAPIView):
    serializer_class=FarmerSerializer
    queryset = Farmer.objects.all()

class OfficerApi(CreateAPIView):
    serializer_class=OfficerSerializer
    queryset = Officer.objects.all()

class DistrictApi(CreateAPIView):
    serializer_class = DistrictSerializer
    queryset = District.Objects.all()

class SubcountyApi(CreateAPIView):
    serializer_class = SubcountySerializer
    queryset = Subcounty.Objects.all()