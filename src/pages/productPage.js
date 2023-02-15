import React,{useState, useEffect} from 'react'
import axios from "axios"
import "./Product.css"
const ProductPage = () => {
    const [count , setcount ] = useState(0);
    const [decount , setdecount ] = useState(0);
    const [catFact, setCatFact]= useState("")

useEffect( ()=>{
    document.title = `Incr- ${count} | decr -$ {decount}`;
});

const getNewFact = ()=>{
    axios.get("https://catfact.ninja/fact").then((res)=>{
        console.log("res", res.data.fact);
        setCatFact(res.data.fact);
    })
}

  return (
    <div>
      <h1>Product page!</h1>
      <p onClick={()=> setcount(count + 1)}>Increment count - { count } </p>
      <p onClick={()=> setdecount(decount - 1)}>decrement count - { decount }
      {" "}
      DEcrease count - {decount}
      </p>

      <div className='cat-facts'>
      <h2>Cat Facts</h2>
      <button onClick={()=>getNewFact()}>get new fact</button>
      <h1>{catFact}</h1>

      </div>
    </div>
  )
}

export default ProductPage
