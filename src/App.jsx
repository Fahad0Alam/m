import React,{useEffect} from 'react';
import { useNavigate,useLocation} from 'react-router-dom';
import './App.css';

function App() {
  const navigate = useNavigate();

  useEffect(() => { if (window.performance.getEntriesByType('navigation')[0].type === 'reload') { const isFirstLoad = sessionStorage.getItem('firstLoad'); if (!isFirstLoad) { sessionStorage.setItem('firstLoad', 'true'); navigate('/'); } } }, [navigate]);


  const handleNoClick = () => {
    navigate('/second');
  };

  const handleYesClick = () => { window.open("https://www.instagram.com/direct/inbox/", "_blank"); };

  const gifEmbedCode = `
    <iframe src="https://giphy.com/embed/KztT2c4u8mYYUiMKdJ" width="480" height="374" style="width:30%; height:auto;" frameborder="0" class="giphy-embed" allowfullscreen></iframe>
  `;

  return (
    <div style={{ backgroundColor: '#FFB6C1', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 0, padding: 0 }}>
      <div dangerouslySetInnerHTML={{ __html: gifEmbedCode }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }} />
      <p style={{ textAlign: 'center', marginTop: '20px' }}>Would you give me your pic??</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
        <button className="hover-button" onClick={handleYesClick}>Yes</button>
        <button className="hover-button" onClick={handleNoClick}>No</button>
      </div>
    </div>
  );
}

export default App;

