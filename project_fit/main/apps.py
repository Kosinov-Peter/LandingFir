from django.apps import AppConfig
# в этом файле мы указываем какие то глабалльные настройки которые будут использоваться в конкретном этом в приложении main

class MainConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'main'
