import React, { useState } from 'react'
import Me from './Me';
import AutoIncreasingNumber from './AutoIncreasingNumber';
import './Comp.css'


function Numv() {
    let [set,SetShow]=useState(true)
    const apiUrl = 'https://your-api-endpoint.com/number';
  return (

    <>
    <div  onClick={()=> SetShow(!set)}>
      <header className={set ? "":"cc"}>
        <div className='color'><AutoIncreasingNumber start={0} interval={0.9} limit={500}/></div>
      </header>
    </div>

    <div className="App">
      <header className="App-header">
        <Me apiUrl={apiUrl} interval={1000} limit={500} />
      </header>
    </div>
      
    </>
  )
}

export default Numv
