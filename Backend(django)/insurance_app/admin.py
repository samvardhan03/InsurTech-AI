from django.contrib import admin
from .models import Insurance, PolicyPurchase, Claim, KYC

# Register your models here
admin.site.register(Insurance)
admin.site.register(PolicyPurchase)
admin.site.register(Claim)
admin.site.register(KYC)
