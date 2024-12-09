import React from 'react';
import {Accordion, Card, Container, Row} from "react-bootstrap";
import MissionaryCard from "./MissionaryCard";

const Block2 = () => {

    return (
        <Container id={"block2"} className={'mt-5'}>
            <h2>2. Загрязнение воздуха в отопительный период</h2>
            <hr className={'mt-0 mb-4'}></hr>
            <h5>Физика проблемы:</h5>
            <Row xs={1} md={2} lg={2} className={"d-flex flex-wrap"}>
                <div>
                    <img className={"w-100"} src={'img5.jpg'} alt="img5"/>
                </div>
                <div>
                    <p>
                        Физика проблемы: КПД (коэффициент полезного действия) среднестатистического транспорта
                        составляет всего 20–35%, что означает значительные потери энергии. Эти потери проявляются в
                        виде тепла, шума и выхлопных газов, которые содержат углекислый газ (CO₂), оксиды азота (NOₓ),
                        углеводороды и мелкодисперсные частицы. Данные газы ухудшают качество воздуха, создавая эффект
                        парникового загрязнения, и влияют на здоровье населения.
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
                                    Газовые котлы имеют высокий КПД (до 95%) и выделяют меньше вредных веществ.
                                </Card.Text>
                            </Card.Body>
                            <Card.Img variant="top" src="img6.jpg" />
                        </Card>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h5>2) Установка солнечных панелей и ветровых генераторов</h5></Accordion.Header>
                    <Accordion.Body>
                        <Card>
                            <Card.Body>
                                <Card.Text>
                                    Использование возобновляемых источников энергии минимизирует зависимость от углеродных видов топлива.
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