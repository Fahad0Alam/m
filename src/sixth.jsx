import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

//<iframe src="https://giphy.com/embed/Gyc0RyjpLuMU9FQLs1" width="480" height="480" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/pudgypenguins-annoyed-oh-eye-roll-Gyc0RyjpLuMU9FQLs1">via GIPHY</a></p>

function SixthPage() {
  const gifEmbedCode = `
    <iframe src="https://giphy.com/embed/ugEVKz4GXtS6BByFgC" width="600" height="400" style="width:40%; height:auto;" frameborder="0" class="giphy-embed" allowfullscreen></iframe>
  `;
  const navigate = useNavigate();

  const handleYesClick = () => {
    
  };

  const handleNoClick = () => {
    navigate('/fourth');
  };

  return (
    <div style={{ backgroundColor: '#FFB6C1', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 0, padding: 0 }}>
        <div dangerouslySetInnerHTML={{ __html: gifEmbedCode }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }} />
      <p style={{ textAlign: 'center', marginTop: '20px' }}></p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
        <button className="hover-button" onClick={handleNoClick}>Kammo jii for a reason😎😎</button>
      </div>
    </div>
  );
}

export default SixthPage;