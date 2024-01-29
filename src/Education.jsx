import React from 'react';
import './Education.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBook } from '@fortawesome/free-solid-svg-icons';
import Nav from './Navbar';

const Education = () => {
  return (
    <>
      <Nav />
      <div className="Education">
        <div className="container-fluid bg-light">
          <div className="row">
          <div className="col-md-1 "></div>
            <div className="col-md-5 side2">
           
                <img src="educa.png" width={450} height={300}/><br></br><br></br>
                <h3><FontAwesomeIcon icon={faGraduationCap} className="education-icon" />Bharathi Matric Higher Secondary School</h3>
                <h5>Higher Secondary Certificate(HSC) </h5>
                <h6>Percentage : 95%</h6>
                <p>Year : 2020-2021</p><br></br>
                <h3><FontAwesomeIcon icon={faGraduationCap} className="education-icon" />Bharathi Matric Higher Secondary School</h3>
                <h5>Secondary School Leaving Certificate(SSLC) </h5>
                <h6>Percentage : 94.8%</h6>
                <p>Year : 2018-2019</p>
            
            </div>
            <div className="col-md-6 side2">
 <img src="uni2.jpg" width={400} height={300} className="uni"/><br></br><br></br>
                <h3><FontAwesomeIcon icon={faGraduationCap} className="education-icon" />Kongu Engineering College</h3>
                <h5>B Tech Artificial Intelligence and Machine Learning</h5>
                <h6>CGPA: 9.09</h6>
                <p>Year : 2021-2025</p><br></br>
                <h3><FontAwesomeIcon icon={faGraduationCap} className="education-icon" />Kongu Engineering College</h3>
                <h5>Honours at Internet Of Things(IOT)</h5>
                <p>Year : 2023-2025</p>
            
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
