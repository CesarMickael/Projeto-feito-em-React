import React from 'react';
import './style.css';

import { Link } from 'react-router-dom';

import Banner from './banner/';
import Conteudo from './conteudo/';
import Rodape from './rodape/';


function Homme() {
    return (

        <body>

            <header>

                <div className='container-topo'>

                    <img src="./assets/logo.png" alt="logo"  className='logo'/>

                    <nav className='container-navegacao'>

                        <Link className='link-paginas' to='/'>Home</Link>
                        <Link className='link-paginas' to='/sabores'>Sabores</Link>
                        <Link className='link-paginas' to='/Sobre'>Sobre</Link>

                    </nav>

                </div>

            </header>

            <main>

                <Banner />

                <Conteudo />

            </main>

            <Rodape />

        </body> 

    );

}

export default Homme;