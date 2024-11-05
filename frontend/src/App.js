import React, { useState } from 'react';
import { Search, Shield, FileText, Upload, ChevronRight } from 'lucide-react';
import InsuranceSearch from './components/InsuranceSearch';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [claimId, setClaimId] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search logic
    console.log('Searching for:', searchQuery);
  };

  const handleClaimSubmission = (e) => {
    e.preventDefault();
    // Implement claim submission logic
    console.log('Submitting claim:', claimId);
  };

  const handleFileUpload = (e) => {
    e.preventDefault();
    // Implement file upload logic
    console.log('Uploading file:', selectedFile);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Simplify Your Insurance Management
              </h1>
              <p className="text-xl mb-8">
                One platform for all your insurance needs. Search, purchase, and manage policies with ease.
              </p>
              <form onSubmit={handleSearch} className="flex gap-2">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for insurance policies..."
                  className="w-full px-6 py-3 rounded-lg text-gray-900"
                />
                <button type="submit" className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg flex items-center gap-2">
                  <Search size={20} />
                  Search
                </button>
              </form>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-6">
                <h3 className="text-gray-800 font-semibold text-xl mb-4">Quick Actions</h3>
                <div className="space-y-4">
                  <form onSubmit={handleClaimSubmission} className="space-y-3">
                    <input
                      type="text"
                      value={claimId}
                      onChange={(e) => setClaimId(e.target.value)}
                      placeholder="Enter policy ID to file claim"
                      className="w-full px-4 py-2 rounded border text-gray-800"
                    />
                    <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                      Submit Claim
                    </button>
                  </form>
                  <form onSubmit={handleFileUpload} className="space-y-3">
                    <input
                      type="file"
                      onChange={(e) => setSelectedFile(e.target.files[0])}
                      className="w-full"
                    />
                    <button type="submit" className="w-full bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded">
                      Upload KYC Document
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose InsurTech?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-12 h-12 text-blue-600" />,
                title: "All-in-One Platform",
                description: "Manage multiple insurance policies across different types in one secure platform."
              },
              {
                icon: <FileText className="w-12 h-12 text-blue-600" />,
                title: "Easy Claims Process",
                description: "File and track claims seamlessly with our streamlined digital process."
              },
              {
                icon: <Upload className="w-12 h-12 text-blue-600" />,
                title: "Digital KYC",
                description: "Quick and secure document verification process for faster policy issuance."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Search Policies",
                description: "Browse through our comprehensive range of insurance policies."
              },
              {
                step: "2",
                title: "Upload KYC",
                description: "Complete your verification with easy document upload."
              },
              {
                step: "3",
                title: "Purchase Policy",
                description: "Select and purchase your preferred insurance policy."
              },
              {
                step: "4",
                title: "Manage & Track",
                description: "Easily manage policies and track claims from your dashboard."
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ChevronRight className="w-8 h-8 text-blue-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Join thousands of users who trust InsurTech for their insurance needs</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Create Account
          </button>
        </div>
      </section>
    </div>
  );
};

export default App;