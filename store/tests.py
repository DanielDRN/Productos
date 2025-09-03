from django.test import TestCase
from django.urls import reverse

class StoreTests(TestCase):
    def test_index_view(self):
        response = self.client.get(reverse('index'))  # Assuming 'index' is the name of the URL pattern for the index view
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'store/index.html')

    def test_product_details(self):
        response = self.client.get(reverse('product_details', args=[1]))  # Replace with actual URL pattern and product ID
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Detalles del Producto")  # Check for specific content in the response

    # Add more tests as needed for other views and functionalities