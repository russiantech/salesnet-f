// src/main.tsx (your entry file)
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
// import { HelmetProvider } from 'react-helmet';
import App from './App';
import { DeliveryProvider } from './context/DeliveryContext';
// import './index.css';
// import { DeliveryProvider } from './context/DeliveryContext';

const container = document.getElementById('app');

// 
// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );

// root.render(
//   <React.StrictMode>
//     <DeliveryProvider>
//       <App />
//     </DeliveryProvider>
//   </React.StrictMode>
// );
// 
if (container) {
  const root = createRoot(container);
  
  root.render(
    <StrictMode>
      <Router> {/* Only one router at root level */}
        <AuthProvider>
          <DeliveryProvider>
          {/* <HelmetProvider> */}
            <App />
          {/* </HelmetProvider> */}
          </DeliveryProvider>
        </AuthProvider>
      </Router>
    </StrictMode>
  );
}
