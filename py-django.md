python3 --version
pip3 --version

Crear entorno virtual 

python3 -m venv .env 

# Windows 
source .env/Scripts/activate

# Instalar django 
pip install django -U

# ver librerias entorno virtual
pip freeze

# crear proyecto 
django-admin startproject app1 . 

# inicializar servidor 
python manage.py runserver
