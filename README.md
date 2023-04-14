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
Regarding distinctiveness, this website is considered to be different from others due to its simplicity and clarity. 

Concerning complexity, developing this application requires knowledge on image manipulation and hence it uses the open-source canvas manipulation project **CamanJS** to create various filters. Many filters are in-built filters by CamanJS along with some filters I have made using CamanJS.

The backend has the only Django model: User. This model has been created to create users when they regster to the website.

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