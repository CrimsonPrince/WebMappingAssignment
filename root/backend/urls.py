from django.urls import path

from . import views

urlpatterns = [
    # ex: /polls/
    path('', views.index, name='index'),
    path('details', views.detail, name="detail"),
    path('state', views.GeojsonLocationList.as_view()),
    path('state/<pk>', views.GeojsonPlanning.as_view()),
]
