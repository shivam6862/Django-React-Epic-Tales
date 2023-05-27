# $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$            BACKEND SERVER            $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

# process to setup django in backend
# select a destop as a directroy
# pip install virtualenv
# virtualenv env
# env\scripts\activate
# pip install django
# django-admin startproject epicesbackend
# take the virtualenv folder and put it into the epicesbackend folder
# cd epicesbackend
# python manage.py runserver

# python manage.py startapp {epics inside epicesbackend}

# update the setting file in epicesbackend folder like this in the INSTALLED_APPS part 'epics.apps.ApiConfig',
# go to the views files in the epics folder
# create a new file name as urls.py file in the epics folder
# update the urls.py file in the epicesbackend folder as per your need

# make the routes of array of object in the views folder for the routing in the backend

# setup the django database
# update the models.py file in the epics Folder

# python manage.py migrate                 {for rebuilt the database in the django database server}{terminal}
# python manage.py makemigrations                                                                  {terminal}
# python manage.py migrate                 {for rebuilt the database in the django database server} {terminal}

# process to get the acess of the database of django
# python manage.py createsuperuser
# python manage.py runserver


# setup a new models in the database of django server
# go to te admin.py file of the epics folder
# update the code there             {admin.py  import the data from the model.py files}


# SETUP DJANGO REST FRAMEWORK
# pip install djangorestframework
# update the setting file in epicesbackend folder like this in the INSTALLED_APPS part 'rest-framework'
# update vie.py file in the epics folder  {by importing the package from rest_framework}  {response and api_view}


# make and update views.py and urls.py file in epics folder as per your need
# you an import the models.py date to any where before using it               {it is use to connect the connecting with database of django}


# create a new file named as  serializers.py in the epics folder
# import the serializers in tje views.py file of epics folder

#
#
#
#
#

# AGAIN GO TTHE BACKEND
# python pip install django-cors-headers
# update the setting file in epicesbackend folder like this in the INSTALLED_APPS part 'corsheaders',
# update the setting file in epicesbackend folder like this in the MIDDLEWARE part 'corsheaders.middleware.CorsMiddleware',
# update the setting file in epicesbackend folder like this in the BOTTOM OF THE FILE part 'CORS_ALLOW_ALL_ORIGINS = True',

#
#
#
#
#
# $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$            FRONTEND SERVER            $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

# Go to the destop and open the ierminal
# create a react app
# make the folder of code
# in the fetch part of react app give the url of the backend directly
# setup a proxy url in the react package.json file                 {  "proxy": "http://127.0.0.1:8000",}

#
#
#
#
#
# @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@         INTEGRATING BOTH            @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

# drag and drop the complete frontend end folder to the backend django server
# cd frontend folder
# npm run build

#
# update the setting file in epicesbackend folder like this in the TEMPLATES part               { 'DIRS': [BASE_DIR / 'frontend/build'],}
# update the setting file in epicesbackend folder like this in the STATICFILES_DIRS part    { STATICFILES_DIRS = [BASE_DIR / 'frontend/build/static'] }
# update the urls.py file in epicesbackend folder like this     {from django.views.generic import TemplateView}  { path('', TemplateView.as_view(template_name='index.html')),}

#
#
#
#
#
# @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@         MAKING API RESTFULL            @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
#
# create a utils.py files in the epics Folder
# update the code in views.py file , utils.py file


#
#
#
#
#
# $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
#
#
#
#
#


# pip install virtualenvwrapper-win
#  mkvirtualenv myapp
# pip install django
# django-admin startproject myproject
# deactivate
# workon myapp


# -m venv myapp     {This is used to create the virtual enviroment}
# myapp\Scripts\activate.bat  {This is used to activate that virtuak enviroment}
# pip install Django    {Install django in this virtual enviroment}
# django-admin startproject myproject     {Create the starting templete in django}
# deactivate   {decativate the ongong virtual enviroment}
# myapp\Scripts\activate.bat   {reactivate the vvirtual enviroment in the local enviroment}

# myapp\Scripts\activate.bat
# cd myproject
# python manage.py startapp myapp

# make urls.py file inside the myproject/myapp/          {folder}
# setup urls.py  {in myapp folder}                                                  {name and function name miust be same}
# setup views.py {in myappfolder}
# python manage.py runserver {command promts write}
# setup urls.py {in myproject folder}
# create a templates folder in the main dir
# setup settings {in myproject folder}
# create a index.html in templates folder

# control + c
# deactivate

# myapp\Scripts\activate.bat    {open the local django}
# cd myproject                  {change the dir}
# python manage.py runserver    {rerun the sever}

# create a static folde for css file
# go to the setting of myproject and set the static folder setting
# lern how to limk the static file


# models.py file
# view.py file same folder
# index.html

# set up the database
# db.sqlite3 file in the main dir
# change the model.py file
# change in the setting.py file


# open a new cmd terminal
# got to the myproject dir

# type         python manage.py makemigrations     {the is use to update any change made in the models file}
# teh type    python manage.py migrate             {Note this both command we hab=ve to always type whwn ever we change the models.py file}
#                                                  {This will affect the db.sqlite3 file}


# python manage.py createsuperuser                  {This is use to create the super user for login}
# change the file admin.py file
# login to the django web page
# add the data in fearture create in webpage of django
# update the data in your created FEATURE folder
# go to the views.py file and change the code there


# making register page
# urls.py setup
# views.py setup
# create a register.html file
# create a register.css file
# write the function id views.py files

# making login page
# urls.py setup
# views.py setup
# create a login.html file
# create a login.css file
# write the function id views.py files

# setting anchor tag for login , logout
# write the function for logout

# setting dynamic url


# download postgresql
# download pgadmin
# mkae a database in pgadmin
# setup the database in setting.py file {DATABASE PART}
# pip install psycopg2
# pip install pillow
# python manage.py makemigrations
# python manage.py migrate
