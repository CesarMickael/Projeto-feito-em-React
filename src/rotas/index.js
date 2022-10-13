import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

import Homme from '../pages/home';
import Sabores from '../pages/sabores';
import Sobre from '../pages/sobre';

function Rota() {
    return (

        <div>

        <BrowserRouter>

            <Routes>

                <Route path="/" element={ <Homme /> } />
                <Route path="/sabores" element={ <Sabores /> } />
                <Route path="/sobre" element={ <Sobre /> } />


            </Routes>
        
        </BrowserRouter>



        </div>
    );
}

export default Rota;