

from django.core.management.base import BaseCommand
from insurance_app.models import Insurance

class Command(BaseCommand):
    help = 'Populates the database with test insurance data'

    def handle(self, *args, **kwargs):
        # Clear existing data
        Insurance.objects.all().delete()

        # Create test data
        test_data = [
            {
                'name': 'Basic Health Insurance',
                'policy_type': 'Health',
                'coverage_amount': 100000.00
            },
            {
                'name': 'Premium Health Coverage',
                'policy_type': 'Health',
                'coverage_amount': 250000.00
            },
            {
                'name': 'Family Health Plan',
                'policy_type': 'Health',
                'coverage_amount': 500000.00
            },
            {
                'name': 'Auto Insurance Basic',
                'policy_type': 'Auto',
                'coverage_amount': 50000.00
            },
            {
                'name': 'Home Insurance Plus',
                'policy_type': 'Property',
                'coverage_amount': 300000.00
            },
        ]

        for item in test_data:
            Insurance.objects.create(**item)
            self.stdout.write(f"Created insurance: {item['name']}")

        self.stdout.write(self.style.SUCCESS('Successfully populated test data'))