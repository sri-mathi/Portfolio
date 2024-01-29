import React from 'react';
import Navbar from '../Navbar';
import resumePdf from './resume.pdf';  

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'resume.pdf';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Navbar />

      <div style={{ marginTop: '20px', marginLeft:'23%' }}>
        <iframe title="Resume PDF" src={resumePdf} width="70%" height="900px"></iframe>
      </div>
    </>
  );
}

export default Resume;
