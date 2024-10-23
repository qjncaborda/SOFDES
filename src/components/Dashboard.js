import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Ensure that you update your CSS accordingly

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const goToPostureDetection = () => {
        navigate('./components/ThreeVBHistory/PostureDetection');
    };

    const goToMountControl = () => {
        navigate('/mount-control');
    };

    const goToNotifications = () => {
        navigate('/Notifications');
    };

    const goToPostureCorrection = () => {
        navigate('/posture-correction');
    };

    const goToAccountSettings = () => {
        navigate('/account-settings');
    };

    return (
        <div className="dashboard">
            {/* Sidebar Toggle Button (Now a settings icon button) */}
            <button className="settings-button" onClick={toggleSidebar}>
                <i className="fas fa-cog"></i> {/* Settings Icon */}
            </button>

            {/* Sidebar */}
            {isSidebarOpen && (
                <div className="sidebar">
                    <div className="sidebar-header">
                        <div className="user-info">
                            <i className="fas fa-cog user-icon"></i> {/* Updated to settings icon */}
                            <p>User_TITE</p>
                        </div>
                        <button className="close-sidebar" onClick={toggleSidebar}>X</button>
                    </div>
                    <ul className="sidebar-menu">
                        <li onClick={goToMountControl}>Mount Control</li>
                        <li onClick={goToNotifications}>Notifications</li>
                        
                        <li onClick={goToPostureCorrection}>Posture Correction</li>
                        <li onClick={goToAccountSettings}>Account Settings</li>
                    </ul>
                </div>
            )}

            {/* Dashboard Header */}
            <header className="dashboard-header">
                <h1>Dashboard</h1>
            </header>

            {/* Camera Feed Section */}
            <section className="camera-feed">
                <div className="camera-placeholder">
                    <i className="fas fa-video-slash camera-icon"></i>
                </div>
            </section>

            {/* Posture Status Section */}
            <section className="posture-status">
                <h3>Posture Status</h3>
                <div className="posture-indicators">
                    <div className="indicator good-posture">
                        <span>Good Posture</span>
                    </div>
                    <div className="indicator bad-posture">
                        <span>Bad Posture</span>
                    </div>
                </div>
                <button className="view-history-button" onClick={goToPostureDetection}>
                    View Posture History
                </button>
            </section>
        </div>
    );
};

export default Dashboard;
