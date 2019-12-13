from django.contrib.gis.db import models
from django.contrib.gis.db import models as geomodels

class State(models.Model):
    name = models.CharField(max_length=100, blank=False)
    density = models.CharField(max_length=100)
    id = models.CharField(max_length=10, primary_key=True)
    geometry = geomodels.MultiPolygonField()

    class Meta:
        # order of drop-down list items
        ordering = ('id',)
