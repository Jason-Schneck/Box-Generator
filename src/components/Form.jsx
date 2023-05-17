import React from 'react'
import {useState} from 'react';

const Form = (props) => {

    const [box, setBox] = useState("")

    const formSubmit = (e) => {
        e.preventDefault()

        const newBox = {
            box
        }

        props.updateColor(newBox)
    }
  return (
    <fieldset>
        <legend>Form.jsx</legend>
        {
            props.boxes.map((boxes) => {
                return (
                    <div>
                        <p
                            style={{display: "inline-block", backgroundColor: boxes.color, width:"50px", height:"50px" , border: "1px solid black"}}
                        >
                        </p>
                    </div>
                )
            })
        }
        <form onSubmit={formSubmit}>
            Color: <input onChange={(e) => setBox(e.target.value)} value={box}/>
            <button>add</button>
        </form>
        
    </fieldset>
  )
}

export default Form