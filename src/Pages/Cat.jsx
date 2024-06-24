import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Cat() {
    let {did}=useParams()
    let[data,setData]=useState([])
    useEffect(()=>{
  fetch(`https://dummyjson.com/products/category/${did}`).then((a)=> a.json()).then((b)=>setData(b.products))
    },[did])
  return (
    <>
    <section>
        <div className="container">
            <div className="row">
                  {data.slice().map((a)=>(
                    <div className="col-lg-4">
                      {a.title}
                      <img src={a.thumbnail} alt="" />

                      <div>
                       <button><Link to={`/details/${a.id}/`}>Details</Link></button>
                      </div>
                    </div>
                  ))}
            </div>
        </div>


    </section>
      
    </>
  )
}

export default Cat
