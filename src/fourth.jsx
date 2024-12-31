import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

//<iframe src="https://giphy.com/embed/fyTFhs5kTtI1MnFDkQ" width="480" height="480" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/pudgypenguins-penguin-pudgy-lil-fyTFhs5kTtI1MnFDkQ">via GIPHY</a></p>

function FourthPage() {
    const gifEmbedCode = `
    <iframe src="https://giphy.com/embed/fyTFhs5kTtI1MnFDkQ" width="600" height="400" style="width:40%; height:auto;" frameborder="0" class="giphy-embed" allowfullscreen></iframe>
  `;  
  const navigate = useNavigate();

  const handleYesClick = () => {
    navigate('/fifth')
  };

  const handleNoClick = () => {
    //navigate('/');
  };

  return (
    <div style={{ backgroundColor: '#FFB6C1', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 0, padding: 0 }}>
        <div dangerouslySetInnerHTML={{ __html: gifEmbedCode }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }} />
      <p style={{ textAlign: 'center', marginTop: '20px' }}>Offo, Aoo tumhe ek cutie se milata hu.....</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
        <button className="hover-button" onClick={handleYesClick}>Dikhaoooooo</button>
        
      </div>
    </div>
  );
}

export default FourthPage;



//<iframe src="https://giphy.com/embed/ugEVKz4GXtS6BByFgC" width="480" height="480" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/pudgypenguins-funny-lol-laugh-ugEVKz4GXtS6BByFgC">via GIPHY</a></p>