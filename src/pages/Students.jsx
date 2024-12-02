import React, { useState } from 'react';
import styles from './Students.module.css';

const Students = () => {
  // Define some sample student data
  const [students] = useState([
    { id: 1, firstName: 'Ivan', lastName: 'lok', studentType: 'Regular', course: 'BSCS' },
    { id: 2, firstName: 'Bern', lastName: 'Loq', studentType: 'Irregular', course: 'BSCS' },
    { id: 3, firstName: 'Aziz', lastName: 'Bayabao', studentType: 'Shiftee', course: 'BSCS' },
    { id: 4, firstName: 'Dominant', lastName: 'Dioren', studentType: 'Shiftee', course: 'BSCS' },
    { id: 5, firstName: 'Joshua', lastName: 'Gamedeveloper', studentType: 'Shiftee', course: 'BSCS' },
    { id: 6, firstName: 'Gragas', lastName: 'Bagares', studentType: 'Shiftee', course: 'BSCS' },
    { id: 7, firstName: 'Huxley', lastName: 'Wildmutt', studentType: 'Shiftee', course: 'BSCS' },
    { id: 8, firstName: 'Bok', lastName: 'Bok', studentType: 'Shiftee', course: 'BSCS' },
    { id: 9, firstName: 'James', lastName: 'ragezu', studentType: 'Shiftee', course: 'BSCS' },
    // Add more students as needed
  ]);

  // State to hold the search input
  const [searchQuery, setSearchQuery] = useState('');

  // Filter students based on the last name
  const filteredStudents = students.filter(student =>
    student.lastName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle change in search input
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className={styles.container}>

      
      {/* Search Bar */}
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search by Last Name"
          value={searchQuery}
          onChange={handleSearchChange}
          className={styles.searchInput}
        />
      </div>

      {/* Student Table */}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Student Type</th>
            <th>Course</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.studentType}</td>
                <td>{student.course}</td>
                <td>
                  <button className={styles.viewButton}>View</button>
                  <button className={styles.editButton}>Edit</button>
                  <button className={styles.deleteButton}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No students found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Students;
