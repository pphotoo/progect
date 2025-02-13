import React from 'react';
import {Accordion, Card, Container, Row} from "react-bootstrap";
import MissionaryCard from "./MissionaryCard";

const Block2 = () => {

    return (
        <Container id={"block2"} className={'mt-5'}>
            <h2>2. Загрязнение воздуха в отопительный период</h2>
            <hr className={'mt-0 mb-4'}></hr>
            <h5>Химия проблемы:</h5>
            <Row xs={1} md={2} lg={2} className={"d-flex flex-wrap"}>
                <div>
                    <img className={"w-100"} src={'img5.jpg'} alt="img5"/>
                </div>
                <div>
                    <p>
                       Химия проблемы: Сжигание угля, дров и других органических материалов приводит к выбросам угарного газа (CO), сернистого ангидрида (SO₂) и летучих органических соединений (ЛОС). SO₂ в атмосфере реагирует с водой, образуя серную кислоту (H₂SO₄), что приводит к выпадению кислотных осадков.
                    </p>
                    <h5>1) Экологические последствия:</h5>
                    <ul>
                        <li>
                            Слабая дисперсия: Холодный дым поднимается плохо,
                            концентрируясь у земли. Это приводит к локальному
                            загрязнению воздуха, особенно в безветренные дни.
                        </li>
                        <li>
                            Кислотные аэрозоли: Содержащиеся в дыме сернистые
                            соединения конденсируются, что увеличивает образование
                            туманов и кислотного осадка.
                        </li>
                    </ul>
                    <h5>2) Влияние на оборудование:</h5>
                    <ul>
                        <li>
                            Отложения в дымоходах: Конденсация водяного пара и дегтя
                            приводит к накоплению отложений, что увеличивает риск
                            коррозии и снижает тягу.
                        </li>

                    </ul>
                </div>


            </Row>
            <h5>Решения:</h5>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h5>1) Переход на электрическое или газовое отопление.</h5></Accordion.Header>
                    <Accordion.Body>
                        <Card>
                            <Card.Body>
                                <Card.Text>
                                    Переход на газовое или электрическое отопление, которое значительно снижает выбросы вредных веществ.
                                </Card.Text>
                            </Card.Body>
                            <Card.Img variant="top" src="img6.jpg" />
                        </Card>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h5>2) Установка солнечных панелей и ветровых генераторов.</h5></Accordion.Header>
                    <Accordion.Body>
                        <Card>
                            <Card.Body>
                                <Card.Text>
                                    Внедрение возобновляемых источников энергии (солнечные панели, ветровые генераторы), минимизирующих загрязнение.
                                </Card.Text>
                            </Card.Body>
                            <Card.Img variant="top" src="img7.jpg" />
                        </Card>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </Container>
    );
};

export default Block2;