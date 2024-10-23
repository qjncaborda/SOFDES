// Notifications.js
import React, { useState } from 'react';
import './Notifications.css'; 

const Notifications = () => {
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const [frequency, setFrequency] = useState(15); // Default to 15 minutes

    const handleToggleNotifications = () => {
        setNotificationsEnabled(!notificationsEnabled);
    };

    const handleFrequencyChange = (event) => {
        setFrequency(parseInt(event.target.value));
    };

    return (
        <div className="notifications-page"> {}
            <div className="notifications-container">
                <h2>Notifications</h2>

                <div className="preferences-section">
                    <span className="preferences-label">Preferences:</span>

                    <div className="notification-toggle">
                        <label>
                            Notifications
                            <input 
                                type="checkbox" 
                                checked={notificationsEnabled} 
                                onChange={handleToggleNotifications} 
                            />
                        </label>
                    </div>

                    {notificationsEnabled && (
                        <div className="frequency-selection">
                            <span>Choose how often:</span>
                            <label>
                                <input 
                                    type="radio" 
                                    value={15} 
                                    checked={frequency === 15} 
                                    onChange={handleFrequencyChange}
                                />
                                Every 15 minutes
                            </label>
                            <label>
                                <input 
                                    type="radio" 
                                    value={30} 
                                    checked={frequency === 30} 
                                    onChange={handleFrequencyChange}
                                />
                                Every 30 minutes
                            </label>
                            <label>
                                <input 
                                    type="radio" 
                                    value={45} 
                                    checked={frequency === 45} 
                                    onChange={handleFrequencyChange}
                                />
                                Every 45 minutes
                            </label>
                            <label>
                                <input 
                                    type="radio" 
                                    value={60} 
                                    checked={frequency === 60} 
                                    onChange={handleFrequencyChange}
                                />
                                Every 60 minutes
                            </label>
                        </div>
                    )}
                </div>

                <button className="save-button">Save</button>
            </div>
        </div>
    );
};

export default Notifications;
