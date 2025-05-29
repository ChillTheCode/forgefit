import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route as well
import GymLanding from './GymLanding'; // Assuming GymLanding is in ./GymLanding.js

function App() {
  return (
    <Router>
      <Routes>
        {/* You'll likely have other routes here too */}
        <Route path="/forgefit" element={<GymLanding />} />
        {/* If GymLanding itself has internal routing,
            you might wrap specific parts of it in a Router
            but typically the top-level is sufficient. */}
      </Routes>
    </Router>
  );
}

export default App;