import React from 'react';
import Navbar from '../Navbar';
import './Exper.css';

function Exper() {
  const experiences = [
    { title: 'Machine Learning Intern', company: 'Mentorness - 1 month', description: "As an ML Intern, I'm immersed in the realm of real-world machine learning projects. From hands-on experiences to tackling actual challenges, my journey involves applying machine learning concepts to practical scenarios." },
    { title: 'AI Content Writer', company: 'Nova - 1 month', description: 'Dive into the world of AI tools during my internship at Nova! Uncover the latest advancements, deepen my understanding, and share my insights on Nova social app. ' },
    { title: 'Data Analytics And Visualization Job Simulation', company: 'Accenture, Virtual', description: 'Completed Accenture virtual internship on Forage. Analyzed 7 datasets for a social media client, deriving content trends for strategic decisions. Presented findings through a PowerPoint deck and video for client and internal stakeholders.' },
    { title: 'Artificial Intelligence (AI Programmer)', company: 'Cognizant, Virtual', description: 'Completed AI job simulation for Cognizant Data Science  team, focusing on Gala Groceries. Conducted EDA in Python on Google Colab, created a Python module for model training, and presented results via PowerPoint to the Machine Learning team.' },
    { title: 'Cyber Security - Ethical Hacking', company: '1Stop - 2 months', description: 'Embark on the journey of ethical hacking, delving into topics such as Kali Linux, Linux commands, information gathering, and cybersecurity tools like Wireshark, Metasploit, and Nmap. Our project focuses on the crucial technique of port scanning, a surveillance method aimed at identifying open ports on specific hosts to fortify cybersecurity defenses.' },
  ];

  return (
    <>
      <Navbar />

      <div className="flex-container Box">

        <div className="image">
          <img src="exp1.png" height={800} width={450} alt="Image 1" className="image-style" />
        </div>

        <div className="content bg-light">
          {experiences.map((experience, index) => (
            <div key={index} className="experience-item">
              <div className="star-image">
                <img src="star.png" width={30} height={30} alt="Star" />
                &nbsp;<h4>{experience.title}</h4>
              </div>
              <h6>{experience.company}</h6>
              <p>{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Exper;
