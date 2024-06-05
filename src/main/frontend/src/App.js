import { Route, Routes } from 'react-router-dom';
import BoardList from './routes/BoardList';
import Home from './routes/Home';
import React from 'react';
import BoardDetail from './routes/BoardDetail';
import BoardWrite from './routes/BoardWrite';
import BoardUpdate from './routes/BoardUpdate';
import Daegu from "./routes/Daegu";
import Daejeon from "./routes/Daejeon";
import Gwangju from "./routes/Gwangju";
import Ulsan from "./routes/Ulsan";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board" element={<BoardList />} />
        <Route path="/board/:idx" element={<BoardDetail />} />
        <Route path="/write" element={<BoardWrite />} />
        <Route path="/update/:idx" element={<BoardUpdate />} />
        <Route path="/Daegu" element={<Daegu/>}/>
        <Route path="/Daejeon" element={<Daejeon/>}/>
        <Route path="/Ulsan" element={<Ulsan/>}/>
        <Route path="/Gwangju" element={<Gwangju/>}/>
    </Routes>
  );
}

export default App;
