import React from 'react';
import {Card, Col} from "react-bootstrap";

function MissionaryCard({img, title, text}) {
    return (
        <Col className={"mb-3"}>
            <Card className={"shadow flex-fill h-100"}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {text}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default MissionaryCard;