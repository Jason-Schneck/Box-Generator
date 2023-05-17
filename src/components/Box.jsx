import React from 'react'

const Box = (props) => {
    console.log("box props ", props)
  return (
    <div style={{backgroundColor: props.boxObj.color, width:"50px", height:"50px", display: "inline-block"}}>
        {props.boxObj.color}
        <br/>
        <button onClick={() => props.deleteBox(props.boxIndex)}>delete box with index {props.boxIndex}</button>
    </div>
  )
}

export default Box