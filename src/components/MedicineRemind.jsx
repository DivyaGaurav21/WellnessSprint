import React, { useState } from 'react';
import './MedicineRemind.css'; // Import your custom CSS file

const MedicineRemind = () => {
    const [medicineName, setMedicineName] = useState('');
    const [reminderTime, setReminderTime] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const now = new Date();
        const [hours, minutes] = reminderTime.split(':');
        const reminderDateTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);

        const timeUntilReminder = reminderDateTime - now;

        if (timeUntilReminder > 0) {
            setTimeout(() => {
                alert('Time to take your medicine!')
            }, timeUntilReminder);

            setSubmitted(true);
        } else {
            alert('Please select a future reminder time.');
        }
    };


    return (
        <div className="medicine-reminder-container">
            <h2>Set Medicine Reminder</h2>
            {submitted ? (
                <p className="reminder-set-message">
                    Reminder set for {medicineName} at {reminderTime}.
                </p>
            ) : (
                <form className="reminder-form" onSubmit={handleSubmit}>
                    <label>
                        Medicine Name:
                        <input
                            type="text"
                            className="input-field"
                            value={medicineName}
                            onChange={(e) => setMedicineName(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Reminder Time:
                        <input
                            type="time"
                            className="input-field"
                            value={reminderTime}
                            onChange={(e) => setReminderTime(e.target.value)}
                        />
                    </label>
                    <br />
                    <button type="submit" className="submit-button">
                        Set Reminder
                    </button>
                </form>
            )}
        </div>
    );
};

export default MedicineRemind;
