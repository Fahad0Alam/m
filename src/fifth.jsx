import React, { useEffect, useRef } from 'react';

function CameraPage() {
  const videoRef = useRef(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    startCamera();
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#FFB6C1' }}>
      <video ref={videoRef} autoPlay style={{ border: '2px solid black', borderRadius: '10px' }} />
    </div>
  );
}

export default CameraPage;
