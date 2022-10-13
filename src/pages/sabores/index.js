import React from 'react';
import './style.css';

import Navegacao from '../home/navegacao';
import Rodape from '../home/rodape';

function Sabores() {
    return (

      <div className='container'>

          <Navegacao />

          <main>

            <section className='banner-sabores'>
              <img src='./assets/banner-sabores.jpg' alt='banner sabores' />
                <div className='title-sabores'>
                  <h1>NOSSOS SABORES</h1>
                </div>

            </section>

            <section className='container-sabores'>

              <h2>SABORES DE SORVETE</h2>

              <section className='container-card-sabores'>

                <div className='card-sabores'>

                  <img src='./assets/sabor-oreo.png' alt='sorvete oreo'/>

                    <h3>Sorvete de Oreo</h3>

                    <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>

                  </div>

                  <div className='card-sabores'>

                    <img src='./assets/sabor-pistache.png' alt='sorvete pistache'/>

                      <h3>Sorvete Pistache</h3>

                      <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>

                  </div>

                  <div className='card-sabores'>

                    <img src='./assets/sabor-cookies-avela.png' alt='sorvete cookie com avelã'/>

                      <h3>Sorvete Cookies & Avelã</h3>

                      <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>

                  </div>

                  <div className='card-sabores'>

                    <img src='./assets/sorbet-kiwi.png' alt='sorvete kiwi'/>

                      <h3>Sorvete de Kiwi</h3>

                      <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>

                  </div>

                  <div className='card-sabores'>

                    <img src='./assets/sorbet-morango.png' alt='sorvete de morango' />

                      <h3>Sorvete de Morango</h3>

                      <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>

                  </div>

                  <div className='card-sabores'>

                    <img src='./assets/sorbet-limao.png' alt='sorvete de limao'/>

                      <h3>Sorvete de Limão Siciliano</h3>

                      <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>

                  </div>
              </section>
            </section>

          </main>

        <Rodape />
      </div>

    );

}

export default Sabores;