import React, { useState } from 'react';
import axios from 'axios';

const KYCUploader = () => {
  const [file, setFile] = useState(null);

  const handleFileUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("kyc_document", file);

    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/upload-kyc/`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      alert("KYC document uploaded successfully!");
    } catch (error) {
      console.error("Error uploading KYC document:", error);
    }
  };

  return (
    <div className="section">
      <h2>Submit KYC Document</h2>
      <form onSubmit={handleFileUpload}>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button type="submit">Submit KYC</button>
      </form>
    </div>
  );
};

export default KYCUploader;
