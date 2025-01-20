import React from "react";
import styles from "./CreateStudent.module.css";

const CreateStudent = () => {
  return (
    <div className={`container ${styles.createStudentContainer}`}>
      <div className={`card shadow-lg ${styles.card}`}>
        <div className={`card-header ${styles.cardHeader}`}>
          <h3 className={styles.headerTitle}>Create New Student</h3>
        </div>
        <div className="card-body">
          <form>
            <div className="row">
              {/* Student ID */}
              <div className="col-md-6 mb-3">
                <label htmlFor="studentId" className={`form-label ${styles.label}`}>
                  Student ID
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="studentId"
                  placeholder="Enter student ID"
                />
              </div>

              {/* Full Name */}
              <div className="col-md-6 mb-3">
                <label htmlFor="fullName" className={`form-label ${styles.label}`}>
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  placeholder="Enter full name"
                />
              </div>
            </div>

            <div className="row">
              {/* Age */}
              <div className="col-md-6 mb-3">
                <label htmlFor="age" className={`form-label ${styles.label}`}>
                  Age
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="age"
                  placeholder="Enter age"
                  min="3"
                />
              </div>

              {/* Contact Number */}
              <div className="col-md-6 mb-3">
                <label
                  htmlFor="contactNumber"
                  className={`form-label ${styles.label}`}
                >
                  Contact Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="contactNumber"
                  placeholder="Enter contact number"
                />
              </div>
            </div>

            <div className="row">
              {/* Class */}
              <div className="col-md-6 mb-3">
                <label htmlFor="class" className={`form-label ${styles.label}`}>
                  Class
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="class"
                  placeholder="Enter class (e.g., 10-A)"
                />
              </div>

              {/* Section */}
              <div className="col-md-6 mb-3">
                <label htmlFor="section" className={`form-label ${styles.label}`}>
                  Section
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="section"
                  placeholder="Enter section (e.g., A, B, C)"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`btn ${styles.submitButton} w-100 mt-3`}
            >
              Add Student
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateStudent;
