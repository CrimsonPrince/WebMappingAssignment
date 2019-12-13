from django.http import HttpResponse
from . import models
from . import serializers
from rest_framework import viewsets
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveAPIView, RetrieveUpdateDestroyAPIView, ListCreateAPIView
from rest_framework_gis.pagination import GeoJsonPagination

class GeojsonLocationList(ListCreateAPIView):
    queryset = models.ElectoralDivision.objects.all()
    serializer_class = serializers.ElectoralDivisionSerializer
    pagination_class = GeoJsonPagination

class GeojsonPlanning(RetrieveUpdateDestroyAPIView):
        queryset = models.ElectoralDivision.objects.all()
        serializer_class = serializers.ElectoralDivisionSerializer

def detail(request):
    return HttpResponse("Testing Detail")

def index(request):
    return HttpResponse("Testing Index")
