import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import Box from './components/Box';

function App() {

  const [boxes, setBoxes] = useState([
    {
      color: "red"
    },
    {
      color: "blue"
    },
    {
      color: "yellow"
    }
  ])

  const updateColor = (newColorObj) => {
    setBoxes([...boxes, newColorObj])
  }

  const deleteBox = (someBoxIndex) => {
    console.log("this is delete", someBoxIndex)

    const filteredBoxes = boxes.filter((eachElem, idx) => {
      if (idx === someBoxIndex){
        return false
      }else{
        return true
      }
    })
    console.log(filteredBoxes)
    setBoxes(filteredBoxes)
  }

  const addBox = (someInputFromForm) => {
    console.log("hello from App.js", someInputFromForm)

    const newBox = {
      color: someInputFromForm
    }

    const tempCopyState = [...boxes]

    tempCopyState.push(newBox)

    setBoxes(tempCopyState)
  }


  return (
    <fieldset>
      <legend>App.js</legend>
      <h1>Boxes 📦</h1>
      {
        JSON.stringify(boxes)
      }
      <hr/>
      <Form boxes={boxes} addBox={addBox} updateColor={updateColor} />
      {
        boxes.map((boxObj, i) => {
          return (
            <Box key={i} boxObj={boxObj} boxIndex={i} deleteBox={deleteBox}/>
          )
        })
      }
    </fieldset>
  );
}

export default App;
