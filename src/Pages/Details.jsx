import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Pages.css'


function Details() {
    let[show,setShow]=useState(false)
    let [toggle,setToggle]=useState(true)
    let[second,setSecond]=useState(true)
     var abc=()=>{
        setSecond(!second)
     }
    
    let {cid}=useParams()
    let [data,setData]=useState([])
    useEffect(()=>{
    fetch(`https://dummyjson.com/products/${cid}`).then((a)=> a.json()).then((b)=> setData(b))
    },[])
  return (
    <>


    <section>
        <div className="container">
            <div className="row">
               {data.title}
               <img src={data.thumbnail} alt="" />
            </div>
        </div>
    </section>

    <section>
        <input type={show ? "text":"password"} placeholder='pass' />
        <button onClick={()=> setShow(!show)}>{show ? "hide":"show"}</button>
    </section>
      
      <div className={toggle ? "": "hide"}>
        metoggle
      </div>
          <section onClick={abc}>
          <div className={second ? "":"hide"}>
        <button onClick={()=> setToggle(!toggle)}>clickme</button>
        </div>
          </section>
    </>
  )
}

export default Details
