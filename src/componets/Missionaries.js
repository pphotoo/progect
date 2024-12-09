import React from 'react';
import {Container, Row} from "react-bootstrap";
import MissionaryCard from "./MissionaryCard";

function Missionaries(props) {
    const missionaries = [
        {
            img:"missioner1.jpg",
            title:"",
            text:"Переход на электромобили или гибриды.\n" +
                "Электродвигатели имеют КПД около 90%, что значительно снижает энергопотери и устраняет выбросы углекислого газа на местном уровне.\n"
        },
        {
            img:"missioner2.jpg",
            title:"",
            text:"Установка сажевых фильтров.\n" +
                "Эти устройства улавливают твердые частицы в выхлопных газах, снижая их концентрацию в воздухе\n"
        },
        {
            img:"missioner3.jpg",
            title:"",
            text:"tИспользование каталитических конвертеров.\n" +
                "Катализаторы способствуют разложению токсичных газов (CO и NOₓ) на безопасные компоненты (CO₂, H₂O и N₂). Несмотря на некоторое снижение КПД двигателя, это уменьшает загрязнение.\n"
        }
    ]
    return (
        <Container id={"missionaries"} className={'mt-5 '}>
            <h2>1. Выхлопные газы транспорта</h2>
            <hr className={'mt-0 mb-4'}></hr>
            <Row xs={1} md={2} lg={2} className={"d-flex flex-wrap"}>
                <p>
                    Физика проблемы: КПД (коэффициент полезного действия) среднестатистического транспорта
                    составляет всего 20–35%, что означает значительные потери энергии. Эти потери проявляются в
                    виде тепла, шума и выхлопных газов, которые содержат углекислый газ (CO₂), оксиды азота (NOₓ),
                    углеводороды и мелкодисперсные частицы. Данные газы ухудшают качество воздуха, создавая эффект
                    парникового загрязнения, и влияют на здоровье населения.
                </p>
                <div>
                    <img className={"w-100"} src={'img4.jpg'} alt="img4"/>
                </div>

            </Row>
            <h5>Решения:</h5>
            <Row xs={1} md={2} lg={3} className={"d-flex flex-wrap"}>
                {missionaries.map(el => (
                    <MissionaryCard
                        img={el.img}
                        title={el.title}
                        text={el.text}
                    />
                ))
                }

            </Row>

        </Container>

    );
}

export default Missionaries;