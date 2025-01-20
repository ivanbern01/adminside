import React from "react";
import styles from "./CreateTeacher.module.css";

const CreateTeacher = () => {
  return (
    <div className={`container ${styles.createTeacherContainer}`}>
      <div className={`card shadow-lg ${styles.card}`}>
        <div className={`card-header ${styles.cardHeader}`}>
          <h3 className={styles.headerTitle}>Create New Teacher</h3>
        </div>
        <div className="card-body">
          <form>
            <div className="row">
              {/* Faculty ID */}
              <div className="col-md-6 mb-3">
                <label htmlFor="facultyId" className={`form-label ${styles.label}`}>
                  Faculty ID
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="facultyId"
                  placeholder="Enter faculty ID"
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
                  min="18"
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
              {/* Sections */}
              <div className="col-md-6 mb-3">
                <label htmlFor="sections" className={`form-label ${styles.label}`}>
                  Sections
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="sections"
                  placeholder="Enter sections (e.g., A, B, C)"
                />
              </div>

              {/* Subjects Handled */}
              <div className="col-md-6 mb-3">
                <label htmlFor="subject" className={`form-label ${styles.label}`}>
                  Subjects Handled
                </label>
                <select className="form-select" id="subject">
                  <option defaultValue="">Select a subject</option>
                  <option value="math">Math</option>
                  <option value="science">Science</option>
                  <option value="history">History</option>
                  <option value="english">English</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`btn ${styles.submitButton} w-100 mt-3`}
            >
              Add Teacher
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTeacher;
