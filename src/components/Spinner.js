import React from 'react'
import loading from './loading.gif'

const Spinner=()=>  {
  
    return (
      <div className="text-center">
        <img  src={loading}  style={{height:"50px",width:"60px"}} alt="loading" />
      </div>
    )
  }

export default Spinner
