from django.contrib.gis.db import models
from django.contrib.gis.db import models as geomodels

class ElectoralDivision(models.Model):
    OBJECTID = models.CharField(max_length=100, blank=False)
    LE_ID = models.CharField(max_length=100)
    LE_ENGLISH = models.CharField(max_length=10)
    LE_GAEILGE = models.CharField(max_length=100)
    COUNTY = models.CharField(max_length=10, blank=True, null=True)
    CONTAE = models.CharField(max_length=10)
    PROVINCE = models.CharField(max_length=10)
    CENTROID_X = models.CharField(max_length=2)
    CENTROID_Y = models.CharField(max_length=10)
    GUID = models.CharField(max_length=1000)
    ObjectID_1 = models.CharField(max_length=1000)
    Shape_Area = models.CharField(max_length=1000, blank=True, null=True)
    Shape_Length = models.CharField(max_length=1000, blank=True, null=True)
    geometry = geomodels.MultiPolygonField()

    class Meta:
        # order of drop-down list items
        ordering = ('id',)
