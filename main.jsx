import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DataProvider from './store/dataStore.jsx';
import MetaMaskProvider from './MetaMaskProvider.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DocumentManagement from './jsx/DocumentManagement';
import Certify from './jsx/Certify';
import Update from './jsx/Update';
import View from './jsx/View';
import Verify from './jsx/Verify';
import Dashboard from './jsx/Dashboard';
import Activate from './jsx/Activate';
import Profile from './jsx/Profile';
import './css/nucleo-svg.css';
import './css/nucleo-icons.css';
import './css/material-dashboard.min.css';
import './css/material-dashboard.css';

/**
 * @title Root Component
 * @notice Renders the root component
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Wrap the App component with DataProvider and MetaMaskProvider */}
    <DataProvider>
      <MetaMaskProvider>
        <App />
      </MetaMaskProvider>
    </DataProvider>
  </StrictMode>
)
