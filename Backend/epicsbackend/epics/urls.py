from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('epics/', views.getEpics, name="epics"),
    path('epics/<str:pk>', views.getEpic, name='epic')
]
