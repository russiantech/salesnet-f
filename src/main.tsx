// src/main.tsx (my entry file)
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { HelmetProvider } from 'react-helmet-async';
import { DeliveryProvider } from './context/DeliveryContext';
import App from './App';

const container = document.getElementById('app');

if (container) {
  const root = createRoot(container);
  
  root.render(
    <StrictMode>
      <Router> {/* Only one router at root level */}
        <AuthProvider>
          <DeliveryProvider>
            <HelmetProvider>
            <App />
            </HelmetProvider>
          </DeliveryProvider>
        </AuthProvider>
      </Router>
    </StrictMode>
  );
}
