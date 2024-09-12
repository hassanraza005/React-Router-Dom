import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { RouterProvider } from 'react-router-dom';
import Publicroute from './routes/router.jsx';


createRoot(document.getElementById('root')).render(
<RouterProvider router={Publicroute}/>
)
