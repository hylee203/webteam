import React from 'react';
import {Routes, Route, Link} from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
      <>
          <div className="MainPage" align="center">
              <div style={{ position: 'relative' , marginTop:100}}>
                  <img src="/images/map.png" alt="지도 이미지" style={{ width: '1000px', height: '1000px' }} />
                  <div className="flag-buttons">
                      <Link to="/Daejeon" className="flag-link" style={{ position: 'absolute', top: '41%', left: '52%', transform: 'translate(-50%, -50%)' }}>
                          <img src="/images/flag.png" className="flag-image" alt="깃발 이미지"  />
                      </Link>
                      <Link to="/Daegu" className="flag-link" style={{ position: 'absolute', top: '50%', left: '63%', transform: 'translate(-50%, -50%)' }}>
                          <img src="/images/flag.png" className="flag-image" alt="깃발 이미지" />
                      </Link>
                      <Link to="/Ulsan" className="flag-link" style={{ position: 'absolute', top: '56%', left: '69%', transform: 'translate(-50%, -50%)' }}>
                          <img src="/images/flag.png" className="flag-image" alt="깃발 이미지"  />
                      </Link>
                      <Link to="/Gwangju" className="flag-link" style={{ position: 'absolute', top: '63%', left: '48%', transform: 'translate(-50%, -50%)' }}>
                          <img src="/images/flag.png" className="flag-image" alt="깃발 이미지"  />
                      </Link>
                  </div>

              </div>
          </div>
      </>
  );
};

export default Home;