// src/App.jsx
import { BrowserRouter as Router } from 'react-router-dom';
import AppContent from './AppContent';

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}