from django.contrib.gis.db import models
from django.contrib.gis.db import models as geomodels

class Planning(models.Model):
    OBJECTID = models.CharField(max_length=100, blank=False)
    Planning_Authority = models.CharField(max_length=100)
    Tier = models.CharField(max_length=10)
    Planning_Reference = models.CharField(max_length=100)
    Planning_Permission_Units_Perm = models.CharField(max_length=10, blank=True, null=True)
    Units_Completed_to_Date = models.CharField(max_length=10)
    Units_Under_Construction = models.CharField(max_length=10)
    Activity_On_Site = models.CharField(max_length=2)
    Units_Permitted_But_Not_Commenc = models.CharField(max_length=10)
    Planning_Search_URL = models.CharField(max_length=1000)
    geometry = geomodels.PointField()

    class Meta:
        # order of drop-down list items
        ordering = ('id',)
