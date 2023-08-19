import React, { useState } from 'react';
import './InstantTreatment.css';

const InstantTreatment = () => {
    const [selectedIssue, setSelectedIssue] = useState('');

    const handleIssueChange = (event) => {
        setSelectedIssue(event.target.value);
    };

    const handleContact = () => {
        if (selectedIssue) {
            // Perform actions to contact relevant health service here
            alert(`You have contacted the ${selectedIssue} service.`);
        } else {
            alert('Please select a health issue.');
        }
    };

    return (
        <div className="instant-treatment-container">
            <h2>Instant Treatment</h2>
            <p>Select a health issue to contact the relevant service:</p>
            <select value={selectedIssue} onChange={handleIssueChange}>
                <option value="">Select an issue...</option>
                <option value="Emergency">Emergency</option>
                <option value="Doctor">Doctor Consultation</option>
                <option value="Ambulance">Ambulance Service</option>
                {/* Add more options as needed */}
            </select>
            <button className="contact-button" onClick={handleContact}>
                Contact
            </button>
        </div>
    );
};

export default InstantTreatment;
