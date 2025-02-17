import React from 'react';
import {Container} from "react-bootstrap";

function TextBlock(props) {
    return (
        <Container className={'mt-5 '}>
            <div className={"green-text-block"} style={{backgroundImage: 'url("background.jpg")'}}>
                <h1 className={"pt-5 mb-0"}>Проблемы экологического загрязнения в городе Окница и пути их решения: химический подход</h1>
                <p className={"p-lg-5 p-sm-3"}>
                    Современные экологические проблемы требуют внимания как на глобальном, так и на локальном уровнях. Окница, небольшой город в Молдове, сталкивается с рядом экологических вызовов, таких как загрязнение воздуха от транспорта и отопления, а также проблемы с отходами и дорогами. Эти явления можно рассмотреть с химической точки зрения, анализируя состав вредных веществ, их химические реакции в окружающей среде и предлагая эффективные решения.
                </p>
            </div>
        </Container>
    );
}

export default TextBlock;