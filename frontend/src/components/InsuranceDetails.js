import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InsuranceDetails = ({ insuranceId }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/insurance/${insuranceId}`);
        setDetails(response.data);
      } catch (error) {
        console.error("Error fetching insurance details:", error);
      }
    };

    if (insuranceId) fetchDetails();
  }, [insuranceId]);

  return (
    <div className="section">
      <h2>Insurance Details</h2>
      {details ? (
        <div>
          <h3>{details.name}</h3>
          <p>Type: {details.policy_type}</p>
          <p>Coverage: ${details.coverage_amount}</p>
        </div>
      ) : (
        <p>Select an insurance to view details.</p>
      )}
    </div>
  );
};

export default InsuranceDetails;
