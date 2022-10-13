import React from 'react';
import './style.css';

import Rodape from '../home/rodape';
import Navegacao from '../home/navegacao';


function Sobre() {
    return (

        <body>

            <Navegacao />

            <main>

                <section className='banner-sobre'>

                    <img src='./assets/banner-sobre.png' alt='Sorvete'/>

                    <div className='title-sobre'>
                        <h1>A GELATERIA</h1>
                    </div>
                </section>
                
                <section className='corpo-sobre'>

                    <h2 className='subtitle-sobre'>Sobre Nós</h2>

                    <h3>Nós simplesmente amamos sorvete!</h3>

                    <p className='primeiro-texto'>
                        Somos uma empresa apaixonada pelo que faz. Colocamos amor 
                        em cada sorvete produzido. Fazemos o melhor sorvete para os nossos 
                        clientes e gostamos de receber elogios. Estamos operando desde 2009 
                        com as melhores matérias-primas para a produção final do sorvete. 
                        Vendemos tanto para varejo como para atacado.
                    </p>

                    <p className='segundo-texto'>
                        Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja 
                        ou levar para sua residência e aproveitar junto com a família. Também vendemos 
                        para estabelecimentos e criamos eventos como festa de aniversário, formaturas e 
                        eventos empresariais. Para contratar os nossos serviços, basta entrar em contato 
                        conosco. Iremos proporcionar o melhor atendimento e os melhores produtos para 
                        você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.
                    </p>
                </section>

                <section className="galeria-sobre">
                    
                    <img src='./assets/sobre-image.jpg' alt='estabelecimento sorveteria'/>
                    <img src='./assets/sorveteria.jpg' alt='estabelecimento sorveteria'/>

                </section>

                
            </main>

            <Rodape />

        </body>

    );

}

export default Sobre;