import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Volleyball from './components/Volleyball';
import Football from './components/Football';
import Cricket from './components/Cricket';
import Basketball from './components/Basketball';
import Hockey from './components/Hockey';
import Navbar from './components/Navbar';
import './App.css';
// import LandingImg from './images/bg.png'
// import LandingImg from './images/balls.jpg'
import Login from './components/Login';
import Register from './components/Register';
import NishaSingla from './components/nisha';
import Thinking from './components/ThinkingReact/ThinkingReact';
import Counter from './components/QueueSeries';
import Miscellanous from './components/Miscellanous';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <h1>Sports</h1>
              {/* <img src={LandingImg} alt="Landing" style={{ marginLeft: '10px', height: '500px' }} /> */}
            </>
          } />
          <Route path="/volleyball" element={<Volleyball />} />
          <Route path="/football" element={<Football />} />
          <Route path="/cricket" element={<Cricket />} />
          <Route path="/basketball" element={<Basketball />} />
          <Route path="/hockey" element={<Hockey />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/nisha" element={<NishaSingla />} />
          <Route path="/think" element={<Thinking />} />
          <Route path="/count" element={<Counter />} />
          <Route path="/miscel" element={<Miscellanous />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
