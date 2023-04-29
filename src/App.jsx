import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styled from "styled-components";

import { Route, Routes, Link } from "react-router-dom"
import  Home  from "./Components/Home"
import  Shoes  from "./Components/Shoes"
import Navbar from './Components/Navbar'
import Shoe from './Components/Shoe';
import Add from './Components/Add';
import About from './Components/About';

function App() {

 const Footer = styled.footer`
 position:fixed;
 bottom: 0;
 left: 0;
 right: 0;
 background: #111;
 height: auto;
 width: 100%;
 padding-top: 10px;
 color: #fff;
 text-align: center;
`;

const P = styled.p`
    margin: 10px auto;
    line-height: 28px;
    font-size: 14px;
    color: #cacdd2;
    
`;

  return (
    <>
    <Navbar/>

    <Footer>

      <P> MILLARS SHOE STORE LTD REGISTERED OFFICE 51 MARKET STREET, LURGAN, CO ARMAGH, NORTHERN IRELAND, BT66 6AA<br/>

          COMPANY REGISTRATION NUMBER NI 044815 VAT NO. GB 496 9673 64<br/>
      </P>
    </Footer>



    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Shoes" element={<Shoes/>}/>
           <Route path='/Shoes' element={<Shoe/>}>
           <Route path=":shoeId" element={<Shoe/>}/>
       </Route>
          <Route path="/Shoes/add" element={<Add/>}/>
          <Route path="/About" element={<About/>}/>
      </Routes>
    </div>


    </>
  )
}

export default App
