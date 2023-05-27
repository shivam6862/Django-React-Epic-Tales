from rest_framework.response import Response
from .models import Epics
from .serializers import EpicsSerializers


def getEpicsList(request):
    epics = Epics.objects.all().order_by('-updated')
    serializer = EpicsSerializers(epics, many=True)
    return Response(serializer.data)


def getEpicList(request, pk):
    epics = Epics.objects.get(id=pk)
    serializer = EpicsSerializers(epics, many=False)
    return Response(serializer.data)


def createEpic(request):
    data = request.data
    epic = Epics.objects.create(
        epicsTitle=data['epicsTitle'], epicsImage=data['epicsImage'], Address=data['Address'], Description=data['Description'])
    serializer = EpicsSerializers(epic, many=False)
    return Response(serializer.data)


def updateEpics(request, pk):
    data = request.data
    epic = Epics.objects.get(id=pk)
    serializer = EpicsSerializers(instance=epic, data=data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


def deleteEpic(request, pk):
    epic = Epics.objects.get(id=pk)
    epic.delete()
    return Response('Epic was deleted!')
