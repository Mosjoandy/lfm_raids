import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Raid.css';

function Raid({ chosenRaid, 
                setChosenRaid,
                chosenRaidDifficulty, 
                setChosenRaidDifficulty, 
                chosenRaidAmount, 
                setChosenRaidAmount}) {
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

    let raidAmount = ["10m", "25m"]
    let raidDifficulty = ["Norm", "Heroic"]

    const getRaid = (e) => {
        setChosenRaid(e.target.value);
    }
    const getRaidAmount = (e) => {
        setChosenRaidAmount(e.target.value);
    }
    const getRaidDifficulty = (e) => {
        setChosenRaidDifficulty(e.target.value);
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
            <Row>
                <Col>
                <h5>Amount</h5>
                    {
                        raidAmount.map((amount) => {
                            return <Button onClick={(e) => { getRaidAmount(e) }}
                                size='md'
                                className='raidButtons'
                                variant={
                                    amount === chosenRaidAmount ? 'success' : 'outline-dark'
                                }
                                value={amount}
                                key={amount}>
                                {amount}
                            </Button>
                        })
                    }
                </Col>
                <Col>
                <h5>Difficulty</h5>
                    {
                        raidDifficulty.map((difficulty) => {
                            return <Button onClick={(e) => { getRaidDifficulty(e) }}
                                size='md'
                                className='raidButtons'
                                variant={
                                    difficulty === chosenRaidDifficulty ? 'success' : 'outline-dark'
                                }
                                value={difficulty}
                                key={difficulty}>
                                {difficulty}
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