import React from "react";
import './style.css';

import { Link } from 'react-router-dom';

function Navegacao() {
    return (

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
    );
}

export default Navegacao;