import React from 'react';
import {Container} from "react-bootstrap";

function AboutUs(props) {
    return (
        <Container id={"about-us"} className={'mt-5 '}>
            <h2 className={"text-start"}>3. Плохие дороги</h2>
            <hr className={'mt-0 mb-4'}></hr>
            <div className={"white-text-block"} style={{backgroundImage: 'url("background.jpg")'}}>
                <h5 className={"text-start mb-0"}>Химия проблемы:</h5>
                <div className={"text-start"}>
                   Химия проблемы: Поврежденные дороги способствуют увеличению пылевого загрязнения. Улучшение качества дорог также поможет в утилизации пластика, если использовать переработанные материалы в дорожном покрытии. Пыль содержит тяжелые металлы (Pb, Cd, Zn), которые попадают в воздух и оседают в почве, ухудшая её состав.

                </div>
                <h5 className={"mt-0 text-start mb-0"}>Решения:</h5>
                <p className={"text-start"}>
                    1) Использование асфальтовых смесей с добавлением переработанных полимеров, что увеличивает прочность покрытия и снижает образование пыли.  2)Применение экологически безопасных реагентов для борьбы с ледяной коркой зимой вместо солей, которые разрушают дорожное покрытие и загрязняют почву.
                </p>
            </div>
        </Container>
    );
}

export default AboutUs;