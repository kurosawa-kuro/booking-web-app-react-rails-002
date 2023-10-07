// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import "./index.css";

const root = document.getElementById('root');
const appRoot = createRoot(root);
appRoot.render(<App />);
