from django.contrib import admin
from .models import Product  # Assuming you have a Product model in models.py

admin.site.register(Product)  # Register the Product model with the admin site