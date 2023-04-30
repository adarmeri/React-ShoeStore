import React, {useState, useEffect} from "react";
import { useParams,useNavigate,Link } from "react-router-dom";
import axios from "axios";
import { sdata, getSRequest , deleteRequest , updateRequest , getRequest } from "../API/api";
import styled from "styled-components";

export default function Shoe()
{
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


        const P = styled.p`
        font-size: 18px;
        font-family: 'georgia';
        text-align: center;
        margin-left:-15%;
`;


        const Div = styled.div`
        border: 2px outset red;
        text-align: center;
        width: 600px;
        height: 500px;
        margin-top:5%;
`;


const { shoeId } = useParams();
const [posts , setPost] = useState({});
const [edit , setEdit] = useState(false);

const navigate = useNavigate();

useEffect(() => {
    getSRequest(shoeId);
    setInterval(() => {
        setPost(sdata.data);
    }, 1);

  }, []);

    function editItem()
    {
        const name = document.getElementById("name").value;
        const price = document.getElementById("price").value;
        const img = document.getElementById("img").value;
        if(name.match(/[a-z]/) && price.match(/[0-9]/) && img!="")
        {
            updateRequest(shoeId,name,price,img);
            getRequest();
            navigate(-1);
        }
        else
            alert("check details");

    }


    return (
        <>
        <center>
            <table >
                <tr>
                    <td>
                    <Div>
                         <h1>{posts?.name}</h1>
                         <h3>price : {posts?.price}$</h3>
                         <img style={{width:400 , height:250}} src={posts?.picture}/> <br/><br/><br/><br/><br/>
                         <Button onClick={() => navigate(-1)}>back</Button> <Button onClick={()=>setEdit(edit=>!edit)}>edit</Button> <Button onClick={()=>{deleteRequest(shoeId);navigate(-1)}}>delete</Button>
                    </Div>
                    </td>
                    <td>
                        {edit&&
                    <Div >
                        <center><br/><br/><br/><br/>
                                 <tr>
                                     <td>
                                      <h1>edit name:</h1>
                                     </td>
                                     <td>
                                      <input id="name" defaultValue={posts?.name} type="text"/>
                                     </td>
                                </tr>

                                <tr>
                                     <td>
                                      <h1>edit price:</h1>
                                     </td>
                                     <td>
                                      <input id="price" defaultValue={posts?.price} type="text"/>
                                     </td>
                                </tr>

                                <tr>
                                     <td>
                                      <h1>edit img:</h1>
                                     </td>
                                     <td>
                                      <input id="img" defaultValue={posts?.picture} type="text"/>
                                     </td>
                                </tr>

                                <Button onClick={()=>{editItem()}}>Submit</Button> <Button onClick={()=>{setEdit(edit=>!edit)}}>cancel</Button>
                       </center>
                    </Div>
                    }
                    </td>
                </tr>
            </table>



        </center>

        </>
    )

}