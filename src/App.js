import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Topper from './components/Topper.js';
import Raid from './components/Raid.js';
import Classes from './components/Classes.js';
import { useState, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';

function App() {
  const [chosenRaid, setChosenRaid] = useState("");
  const [chosenRaidAmount, setChosenRaidAmount] = useState("10m");
  const [chosenRaidDifficulty, setChosenRaidDifficulty] = useState("Norm");
  const [neededClasses, setNeededClasses] = useState({
    Warr: ["Prot", "DPS"], 
        Lock: ["DPS"],
        Shaman: ["Ele", "Enhance", "Resto"],
        Rogue: ["DPS"],
        Priest: ["Spriest", "Heal"],
        Pal: ["Holy", "Ret", "Prot"],
        Mage: ["DPS"],
        Hunter: ["DPS"],
        Druid: ["Balance", "Feral", "Resto"],
        Dk: ["Tank", "DPS"]
  });

  const copyText = () =>{
    const text = document.querySelector('.copyThis').innerHTML
    navigator.clipboard.writeText(text);
  }

  return (
    <div>
      <Topper />
      <Row>
        <Col>
          <Raid chosenRaid={chosenRaid} 
                setChosenRaid={setChosenRaid} 
                chosenRaidAmount={chosenRaidAmount} 
                setChosenRaidAmount={setChosenRaidAmount}
                chosenRaidDifficulty={chosenRaidDifficulty} 
                setChosenRaidDifficulty={setChosenRaidDifficulty}/>
        </Col>
        <Col>
          <Classes neededClasses={neededClasses} setNeededClasses={setNeededClasses} />
        </Col>
      </Row>
      <div>
        <h1 className='copyThis'>LFM {chosenRaid} {'[' + chosenRaidAmount + ']'} {'[' + chosenRaidDifficulty + ']'} 
        {Object.keys(neededClasses).map((classSpecs) => {

          return neededClasses[classSpecs].length < 1 ? '' : 
          //checks if it's the first in the object
          [ neededClasses[classSpecs].length  < 1 
          //checks if the class/spec before it has anything, it will not put comma is it doesnt.
          // || Object.keys(neededClasses)[Object.keys(neededClasses).length - Object.keys(neededClasses).length] !== classSpecs ? (neededClasses[Object.keys(neededClasses)[(Object.keys(neededClasses).indexOf(classSpecs)-1)]].length < 1 ? '' : ',') : false //console.log(Object.keys(neededClasses)[Object.keys(neededClasses).length - Object.keys(neededClasses).length])
          // //Object.keys(neededClasses)[(Object.keys(neededClasses).indexOf(classSpecs)-1) === Object.keys(neededClasses)[Object.keys(neededClasses).length - Object.keys(neededClasses).length]] ? 'true' : "false"
          || Object.keys(neededClasses)[Object.keys(neededClasses).length - Object.keys(neededClasses).length] === classSpecs ? "" : ", ",
            
          classSpecs, " (", neededClasses[classSpecs].map((classSpec) => {
              return [classSpec, neededClasses[classSpecs][neededClasses[classSpecs].length -1] === classSpec ? "" : "/"]
            })
            , ")" ]
        })}

        </h1>
        <Button onClick={()=>{copyText()}}>Copy to Clipboard</Button>
      </div>
    </div>
  );
};

export default App;
