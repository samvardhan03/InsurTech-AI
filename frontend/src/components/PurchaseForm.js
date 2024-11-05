import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PurchaseForm = () => {
  const [insurances, setInsurances] = useState([]);
  const [selectedInsurance, setSelectedInsurance] = useState(null);

  useEffect(() => {
    const fetchInsurances = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/search/`);
        setInsurances(response.data);
      } catch (error) {
        console.error("Error fetching insurances:", error);
      }
    };
    fetchInsurances();
  }, []);

  const handlePurchase = async () => {
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/purchase-policy/`,
        { insurance_id: selectedInsurance },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );
      alert("Insurance purchased successfully!");
    } catch (error) {
      console.error("Error purchasing insurance:", error);
    }
  };

  return (
    <div className="section">
      <h2>Purchase Insurance</h2>
      <select onChange={(e) => setSelectedInsurance(e.target.value)}>
        <option value="">Select Insurance</option>
        {insurances.map((insurance) => (
          <option key={insurance.id} value={insurance.id}>
            {insurance.name} - {insurance.policy_type}
          </option>
        ))}
      </select>
      <button onClick={handlePurchase}>Purchase</button>
    </div>
  );
};

export default PurchaseForm;
