import { useState } from "react";

const src = '/mjpeg'; // no env needed for dev

// You can add width/height with CSS; browser handles the multipart stream.

export default function App() {
  const [connected, setConnected] = useState(true);

  // Toggle reconnect by changing the src (forces <img> reload)
  const bust = () => {
    setConnected(false);
    setTimeout(() => setConnected(true), 50);
  };

  return (
    <div style={{background:"#000",height:"100vh",display:"flex",flexDirection:"column"}}>
      <div style={{padding:"8px",color:"#fff",fontFamily:"system-ui"}}>
        <strong>Camera Stream (MJPEG)</strong>
        <button onClick={bust} style={{marginLeft:12,padding:"6px 10px"}}>Reconnect</button>
      </div>
      <div style={{flex:1,display:"flex",justifyContent:"center",alignItems:"center"}}>
        {connected ? (
          <img
            src={src}
            alt="mjpeg"
            style={{maxWidth:"100%",maxHeight:"100%",objectFit:"contain"}}
          />
        ) : null}
      </div>
    </div>
  );
}