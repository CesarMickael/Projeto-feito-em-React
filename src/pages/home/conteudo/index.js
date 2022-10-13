import React from 'react';

import './style.css';


function Conteudo() {
    return (
        <div className="container">

            <section className='container-conteudo'>

                <img src='./assets/banner-sabores.jpg' alt="Sorvetes" />

                <div className='container-card'>
                    <div className='container-text'>
                        <h3>Nossos sabores</h3>
                        <h4>Novos e deliciosos!</h4>

                        <p>Sorvete bom é aquele feito com os melhores ingredientes! 
                            Aqui na gelateria todos os nossos produtos são naturais, à base de 
                            frutas e sem nenhum conservante! Também temos opções sem lactose e sem 
                            açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e 
                            saudável ao mesmo tempo!
                        </p>
                    </div>

                </div>

                <div className='container-card container-card3'>

                    <div className='container-text'>

                        <h3>NOSSOS EVENTOS</h3>
                        <h4>Delicias com sorvete!</h4>

                        <p>
                            Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos
                            para te atender e oferecer os melhores eventos com os melhores sorvete da 
                            sua vida! Venha nos conhecer e passar um tempo aqui com a gente.
                        </p>
                    </div>

                </div>

                <img className="container-image4" src="./assets/eventos-image.jpg" alt="mesa decorativa" />

                <img src="./assets/sobre-image.jpg" alt="grupo de pessoas" />

                <div className='container-card'>

                    <div className='container-text'>

                        <h3>SOBRE NÓS</h3>
                        <h4>Alegria em cada casquinha!</h4>

                        <p>
                            Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado 
                            produzindo o que tem de melhor para o 	nosso cliente e você não pode ficar fora dessa. 
                            Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.
                        </p>

                    </div>

                </div> 

            </section>



        </div>
    )
}

export default Conteudo;