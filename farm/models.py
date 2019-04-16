from django.db import models
from django.contrib.auth.models import User



class Farmer(models.Model):
    GENDER =(
        ('F','FEMALE'),
        ('M','MALE'),
    )

    MARIAGE_STATUS =(
        ('S','SINGLE'),
        ('M','MARRIED'),
    )

    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True)
    name = models.CharField('Name', max_length=120, null=True)
    district_id = models.ForeignKey('district', on_delete=models.CASCADE, null=True)
    subcounty_id = models.ForeignKey('subcounty',on_delete=models.CASCADE, null=True)
    Parish = models.CharField('Parish', max_length=120, null=True)
    village = models.CharField('Village',max_length=120, null=True)
    gender = models.CharField('Gender', max_length=120, null=True, choices=GENDER)
    birth_year = models.IntegerField(null=True, blank=True)
    marriage = models.CharField('Marriage status', max_length=120, null=True, choices=MARIAGE_STATUS)
    language = models.CharField('Language', max_length=120, null=True)
    phone = models.CharField('Telephone', max_length=120, null=True)
    photo = models.ImageField(null=True, blank=True, default='no-img.png')
    community_status = models.CharField('Community status', max_length=120, null=True)
    instructor_possibility = models.BooleanField(default=False)
    farm_area = models.CharField('Farm Area', max_length=120, null=True)
    crop_type = models.CharField('Crop type', max_length=120, null=True)
    past_harvests = models.CharField('Past Harvests', max_length=120, null=True)
    longitude = models.DecimalField(max_digits=8, decimal_places=3, null=True)
    latitude = models.DecimalField(max_digits=8, decimal_places=3, null=True)


    def __str__(self):
        return self.name


class Harvest(models.Model):
    name = models.CharField('Name', max_length=120)
    season_id = models.ForeignKey('season', on_delete=models.CASCADE, null=True)
    area = models.IntegerField(null=True, blank=True)
    harvest = models.IntegerField(null=True, blank=True)


    def __str__(self):
        return self.name


class Report(models.Model):
    season_id = models.ForeignKey('season', on_delete=models.CASCADE, null=True)
    area = models.CharField(max_length=120, null=True)
    rice_type = models.CharField(max_length=120, null=True)
    sowing_date = models.DateField(blank=True, null=True)  
    sowing_type = models.CharField(max_length=120, null=True)
    planting_type = models.CharField(max_length=120, null=True)
    levelling = models.CharField(max_length=120, null=True)
    ridge = models.CharField(max_length=120, null=True)
    watercourse_state = models.CharField(max_length=120, null=True)
    fertilizer = models.NullBooleanField(null=True)
    fertilizer_1_type = models.CharField(max_length=120, null=True)
    fertilizer_1_amount = models.IntegerField(null=True, blank=True)
    fertilizer_2_type = models.CharField(max_length=120, null=True)
    fertilizer_2_amount = models.IntegerField(null=True, blank=True)
    weed_condition = models.CharField(max_length=120, null=True)
    total_weed_times = models.IntegerField(null=True, blank=True)
    harvest_date = models.DateField(blank=True, null=True)  
    harvest_amount = models.IntegerField(null=True, blank=True)
    note = models.CharField(max_length=120, null=True)

    def __str__(self):
        return self.Report


class Officer(models.Model):
    name = models.CharField(max_length=120, null=True)
    login_id = models.CharField(max_length=120, null=True)
    password = models.CharField(max_length=120,null=True)
    district_id = models.ForeignKey('district', on_delete=models.CASCADE, null=True)
    subcounty_id = models.ForeignKey('subcounty', on_delete=models.CASCADE, null=True)
    phone = models.CharField(max_length=120, null=True)
    
    def __str__(self):
        return self.name

class District(models.Model):
    name = models.CharField(max_length=200)
    
    def __str__(self):
        return self.name


class Subcounty(models.Model):
    name = models.CharField(max_length=200)
    district = models.ForeignKey('District', on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.name


class Parish(models.Model):
    name = models.CharField(max_length=200)
    subcounty = models.ForeignKey('subcounty', on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.name

class Season(models.Model):
    name = models.CharField(max_length=200)
    
    def __str__(self):
        return self.name


