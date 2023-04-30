import styled from "styled-components";
import { Route, Routes, Link } from "react-router-dom"
import { useParams,useNavigate } from "react-router-dom";
import { addRequest , getRequest} from "../API/api";



export default function Add() {
    
    const navigate = useNavigate();


    const Div = styled.div`
    border: 2px outset red;
    text-align: center;
    width: 600px;
    height: 500px;
    `;

        
    const H1 = styled.h1`
    font-family: verdana;
    font-size: 300%;
    `;

    const P = styled.p`
        font-size: 18px;
        font-family: 'georgia';
        text-align: center;
        margin-left:-15%;
    `;

    const Button = styled(Link)`
    background-color: #e91e63;
    color: white;
    padding: 5px 15px;
    border-radius: 5px;
    margin: 10px 0px;
    cursor: pointer;
    box-shadow: 2px lightgray;
    text-decoration: none;
    &:hover {
        background-color: #ad1457;
    }
    `;


    function addItem()
    {
       const name = document.getElementById("name").value;
       const price = document.getElementById("price").value;
       const img = document.getElementById("img").value;
       if(name.match(/[a-z]/) && price.match(/[0-9]/) && img!=""){
       addRequest(name,price,img);
       getRequest();
       navigate(-1);
       }
       else
           alert("check details");
    }



    return (
      <>
        <center>
        <H1>Add shoe</H1>
            <Div>
            <center>
                <table>
                         <tr>
                             <td><h1>name : </h1></td>
                             <td><input id="name" type="text"/></td>
                         </tr>
                         <tr>
                             <td><h1>price : </h1></td>
                             <td><input id="price" type="text"/></td>
                         </tr>
                         <tr>
                             <td><h1>img : </h1></td>
                             <td><input id="img" type="text"/></td>
                         </tr>
                </table>

                <br/><br/>
                
                <Button onClick={()=>navigate(-1)}>back</Button> <Button onClick={()=>{addItem()}} style={{marginLeft:100}}>add</Button>
                      
                </center>
            </Div>
        </center>
      </>
    )
  }