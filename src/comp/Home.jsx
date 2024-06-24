import React, { useEffect, useState } from 'react'

function Home() {
    let [data,setData]=useState([])
    useEffect(()=>{
    fetch('https://dummyjson.com/products').then((a)=>a.json()).then((b)=>setData(b.products))
    },[])
  return (
    <>
     <section>
        <div className="container">
            <div className="row">
               {data.map((a)=>(
                   <div className="col-lg-4">
                    {a.title}
                    <img src={a.thumbnail} alt="" />
                   </div>
               ))}
            </div>
        </div>
     </section>
    </>
  )
}

export default Home
