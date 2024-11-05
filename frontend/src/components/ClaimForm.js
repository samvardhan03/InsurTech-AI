import React, { useState } from 'react';
import axios from 'axios';

const ClaimForm = () => {
  const [insuranceId, setInsuranceId] = useState('');

  const handleClaim = async () => {
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/file-claim/`,
        { insurance_id: insuranceId },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );
      alert("Claim submitted successfully!");
    } catch (error) {
      console.error("Error submitting claim:", error);
    }
  };

  return (
    <div className="section">
      <h2>File a Claim</h2>
      <input
        type="text"
        placeholder="Insurance ID"
        value={insuranceId}
        onChange={(e) => setInsuranceId(e.target.value)}
      />
      <button onClick={handleClaim}>Submit Claim</button>
    </div>
  );
};

export default ClaimForm;
