import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Raid.css';

function Raid({ chosenRaid, setChosenRaid }) {
    let raids = [
        "Naxx",
        "EoE",
        "VOA",
        "Sarthe",
        "Ulduar",
        "ToGC",
        "Onyxia"
        // "Icecrown Citadel",
        // "The Ruby Sanctum"
    ]

    const getRaid = (e) => {
        setChosenRaid(e.target.value);
    }

    return (
        <Container>
            <Row>
                <Col>
                    {
                        raids.map((raid) => {
                            return <Button onClick={(e) => { getRaid(e) }}
                                size='md'
                                className='raidButtons'
                                variant={
                                    raid === chosenRaid ? 'success' : 'outline-dark'
                                }
                                value={raid}
                                key={raid}>
                                {raid}
                            </Button>
                        })
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default Raid

// let raids = [
//     "Naxxramas",
//     "The Eye of Eternity",
//     "Vault of Archavon",
//     "Obsidian Sanctum",
//     "Ulduar",
//     "Trial of the Crusader",
//     "Onyxia’s Lair",
//     "Icecrown Citadel",
//     "The Ruby Sanctum"
// ]