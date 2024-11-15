from django.db import models
from django.contrib.auth.models import User

class Insurance(models.Model):
    name = models.CharField(max_length=255)
    policy_type = models.CharField(max_length=100)
    coverage_amount = models.DecimalField(max_digits=10, decimal_places=2)

class PolicyPurchase(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    insurance = models.ForeignKey(Insurance, on_delete=models.CASCADE)
    purchase_date = models.DateField(auto_now_add=True)

class Claim(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    insurance = models.ForeignKey(Insurance, on_delete=models.CASCADE)
    claim_date = models.DateField(auto_now_add=True)
    claim_status = models.CharField(max_length=50, default='Pending')

class KYC(models.Model):
name = models