from rest_framework import serializers
from . import models

from rest_framework_gis.serializers import GeoFeatureModelSerializer

class ElectoralDivisionSerializer(GeoFeatureModelSerializer):
    """ A class to serialize locations as GeoJSON compatible data """
    class Meta:
        model = models.ElectoralDivision
        geo_field = "geometry"

        # you can also explicitly declare which fields you want to include
        # as with a ModelSerializer.
        fields = ('__all__')
