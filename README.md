# InsurTech
<img width="1680" alt="Screenshot 2024-11-06 at 12 11 36 AM" src="https://github.com/user-attachments/assets/dd5e8c24-7ac9-499e-a92b-91588629a874">  
The InsurTech AI based web application allows users to search, purchase, manage, and claim insurance policies through a centralized platform. Built with Django for the backend API and React for the frontend interface, this platform also includes features for KYC management and personalized insurance plans,currently still in making!

# Features:
- **Centralized Insurance Management**: Users can manage multiple policies (life, health, car, etc.) from various insurers.
- **End-to-End Solution**: Allows users to purchase, track, and review policies and claims.
- **Simplified KYC**: Streamlined customer onboarding with KYC document upload.
- **Customizable Plans**: Offers flexible insurance plans tailored to individual needs.

https://github.com/user-attachments/assets/325460b7-50a0-4a4a-9f88-9e96474f5af1

# Tech Stack
- **Backend**: Django REST Framework
- **Frontend**: React.js
- **Database**: SQLite (for development)

# Working:

<img width="1232" alt="Screenshot 2024-11-08 at 2 40 09 AM" src="https://github.com/user-attachments/assets/b7d6181c-40ab-42a5-a470-b7665b33725f">

Our InsurTech platform leverages cutting-edge technologies to deliver a robust, secure, and scalable solution for insurance management. The architecture is designed with future growth in mind, ensuring the platform can evolve with changing market demands and technological advancements.
Advanced Technology Stack:
React & Django REST Framework provides a responsive, component-based frontend architecture and enables robust backend API development with comprehensive security features.
JWT Authentication ensures secure user sessions and protected API endpoints.
RESTful API Architecturefacilitates seamless integration with third-party services
and enables modular development and easy scaling.
Secure File Upload System implements encrypted document storage.
WebSocket integration for live notifications.
Event-driven architecture for immediate status changes.

<img width="751" alt="Screenshot 2024-10-25 at 10 47 59 PM" src="https://github.com/user-attachments/assets/a0d824c6-0b09-4d8f-ac8a-8c149991b0d4">

# What I plan to add:
1.Automated Document Processing:
Intelligent OCR for document verification and Automated data extraction and validation

2.Secure Data Management: 
End-to-end encryption and Regular security audits and compliance checks

3.Scalable Architecture:
Microservices-based design and Load balancing and auto-scaling capabilities

4.Cross-platform Compatibility:
Responsive design for all devices and Progressive Web App capabilities


# Setup Instructions

Follow these steps to set up the application locally:

## 1. Clone the Repository

```bash
git clone https://github.com/your-username/insurtech-platform.git
cd insurtech-platform
 ```
## 2. Backend Setup (Django)
a. Create a Virtual Environment and Install Dependencies
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```
b. Set Up Environment Variables
```bash
SECRET_KEY='your_django_secret_key'
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1
```
c. Run Migrations and Start the Server
```bash
python manage.py migrate
python manage.py runserve
```
Your backend API should now be running at http://127.0.0.1:8000/.

## 3. Frontend Setup (React)

a. Navigate to the Frontend Folder and Install Dependencies
```bash
cd insurtech-frontend
npm install
```
b. Start the React Development Server
```bash
npm start
```
# Usage
Admin Panel: Go to http://127.0.0.1:8000/admin/ to create initial insurance data. Login with the superuser credentials you set up earlier.
User Interface: Access the user interface at http://localhost:3000/, where you can:
Search for insurance plans.
Purchase and manage policies.
File claims and upload KYC documents.


# License
This project is licensed under GNU General Public License v2.0 License.



