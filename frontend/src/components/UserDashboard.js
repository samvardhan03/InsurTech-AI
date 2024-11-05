// src/components/UserDashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserDashboard = () => {
    const [policies, setPolicies] = useState([]);

    useEffect(() => {
        const fetchPolicies = async () => {
            const response = await axios.get('http://localhost:8000/api/user-policies', {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
            });
            setPolicies(response.data);
        };
        fetchPolicies();
    }, []);

    return (
        <div>
            <h2>Your Policies</h2>
            {policies.map(policy => (
                <div key={policy.policy_id}>
                    <h3>{policy.name}</h3>
                    <p>Provider: {policy.provider}</p>
                    <p>Category: {policy.category}</p>
                    <p>Status: {policy.status}</p>
                </div>
            ))}
        </div>
    );
};

export default UserDashboard;
