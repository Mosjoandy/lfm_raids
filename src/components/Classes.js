import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Classes() {
    let classes = {
        Warrior: ["Prot", "DPS"],
        Warlock: ["DPS"],
        Shaman: ["Elemental", "Enhancement", "Resto"],
        Rogue: ["DPS"],
        Priest: ["DPS", "Heal"],
        Paladin: ["Holy", "Ret", "Prot"],
        Mage: ["DPS"],
        Hunter: ["DPS"],
        Druid: ["Balance", "Feral", "Resto"],
        Dk: ["Tank", "DPS"]
    }

    return (
        <Container>
            <Row>
                <Col>
                    {Object.keys(classes).map((specs) => {
                        return ([<h4>{specs}</h4>, classes[specs].map(spec => {
                            return (
                                <>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Checkbox aria-label="Checkbox for following text input" value={spec} /> {spec}
                                    </InputGroup>
                                </>
                            )
                        })]
                        )
                    })}

                </Col>
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