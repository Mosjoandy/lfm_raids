import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';


function Raid() {

    let raids = ["Naxxramas", "The Eye of Eternity", "Vault of Archavon", "Obsidian Sanctum", "Ulduar", "Trial of the Crusader", "Onyxia’s Lair", "Icecrown Citadel", "The Ruby Sanctum"]

    return (
        <Container>
            <Row>
                <Col>
                    {raids.map((raid) => { return <Button value={raid} key={raid}>{raid}</Button> })}
                </Col>
            </Row>
        </Container>
    );
};


export default Raid