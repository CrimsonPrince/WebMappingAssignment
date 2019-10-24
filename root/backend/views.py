from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    return HttpResponse("Hello is it me you are looking for?")

def detail(request):
    return HttpResponse("Hiya")
