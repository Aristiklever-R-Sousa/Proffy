import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/66843192?s=460&u=594b0455d29d1fa2f11377e0004064bc21028001&v=4" alt="Aristiklever Rodrigues Sousa"/>
                <div>
                    <strong>Aristiklever R. Sousa</strong>
                    <span>Matemática</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de química avançada.
                <br /><br />
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entre em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;