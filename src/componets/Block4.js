import React from 'react';
import {Container} from "react-bootstrap";

const Block4 = () => {
    return (
        <Container id={"block4"} className={'mt-5 '}>
            <h2 className={"text-start"}>Заключение</h2>
            <hr className={'mt-0 mb-4'}></hr>
            <div className={"white-text-block"} style={{backgroundImage: 'url("background.jpg")'}}>

                <div className={"text-start"}>
                    Решение экологических проблем Фрунзе возможно с помощью комплексного подхода, базирующегося на физических принципах.
                    Оптимизация транспорта, переход на чистые источники энергии и переработка отходов обеспечат снижение уровня загрязнения.
                    Эти меры требуют поддержки со стороны местных властей и активного участия населения.
                    Инвестиции в экологию — это инвестиции в будущее региона. Это решит экологические проблемы, на локальном уровне.
                </div>

            </div>
        </Container>
    );
};

export default Block4;