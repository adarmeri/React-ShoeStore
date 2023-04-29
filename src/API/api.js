
import { useParams,useNavigate,Link } from "react-router-dom";
import axios from "axios";

let data = [];
let sdata =[];


const getRequest = () => {
    const fetch = async () => {
        try {
            data = await axios.get("https://644d11becfdddac9709c3619.mockapi.io/shoes");
            console.log("hi");
            console.log(data);
        } catch (err) {
          console.log(err);
        }
      };
      fetch();
}


const getSRequest = (id) => {
  const getS = async () => {
      try {
          sdata = await axios.get(`https://644d11becfdddac9709c3619.mockapi.io/shoes/${id}`);
          console.log(sdata);
      } catch (err) {
        console.log(err);
      }
    };
    getS();
}

const deleteRequest = (id) =>{
  const del = async () => {
    try {
          await axios.delete(`https://644d11becfdddac9709c3619.mockapi.io/shoes/${id}`);
    } catch (err) {
      console.log(err);
    }
  };
  del();
}


const updateRequest = (id , newName , newPrice , img) =>{
  const update = async () => {
    try {
      console.log(id , newName , newPrice , img);
          await axios.put(`https://644d11becfdddac9709c3619.mockapi.io/shoes/${id}` , 
          {
            name:newName,
            price:newPrice,
            picture : img,
          }
          );
    } catch (err) {
      console.log(err);
    }
  };
  update();
}


const addRequest = (newName , newPrice , img) =>{
  const add = async () => {
    try {
      console.log(newName , newPrice , img);
          await axios.post(`https://644d11becfdddac9709c3619.mockapi.io/shoes/` , 
          {
            name:newName,
            price:newPrice,
            picture : img,
          }
          );
    } catch (err) {
      console.log(err);
    }
  };
  add();
}

export {getRequest , data , getSRequest , sdata ,deleteRequest , updateRequest , addRequest};