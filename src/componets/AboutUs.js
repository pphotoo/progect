import React from 'react';
import {Container} from "react-bootstrap";

function AboutUs(props) {
    return (
        <Container id={"about-us"} className={'mt-5 '}>
            <h2 className={"text-start"}>3. Плохие дороги</h2>
            <hr className={'mt-0 mb-4'}></hr>
            <div className={"white-text-block"} style={{backgroundImage: 'url("background.jpg")'}}>
                <h5 className={"text-start mb-0"}>Физика проблемы:</h5>
                <div className={"text-start"}>
                    Поврежденные дороги увеличивают сопротивление качению автомобилей,
                    что приводит к большему потреблению топлива.
                    Более того, разрушенные дороги способствуют повышению выбросов пыли и частиц из-под колес.

                </div>
                <h5 className={"mt-0 text-start mb-0"}>Решения:</h5>
                <p className={"text-start"}>
                    Переработка пластиковых отходов в дорожное покрытие.
                    Добавление переработанного пластика в асфальт повышает
                    его прочность, устойчивость к температурным изменениям и
                    долговечность. Этот материал также легче перерабатывается после износа.
                </p>
            </div>
        </Container>
    );
}

export default AboutUs;