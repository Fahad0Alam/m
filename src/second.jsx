import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

//<iframe src="https://giphy.com/embed/L3tnwOpOHUQ5a" width="480" height="252" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/thinking-cameron-diaz-L3tnwOpOHUQ5a">via GIPHY</a></p>
//https://giphy.com/embed/KztT2c4u8mYYUiMKdJ
function SecondPage() {
  const gifEmbedCode = `
    <iframe src="https://giphy.com/embed/L3tnwOpOHUQ5a" width="600" height="400" style="width:75%; height:auto; border:none;" frameborder="0" class="giphy-embed" allowfullscreen></iframe>
  `;
  const navigate  = useNavigate();

  
  const handleYesClick = () => { window.open("https://www.instagram.com/direct/inbox/", "_blank"); };

  const handleNoClick = () => {
    navigate('/third');
  };

  return (
    <div style={{ backgroundColor: '#FFB6C1', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 0, padding: 0 }}>
      <div dangerouslySetInnerHTML={{ __html: gifEmbedCode }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }} />
      <p style={{ textAlign: 'center', marginTop: '20px' }}>Soch lo phirse</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
        <button className="hover-button" onClick={handleYesClick}>Yes</button>
        <button className="hover-button" onClick={handleNoClick}>No</button>
      </div>
    </div>
  );
}

export default SecondPage;
