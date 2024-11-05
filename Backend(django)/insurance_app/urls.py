# insurtech-backend/insurance_app/urls.py

from django.urls import path
from .views import search_insurance, purchase_policy, file_claim

urlpatterns = [
    path('search/', search_insurance, name='search-insurance'),
    path('purchase-policy/', purchase_policy, name='purchase-policy'),
    path('file-claim/', file_claim, name='file-claim'),
]
