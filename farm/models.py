from django.db import models


class farmer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True)
    first_name = models.CharField(max_length=100, null=True)
    last_name = models.CharField(max_length=100, null=True)
    picture = models.ImageField(null=True, blank=True, default='no-img.png')
    district = models.CharField(max_length=100, null=True)
    subcounty = models.CharField(max_length=100, null=True)
    parish = models.CharField(max_length=100, null=True)
    village = models.CharField(max_length=100, null=True)
    gender = models.CharField(max_length=100, null=True)
    marriage = models.CharField(max_length=100, null=True)
    language = models.CharField(max_length=100, null=True)
    phone = models.CharField(max_length=100, null=True)
    community_status = models.CharField(max_length=100, null=True)


