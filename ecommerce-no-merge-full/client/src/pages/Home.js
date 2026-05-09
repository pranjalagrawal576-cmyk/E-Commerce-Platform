
import {useEffect,useState} from "react";
import axios from "axios";

export default function Home(){
  const [p,setP]=useState([]);

  useEffect(()=>{
    axios.get("http://localhost:5000/api/products")
    .then(r=>setP(r.data));
  },[]);

  return(
    <div>
      <h1>Products</h1>
      {p.map(x=>(
        <div key={x._id}>{x.name} ₹{x.price}</div>
      ))}
    </div>
  )
}
