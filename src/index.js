import React from 'react';
import { createRoot } from 'react-dom';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Homepage from './Homepage';
import SignIn from './SignIn';
import ThankYou from './ThankYou';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/donate" element={<SignIn />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ToastContainer />
      <App />
    </Router>
  </React.StrictMode>
);
