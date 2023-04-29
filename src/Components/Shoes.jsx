import styled from "styled-components";
import { useParams,useNavigate,Link } from "react-router-dom";

import {useState, useEffect} from "react";
import { data, getRequest } from "../API/api";

export default function Shoes() {
    
    const H1 = styled.h1`
    font-family: verdana;
    font-size: 300%;
`;

    const Div = styled.div`
      border: 2px outset red;
      text-align: center;
      width: 300px;
      height: 290px;
      float:left;
      margin-left: 30px;
      margin-bottom: 100px;
   
      
    `;

const [posts , setPost] = useState([]);
const [count , setCount] = useState(0);


useEffect(() => {
  getRequest();
  setInterval(() => {
    setPost(data.data);
  }, 1);
}, []);

const Button = styled(Link)`
  background-color: #e91e63;
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 2px lightgray;
  text-decoration: none;
  &:hover {
    background-color: #ad1457;
  }
`;

return (
      <>
        <center>
          <table>
            <tr>
              <td>
                  <H1>shoes</H1>
              </td>
              <td>
                  <br/>
                  <Button to={`add`} style={{marginLeft:12}}> add </Button>
              </td>
            </tr>
          </table>
       

            {posts?.map((el) => (
              
            
                      <Div  key={el.id} >  
                          
                                <h1>{el.name}</h1>
                                <p> price : {el.price}$</p>
                                <img style={{width:150 , height:100}} src={el.picture}/>
                                <br/><br/>
                                <Button to={`/Shoes/${el.id}`} > Info </Button>
                      </Div>
              
       
              ))}
     
        </center>
      </>
    )
  }
  