from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    return HttpResponse("CI TEST")

def detail(request):
    return HttpResponse("Hiya")
