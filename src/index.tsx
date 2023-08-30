import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/reset.scss';
import App from './App';
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);