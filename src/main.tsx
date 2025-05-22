// src/main.tsx (your entry file)
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';

const container = document.getElementById('app');

if (container) {
  const root = createRoot(container);
  
  root.render(
    <StrictMode>
      <Router> {/* Only one router at root level */}
        <AuthProvider>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </AuthProvider>
      </Router>
    </StrictMode>
  );
}
