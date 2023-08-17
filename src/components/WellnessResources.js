// WellnessResources.js
import React from 'react';
import './WellnessResources.css';

function WellnessResources() {
    const resources = [
        { id: 1, title: '10 Tips for Healthy Aging', type: 'Article' },
        { id: 2, title: 'Gentle Yoga for Seniors', type: 'Video' },
        // Add more resources
    ];

    return (
        <section className="wellness-resources">
            <h2>Wellness Resources</h2>
            <div className="resource-list">
                {resources.map((resource) => (
                    <div key={resource.id} className="resource-card">
                        <p>{resource.title}</p>
                        <p>{resource.type}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default WellnessResources;
