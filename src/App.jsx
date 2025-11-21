import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  return (
    <Routes>
      {/* Protected Route */}
      <Route
        path="/"
        element={
          // <ProtectedRoute>
            <Dashboard />
          // </ProtectedRoute>
        }
      />

      {/* Public Route */}
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
