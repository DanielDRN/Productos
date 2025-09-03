# JD Store

JD Store is a Django-based e-commerce application that allows users to browse and purchase various products. This project showcases a simple online store interface with product details and integration with WhatsApp for purchasing inquiries.

## Project Structure

```
jdstore/
├── jdstore/
│   ├── __init__.py
│   ├── asgi.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── store/
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── migrations/
│   │   └── __init__.py
│   ├── models.py
│   ├── tests.py
│   ├── views.py
│   ├── templates/
│   │   └── store/
│   │       └── index.html
│   └── static/
│       └── store/
│           ├── style/
│           │   └── style.css
│           ├── js/
│           │   ├── script.js
│           │   └── modales.js
│           └── img/
│               ├── producto1.jpeg
│               ├── producto2.jpeg
│               ├── descarga3.jpeg
│               ├── cruchect.jpg
│               ├── auriculares.jpeg
│               ├── limpiador-facial.jpg
│               ├── chaqueta-hentai.jpg
│               ├── llaveros.jpg
│               └── favicon.ico
├── manage.py
└── README.md
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd jdstore
   ```

2. **Create a virtual environment:**
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install dependencies:**
   ```
   pip install django
   ```

4. **Run migrations:**
   ```
   python manage.py migrate
   ```

5. **Run the development server:**
   ```
   python manage.py runserver
   ```

6. **Access the application:**
   Open your web browser and go to `http://127.0.0.1:8000/`.

## Features

- Product listing with images, names, prices, and details.
- Modal pop-ups for product details.
- Integration with WhatsApp for direct purchasing inquiries.

## License

This project is licensed under the MIT License.