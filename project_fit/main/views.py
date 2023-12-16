from django.shortcuts import render
import random

# отвечает за те методы , которые будут вызваны когда пользоватетль переходит на какую либо страницу
# Create your views here.
def index(request):
    return render(request,'main/index.html')

