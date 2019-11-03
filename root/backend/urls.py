from django.urls import path

from . import views

urlpatterns = [
    # ex: /polls/
    path('', views.index, name='index'),
    path('details', views.detail, name="detail"),
    path('planning', views.GeojsonLocationList.as_view()),
]
