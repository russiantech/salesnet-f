import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.BAK.tsx'
import * as serviceWorker from './serviceWorker';
import App from './App';

// createRoot(document.getElementById('app')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
  
// // Rendering react component
const app = createRoot(document.getElementById('app'));
app.render( <App />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

