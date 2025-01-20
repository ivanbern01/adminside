import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Students from "./pages/Students";
import AdminAnnouncement from "./pages/AdminAnnouncement";
import Teachers from "./pages/Teachers";
import UploadedDocuments from "./pages/UploadedDocuments";
import CreateTeacher from "./pages/CreateTeacher";
import CreateStudent from "./pages/CreateStudent";
import StudentAdmission from "./pages/StudentAdmission";
import TeacherSchedule from "./pages/TeacherSchedule";
import StudentSchedule from "./pages/StudentSchedule";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App d-flex">
        {/* Sidebar Component */}
        <Sidebar />

        {/* Main content area */}
        <div className="main-content flex-grow-1 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<Students />} />
            <Route path="/students/create" element={<CreateStudent />} />
            <Route path="/students/admission" element={<StudentAdmission />} />
            <Route path="/students/schedule" element={<StudentSchedule />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/teachers/create" element={<CreateTeacher />} />
            <Route path="/teachers/schedule" element={<TeacherSchedule />} />
            <Route path="/announcement" element={<AdminAnnouncement />} />
            <Route path="/uploaded-documents" element={<UploadedDocuments />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
