from rest_framework import serializers
from farm.models import Officer, Farmer, Report, Season, District, Subcounty, Parish

class OfficerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Officer
        fields = ('name', 'login_id', 'district', 'phone', 'password')

class FarmerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Farmer
        fields = ('name', 'district', 'subcounty', 'parish', 'village', 'gender', 'age', 'marriage_status', 'language', 'telephone', 'image', 'community_status', 'instructor_posibility', 'farm_area', 'crop_type', 'past_harvests')

class SeasonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Season
        fields = ('season_name', 'season_id', 'season', 'area', 'harvest')

class ReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Report
        fields = ('name', 'season', 'area', 'rice_type', 'sowing_date', 'sowing_type', 'planting_type', 'levelling', 'ridge', 'watercourse_state', 'fertilizer', 'fertilizer_1_type', 'fertilizer_1_amount', 'fertilizer_2_type', 'fertilizer_2_amount', 'weed_condition', 'total_weed_times', 'harvest_date', 'harvest_amount', 'note')

class DistrictSerializer(serializers.ModelSerializer):
    class Meta:
        model = District
        fields = ('name')

class SubcountySerializer(serializers.ModelSerializer):
    class Meta:
        model = Subcounty
        fields = ('name', 'district')

class ParishSerializer(serializers.ModelSerializer):
    class Meta:
        model = Parish
        fields = ('name', 'subcounty')