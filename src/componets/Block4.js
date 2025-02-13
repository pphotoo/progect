import React from 'react';
import {Container} from "react-bootstrap";

const Block4 = () => {
    return (
        <Container id={"block4"} className={'mt-5 mb-5'}>
            <h2 className={"text-start"}>Заключение</h2>
            <hr className={'mt-0 mb-4'}></hr>
            <div className={"white-text-block"} style={{backgroundImage: 'url("background.jpg")'}}>

                <div className={"text-start"}>
                   Решение экологических проблем Окницы требует химического анализа и внедрения современных технологий. Оптимизация работы транспорта, переход на чистые источники энергии и развитие переработки отходов помогут снизить уровень загрязнения. Эти меры требуют поддержки со стороны местных властей и активного участия населения. Экологические инвестиции – это залог устойчивого будущего региона.
                </div>

            </div>
        </Container>
    );
};

export default Block4;