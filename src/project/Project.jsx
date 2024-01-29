import React from 'react';
import './project.css';
import Navbar from '../Navbar';

const Project = () => {
return(<>
    <Navbar/>
    <div className='Project'>
        <div className="outer bg-light">
         <div className="inner">
         <img src="pro1.png" width={200} height={100}/><br></br><br></br><h5>CATTLE CARE AI</h5><p>AI-powered skin disease classifier, leveraging Vision Transformer. Integrated Gradio chatbot provides detailed disease info.</p>
         <div className='icon4'><img src="python.png" width={40} height={50} /></div>
            <img src="llm.png" width={40} height={50}/>
            <img src="api.png" width={40} height={40}/>
            <img src="gradio.png" width={30} height={30}/>
            <img src="hug.png" width={40} height={50}/><br></br><br></br>
            <h6 className='code3 text-center'><a href="https://github.com/sri-mathi" className='decor'>code</a></h6>
         </div>

         <div className="inner">
         <img src="hosp.png" width={200} height={100}/><br></br><br></br><h5>HOSPITAL WEBSITE</h5><p>A software solution designed to automate and streamline the
management and operations of a healthcare facility.</p>
     <div className='icon4'><img src="react.png" width={40} height={50} /></div>
            <img src="node.png" width={40} height={50}/>
            <img src="css.png" width={40} height={40}/>
            <img src="api.png" width={40} height={40}/>
            <img src="Fire.png" width={40} height={50}/><br></br><br></br>
            <h6 className='code3 text-center'><a href="https://github.com/sri-mathi" className='decor'>code</a></h6>
         </div>
         <div className="inner">
         <img src="OCRIMG.png" width={200} height={100}/><br></br><br></br><h6>IMAGE TEXT EXTRACTOR</h6><p>Web page to extract text from the image. Build using ReactJs,
Flask and OCR. Hosted on Firebase.</p>
     <div className='icon4'><img src="react.png" width={40} height={50} /></div>
            <img src="llm.png" width={40} height={50}/>
            <img src="python.png" width={40} height={45}/>
            <img src="flask.png" width={40} height={40}/>
            <img src="Fire.png" width={40} height={50}/><br></br><br></br>
            <h6 className='code3 text-center'><a href="https://github.com/sri-mathi" className='decor'>code</a></h6>
         </div>

         <div className="inner">
         <img src="doc.png" width={200} height={100}/><br></br><br></br><h6>DOCUMENT ASSISTANT</h6><p>Empower document queries with LLM Document Assistant!
ReactJS frontend, Flask backend, and BERT LLM model
seamlessly provide answers based on your input. Simplifying
information retrieval.</p>
<div className='icon4'><img src="react.png" width={40} height={50} /></div>
            <img src="llm.png" width={40} height={50}/>
            <img src="python.png" width={40} height={45}/>
            <img src="flask.png" width={40} height={40}/>
            <img src="Fire.png" width={40} height={50}/><br></br><br></br>
            <h6 className='code3 text-center'><a href="https://github.com/sri-mathi" className='decor'>code</a></h6>
         </div>
        </div>


        <div className="outer bg-light">
         <div className="inner">
         <img src="p1.jpg" width={200} height={100}/><br></br><br></br><h5>Medi Assist</h5><p>MediAssist: Scan medicine covers for comprehensive details using OCR,
aided by a chatbot doctor. Set reminders effortlessly. Your
go-to for informed and organized medication management.</p>
<h6 className='code3 text-center'><a href="https://github.com/sri-mathi" className='decor'>code</a></h6></div>
         <div className="inner">
         <img src="p2.jpg" width={200} height={100}/><br></br><br></br><h5>Elderly Fall Prediction</h5><p>Elderly Fall Prediction! Utilizing computer vision, KNN, Random
Forest, SVM, and deep learning models like CNN, LSTM, RNN.
Augmentation technique and preprocessing amplify accuracy in
anticipating falls among seniors.</p><h6 className='code3 text-center'><a href="https://github.com/sri-mathi" className='decor'>code</a></h6>
         </div>
         <div className="inner">
         <img src="p3.jpg" width={200} height={100}/><br></br><br></br><h5>Anomaly Detection</h5><p>Pyspark anomaly detection pipeline: Employing ML models,
data preprocessing techniques for efficient anomaly
identification. Streamlining insights for enhanced data
integrity.</p><h6 className='code3 text-center'><a href="https://github.com/sri-mathi" className='decor'>code</a></h6>
         </div>
         <div className="inner">
         <img src="p4.jpg" width={200} height={100}/><br></br><br></br><h5>Recipe Decoder</h5><p>Revolutionize cooking! CNN algorithm scans veggies / fruits,
suggests recipes for diverse situations. User-friendly interface, accessible via mobile/web camera. Perfect for easy,
creative cooking!</p><h6 className='code3 text-center'><a href="https://github.com/sri-mathi" className='decor'>code</a></h6>
         </div>
        </div>
    </div>
    
</>
);
}

export default Project;