import styled from "styled-components";
import { Route, Routes, Link } from "react-router-dom"
import Home from "./Home";
import Shoes from "./Shoes";


export default function Navbar()
{
 
    const Ul = styled.ul`
    list-style-type: none;
    margin: 0;
    padding-left:45%;
    overflow: hidden;
    background-color: #333;`;

    const Li = styled.li` float: left;`;
   
    const A = styled(Link)` 
    display: block;
    color: white;
    padding: 14px 16px;
    text-decoration: none;
    &:hover {
        background-color: #111;
  }`;

return (
    <>
    <Ul>
        <Li><A  to="/">Home</A></Li>
        <Li><A to="/Shoes">Shoes</A></Li>
        <Li><A to="/About">About</A></Li>
    </Ul>

  
    </>
  )

}