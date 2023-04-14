# Harvard's CS50 Web Programming with Python and Javascript 2020<br>


## **_Capstone project by Kevin Kingslin_**
Project Name: Filtr<br>
[Kevin Kingslin's me50](https://github.com/me50/KevinKingslin.git) <br>
[Kevin Kingslin's Github](https://github.com/KevinKingslin) <br>
<!-- [Video Demonstration of App](https://youtu.be/) <br> -->


### **About**
The project I chose for the capstone project is a image editor program that allows users to log in and edit their images online. Users can apply various filters on their uploaded image. Users can also download their modified image. This application uses:<br>
* Django for the backend,<br>
* JavaScript for the frontend<br>
* SQLite3 for the database

### **Distinctiveness and Complexity**
This website is neither a social media app nor an e-commerce platform and hence is not similar to the other projects in this course. There are many aspects which make this project distinct from other projects. One of which is the usage of the open-source canvas manipulation project **CamanJS**. CamanJS allows us to manipulate certain properites of a image such as brightness, contrast, vibrance and many more. CamanJS also includes its own library of in-built preset filters which are used in this project. Concerning complexity, devloping this application also requires the knowledge of image manipulation and hence the project also uses some presets which I have designed using CamanJS.

The projects frontend is designed using Django's HTML templates. This allows us to reuse templates to create the different pages in this website. The open-source CSS library **Materialize CSS** along with my custom CSS file is also used to style the frontend of this project. The frontend mainly focuses on providing a dark mode like interface. MaterializeCSS has also helped in making the website mobile responsive. The dynamic properties of this website is handled by JavaScript.

In terms of complexity at the backend, **Django** is used to develop the model and API views. The website has only 1 model ie. the User model, which is used to register new users and login existing users when they come back to the website. A SQLite3 database  is used to store these records. This database is handled by Django. Django also takes care of authentication, rerouting and CSRF(Cross-Site Request Forgery) using CSRF tokens.

### **Files:**
The following is the file structure of the project where I added or modified. 
```
├── db.sqlite3 - SQLite3 database
├── Filtr - Django Filtr app
│   ├── admin.py - admin settings for model view
│   ├── __init__.py
│   ├── models.py - database models
│   ├── static - folder for static resources
│   │   └── Filtr
│   │       ├── logo.png - project logo
│   │       ├── mainpage.js - main .js file
│   │       └── styles.css - additional css
│   ├── templates - folder for Django templates
│   │   └── Filtr
│   │       ├── index.html - mainpage HTML
│   │       ├── layout.html - layout HTML
│   │       ├── login.html - HTML for login page
│   │       └── register.html - HTML for register page
│   ├── urls.py - all standard HTTP request routing handled here
│   └── views.py - all of the Django API handled here
├── project - Filtr main project folder
│   ├── asgi.py - asynconous web servers and wrapped in middleware
│   ├── __init__.py 
│   ├── settings.py - settings for the project
│   ├── urls.py - path configuration
└── README.md - this file
```

#### File Information
The following is a brief summary of the main files and directories I have created for this project
- [Filtr/admin.py](https://github.com/me50/KevinKingslin/blob/web50/projects/2020/x/capstone/Filtr/admin.py): Register Django models for the admin website provided by Django
- [Filtr/models.py](https://github.com/me50/KevinKingslin/blob/web50/projects/2020/x/capstone/Filtr/models.py): Stores all Django models created in this project.
- [Filtr/static](https://github.com/me50/KevinKingslin/tree/web50/projects/2020/x/capstone/Filtr/static/Filtr): Stores all static resources such as JavaScript, CSS files and project logo.
    - [mainpage.js](https://github.com/me50/KevinKingslin/blob/web50/projects/2020/x/capstone/Filtr/static/Filtr/mainpage.js): Main JavaScript file for this project which handles the application and creation of filters used in this project.
    - [styles.css](https://github.com/me50/KevinKingslin/blob/web50/projects/2020/x/capstone/Filtr/static/Filtr/styles.css): Custom CSS for the frontend
- [Filtr/templates](https://github.com/me50/KevinKingslin/tree/web50/projects/2020/x/capstone/Filtr/templates/Filtr): Stores all Django templates used in this project.
    - [index.html](https://github.com/me50/KevinKingslin/blob/web50/projects/2020/x/capstone/Filtr/templates/Filtr/index.html): Generates the canvas for the website
    - [layout.html](https://github.com/me50/KevinKingslin/blob/web50/projects/2020/x/capstone/Filtr/templates/Filtr/layout.html): Layout template of the website
    - [login.html](https://github.com/me50/KevinKingslin/blob/web50/projects/2020/x/capstone/Filtr/templates/Filtr/login.html): Generates login form 
    - [register.html](https://github.com/me50/KevinKingslin/blob/web50/projects/2020/x/capstone/Filtr/templates/Filtr/register.html): Generates register form
- [Filtr/urls.py](https://github.com/me50/KevinKingslin/blob/web50/projects/2020/x/capstone/Filtr/urls.py): handles all the standard HTTP URLs 
- [Filtr/views.py](https://github.com/me50/KevinKingslin/blob/web50/projects/2020/x/capstone/Filtr/views.py): handles the API calls and views of the application. 
- [project](https://github.com/me50/KevinKingslin/tree/web50/projects/2020/x/capstone/project): Stores the main application settings and app configuration for this project

### **How to run the application:**

1. Install all required packages.

```
pip install -r requirements.txt
```

2. Initialize the database with makemigrations, migrate, then create superuser.

```
python3 manage.py makemigrations
python3 manage.py migrate --run-syncdb
python3 manage.py createsuperuser
```

3. Launch the Django server. If set up correctly, server will launch on http://127.0.0.1:8000/.
```
python3 manange.py runserver
```