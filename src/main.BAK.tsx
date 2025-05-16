import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.BAK.tsx'
import * as serviceWorker from './serviceWorker';
import App from './App';

// // Rendering react component
const app = createRoot(document.getElementById('app'));
app.render( <App />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


// 
// main.tsx
// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom'; // ✅ Add this
// import './index.css';
// import * as serviceWorker from './serviceWorker';
// import App from './App';

// const rootElement = document.getElementById('app');

// if (rootElement) {
//   const root = createRoot(rootElement);
//   root.render(
//     <StrictMode>
//       <BrowserRouter> {/* ✅ Wrap App with Router */}
//         <App />
//       </BrowserRouter>
//     </StrictMode>
//   );
// }

// serviceWorker.unregister();
