import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Classes({neededClasses,setNeededClasses}) {
    let classes = {
        Warrior: ["Prot", "DPS"],
        Warlock: ["DPS"],
        Shaman: ["Ele", "Enhance", "Resto"],
        Rogue: ["DPS"],
        Priest: ["DPS", "Heal"],
        Paladin: ["Holy", "Ret", "Prot"],
        Mage: ["DPS"],
        Hunter: ["DPS"],
        Druid: ["Balance", "Feral", "Resto"],
        Dk: ["Tank", "DPS"]
    }


    const getClass = (e) =>{
        const classSpec = e.target.value.split('/') //takes value from checkbox and splits it into Class and Spec ['Paladin', 'Holy']
       //checks if class is in selected classes
      
        if(neededClasses[classSpec[0]].includes(classSpec[1])){
            //removes if class is already in selected           
            setNeededClasses(prevState => ({
                ...prevState,
                [classSpec[0]] :  prevState[classSpec[0]].filter((items) =>items !== classSpec[1])
            }))
                //console.log(neededClasses)
        }else{
            //adds if class is not selected.
            setNeededClasses(prevState => ({
                ...prevState,
                [classSpec[0]] : [...prevState[classSpec[0]], classSpec[1]]
            }))
        //console.log(neededClasses)
        }
    }

    return (
        <Container>
            <Row>
                
                    {Object.keys(classes).map((specs) => {
                        return ([<Col xs={3} key={specs} className='mb-1'><h6>{specs}</h6> { classes[specs].map(spec => {
                            return (
                                <div key={spec}>
                                    <InputGroup size='sm' className="mb-1">
                                        <InputGroup.Checkbox onClick={(e)=>{getClass(e)}} size='sm' aria-label="Checkbox for following text input" value={specs+ '/' + spec} /> {spec}
                                    </InputGroup>
                                </div>
                            )
                        })}</Col>]
                        )
                    })}

                
            </Row>
        </Container>
    );
};


export default Classes


// let classes = {
//     Warrior: ["Arms", "Fury", "Prot"],
//     Warlock: ["Affliction", "Demonology", "Destruction"],
//     Shaman: ["Elemental", "Enhancement", "Restoration"],
//     Rogue: ["Assassination", "Combat", "Subtlety"],
//     Priest: ["Discipline", "Holy", "Shadow"],
//     Paladin: ["Holy", "Retribution", "Protection"],
//     Mage: ["Arcane", "Fire", "Frost"],
//     Hunter: ["Marksmanship", "Beast Mastery", "Survival"],
//     Druid: ["Balance", "Feral", "Resto"],
//     Dk: ["Blood", "Frost", "Unholy"]