import {BrowserRouter, Route, Routes} from "react-router-dom";

import './App.css';
import Footer from './components/Footer/Footer'
import Abouthtml from "./components/AboutHTML/Abouthtml";
import Aboutcss from "./components/AboutCSS/Aboutcss";
import Aboutjs from "./components/AboutJS/Aboutjs";
import Header from './components/Header/Header';
import React from "react";
import Main from "./components/Main/Main";

function App() {
  return (
    <>
    
      <div className="template">
        
      <Header />
      <div className="togrid">
      <Routes>
      <Route exact path="/" element={<Main />} />
      <Route exact path="/home" element={<Main />} />
      <Route exact path="/html" element={<Abouthtml />} />
      <Route exact path="/css" element={<Aboutcss />} />
      <Route exact path="/js" element={<Aboutjs />} />
      </Routes>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
