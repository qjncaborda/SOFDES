// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogInPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import CameraFeed from './components/CameraFeed'; 
import Settings from './components/Settings'; 
import Controls from './components/Controls'; 
import Notifications from './components/Notifications';
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LogInPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/camera" element={<CameraFeed />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/controls" element={<Controls />} />
                <Route path="/Notifications" element={<Notifications />} />
            </Routes>
        </Router>
    );
}

export default App;
