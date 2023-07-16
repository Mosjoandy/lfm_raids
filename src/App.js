import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Topper from './components/Topper.js';
import Raid from './components/Raid.js';
import Classes from './components/Classes.js';
import { useState, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';

function App() {
  const [chosenRaid, setChosenRaid] = useState("");
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

  return (
    <div>
      <Topper />
      <Row>
        <Col>
          <Raid chosenRaid={chosenRaid} setChosenRaid={setChosenRaid} />
        </Col>
        <Col>
          <Classes neededClasses={neededClasses} setNeededClasses={setNeededClasses} />
        </Col>
      </Row>
      <div>
        <h1>LFM {chosenRaid} {Object.keys(neededClasses).map((classSpecs) => {

          return neededClasses[classSpecs].length < 1 ? '' : [
            classSpecs, " (", neededClasses[classSpecs].map((classSpec) => {
              return (classSpec)
            })
            , "), "]
        })}

        </h1>
      </div>
    </div>
  );
};

export default App;
