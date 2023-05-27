from django.db import models

# Create your models here.


class Epics(models.Model):
    epicsTitle = models.TextField(null=True, blank=True)
    epicsImage = models.TextField(null=True, blank=True)
    Address = models.TextField(null=True, blank=True)
    Description = models.TextField(null=True, blank=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.Description[0:50]
