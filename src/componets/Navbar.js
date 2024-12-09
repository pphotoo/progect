import React from 'react';
import {Container, Nav, Navbar as NavbarBS} from 'react-bootstrap';



function Navbar() {
    return (
        <NavbarBS expand="lg" className="fixed-top bg-body-tertiary shadow z-1">
            <Container>
                <NavbarBS.Brand className={'col-md-2 col-6'} href="">
                    <img className={'w-50'} src={'logo.png'} alt="logo" />
                </NavbarBS.Brand>
                <NavbarBS.Toggle aria-controls="basic-navbar-nav" />
                <NavbarBS.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Введение</Nav.Link>
                        <Nav.Link href="#missionaries">Выхлопные газы транспорта</Nav.Link>
                        <Nav.Link href="#block2">Загрязнение воздуха в отопительный период</Nav.Link>
                        <Nav.Link href="#about-us">Плохие дороги</Nav.Link>
                        <Nav.Link href="#block3">Свалки трудноразлагаемых отходов</Nav.Link>
                        <Nav.Link href="#block4">Заключение</Nav.Link>
                    </Nav>

                </NavbarBS.Collapse>
            </Container>
        </NavbarBS>
    );
}

export default Navbar;