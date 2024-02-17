import { useEffect, useState } from 'react';

import './App.css';

import Navbar from './Component/navbar/Navbar';
import Home from './Component/page/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactPractise from './Component/page/React-practise/ReactPractise';
import Blogs from './Component/page/Blogs/Blogs';
import Works from './Component/page/works/Works';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/react-practise' element={<ReactPractise />}></Route>
          <Route path='/blogs' element={<Blogs />}></Route>
          <Route path='/works' element={<Works />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
