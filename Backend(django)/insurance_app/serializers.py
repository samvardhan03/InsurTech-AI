from rest_framework import serializers
from .models import Insurance, PolicyPurchase, Claim, KYC

class InsuranceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Insurance
        fields = '__all__'

class PolicyPurchaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = PolicyPurchase
        fields = '__all__'

class ClaimSerializer(serializers.ModelSerializer):
    class Meta:
        model = Claim
        fields = '__all__'

class KYCSerializer(serializers.ModelSerializer):
    class Meta:
        model = KYC
        fields = '__all__'
