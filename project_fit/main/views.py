from django.shortcuts import render
# отвечает за те методы , которые будут вызваны когда пользоватетль переходит на какую либо страницу
# Create your views here.
def index(request):
    return render(request,'main/index.html')

def about(request):
    return render(request,'main/about.html')