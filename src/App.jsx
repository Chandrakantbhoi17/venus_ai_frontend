import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './pages/home/Home.jsx';
import AdminPanel from './components/panel/AdminPanel.jsx';
import Layout from './layouts/Layout.jsx';
import LoginPage from './pages/Login.jsx';
import ProtectedRoute from './routes/ProtectedRoutes.jsx'; // Make sure the path is correct
import  AIMLIntegration   from "./pages/ai_integration/AiIntegration.jsx"
function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        {/* Public layout + home */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* Public route */}
        <Route>
          <Route path="/login" element={<LoginPage />} />
        </Route>
          <Route path="/ai-integration" element={< AIMLIntegration/>} />

        {/* Protected routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <AdminPanel />
            </ProtectedRoute>
          }
        />

        {/* Add more protected routes here */}
        {/* Example:
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }
        /> 
        */}
      </Routes>
    </Router>
  );
}

export default App;
