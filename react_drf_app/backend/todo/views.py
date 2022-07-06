from django.shortcuts import render
from .serializers import TodoSerializer
from rest_framework import viewsets
from .models import Todo

# Create your views here.
class TodoView(viewsets.ModelViewSet):
    '''API endpoint that allows todo list items to be viewed or edited.'''
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()