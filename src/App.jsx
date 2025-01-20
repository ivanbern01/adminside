import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Students from './pages/Students';  // Import Students component
import Masterlist from './pages/Masterlist';  // Import Masterlist
import AdminAnnouncement from './pages/AdminAnnouncement';
import Teachers from './pages/Teachers';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<Students />} /> {/* Add route for Students */}
            <Route path="/masterlist" element={<Masterlist />} />
            <Route path= "/announcement" element={<AdminAnnouncement />}/>
            <Route path= "/teachers" element={<Teachers/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
