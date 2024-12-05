import React, { useState } from 'react'

const HigherOrderCmp = (props) => {


  return (
    <div>
        <h3>Higher Order Component</h3>
        <h1 className='p-5' style={{backgroundColor: props.bgColor}}>{props.cmp}</h1>
    </div>
  )
}

export default HigherOrderCmp
