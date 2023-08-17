import React from 'react';
import './UserProfileSetting.css';

function UserProfileSetting() {
    return (
        <section className="user-profile-settings">
            <h2>User Profile Settings</h2>
            <div className="settings-form">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" />
                {/* Add more settings inputs */}
            </div>
        </section>
    );
}

export default UserProfileSetting;
