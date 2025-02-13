import React from 'react';
import {Container, Row} from "react-bootstrap";

function Footer(props) {
    return (
        <div className={"footer"}>
            <Container className={'text-center p-5'}>

                <Row className={"mb-2 d-flex"}>
                    <div className={"justify-content-center"}>
                        <img className={"w-25"} src={'logo.png'} alt="img5"/>
                    </div>

                </Row>
                <Row className={"mb-2"}>
                    <b>Автор:</b>
                    <div>
                        Полищук Александр
                    </div>

                </Row>
                <Row className={"mb-2"}>
                    <div>
                        Ученик 11-го "Б" класса
                    </div>

                </Row><Row className={"mb-2"}>
                    <div>
                        Т.Л. "Gheorghie Biruitorul"
                    </div>

                </Row>
                <Row className={"mb-2"}>
                    <div>
                       г. Окница
                    </div>

                </Row>
            </Container>
        </div>
    );
}

export default Footer;