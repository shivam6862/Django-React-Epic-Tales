# from django.http import response
# from django.shortcuts import render
# from django.http import JsonResponse
# from rest_framework.serializers import Serializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .utils import updateEpics, getEpicList, getEpicsList, deleteEpic, createEpic
# Create your views here.

# env\Scripts\activate.bat      {Open the local django}
# python manage.py runserver    {Run the sever}
# env\Scripts\deactivate.bat    {Close the local django}


@api_view(['GET'])
def getRoutes(request):

    routes = [{'Endpoint': '/epics/', 'method': 'GET', 'body': None, 'description': 'Returns an array of epics'},
              {'Endpoint': '/epics/id', 'method': 'GET', 'body': None,
                  'description': 'Returns a single epic object'},
              {'Endpoint': '/epics/create/', 'method': 'POST', 'body': {'body': ""},
                  'description': 'Creates new epic with data sent in post request'},
              {'Endpoint': '/epics/id/update/', 'method': 'PUT', 'body': {'body': ""},
               'description': 'Creates an existing epic with data sent in post request'},
              {'Endpoint': '/epics/id/delete/', 'method': 'DELETE', 'body': None, 'description': 'Deletes and exiting epic'},]

    # return JsonResponse(routes , safe=False)
    return Response(routes)


@api_view(['GET', 'POST'])
def getEpics(request):
    if request.method == 'GET':
        return getEpicsList(request)
    if request.method == 'POST':
        return createEpic(request)


@api_view(['GET', 'PUT', 'DELETE'])
def getEpic(request, pk):
    if request.method == 'GET':
        return getEpicList(request, pk)
    if request.method == 'PUT':
        return updateEpics(request, pk)
    if request.method == 'DELETE':
        return deleteEpic(request, pk)
