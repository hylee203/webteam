import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
    const flagPositions = {
        Daejeon: { top: '38%', left: '52%' },
        Daegu: { top: '48%', left: '72%' },
        Ulsan: { top: '53%', left: '83%' },
        Gwangju: { top: '61%', left: '44%' },
    };

    return (
        <div className="MainPage">
            <div className="map-container">
                <img src="/images/map.png" alt="지도 이미지" className="map-image" />
                {Object.entries(flagPositions).map(([city, position]) => (
                    <Link
                        to={`/${city}`}
                        className="flag-link"
                        key={city}
                        style={{ top: position.top, left: position.left }}
                    >
                        <img src="/images/flag.png" className="flag-image" alt="깃발 이미지" />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Home;
