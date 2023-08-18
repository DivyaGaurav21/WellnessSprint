import React from 'react';
import './SocialInteraction.css';

function SocialInteraction() {
    return (
        <section className="social-interaction">
            <h2>Social Interaction</h2>
            <div className="group-list">
                {/* List of virtual groups */}
                <div className="group-card">Group A</div>
                <div className="group-card">Group B</div>
                {/* Add more group cards */}
            </div>
        </section>
    );
}

export default SocialInteraction;
