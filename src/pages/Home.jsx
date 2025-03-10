import React from "react";
import styles from "./Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className={`container ${styles.homeContainer}`}>
      <div className="row">
        <div className="col-md-6">
          <div className={`card text-center ${styles.customCard}`}>
            <div className="card-body">
              <h5 className="card-title">Total Students</h5>
              <p className={`card-text ${styles.number}`}>1,200</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className={`card text-center ${styles.customCard}`}>
            <div className="card-body">
              <h5 className="card-title">Total Faculties</h5>
              <p className={`card-text ${styles.number}`}>85</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
