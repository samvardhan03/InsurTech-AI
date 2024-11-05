from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import Insurance, PolicyPurchase, Claim
from .serializers import InsuranceSerializer, PolicyPurchaseSerializer, ClaimSerializer
from django.db import models
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Insurance
import logging

logger = logging.getLogger(__name__)

@api_view(['GET'])
def search_insurance(request):
    query = request.GET.get('query', '')
    logger.info(f"Received search query: {query}")
    
    results = Insurance.objects.filter(
        models.Q(name__icontains=query) |
        models.Q(policy_type__icontains=query)
    )
    
    logger.info(f"Found {results.count()} results")
    serializer = InsuranceSerializer(results, many=True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def purchase_policy(request):
    try:
        insurance_id = request.data.get('insurance_id')
        insurance = Insurance.objects.get(id=insurance_id)
        if PolicyPurchase.objects.filter(user=request.user, insurance=insurance).exists():
            return Response({"message": "Policy already purchased."}, status=400)
        policy_purchase = PolicyPurchase(user=request.user, insurance=insurance)
        policy_purchase.save()
        serializer = PolicyPurchaseSerializer(policy_purchase)
        return Response(serializer.data, status=201)
    except Insurance.DoesNotExist:
        return Response({"message": "Insurance policy not found."}, status=404)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def file_claim(request):
    try:
        insurance_id = request.data.get('insurance_id')
        insurance = Insurance.objects.get(id=insurance_id)
        if not PolicyPurchase.objects.filter(user=request.user, insurance=insurance).exists():
            return Response({"message": "You have not purchased this policy."}, status=400)
        claim = Claim(user=request.user, insurance=insurance, claim_status="Pending")
        claim.save()
        serializer = ClaimSerializer(claim)
        return Response(serializer.data, status=201)
    except Insurance.DoesNotExist:
        return Response({"message": "Insurance policy not found."}, status=404)
