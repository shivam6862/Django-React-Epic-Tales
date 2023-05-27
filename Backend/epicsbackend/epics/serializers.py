from rest_framework.serializers import ModelSerializer
from .models import Epics

class EpicsSerializers(ModelSerializer):
    class Meta:
        model = Epics
        fields = '__all__'