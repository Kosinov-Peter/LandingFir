from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from . import views
#внутри в этом файле мы сможешь отслеживать различные url адреса

urlpatterns = [
#панель администратора приложения (по умолчанию)
    path('', views.index),
    path('about/', views.about),
]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
