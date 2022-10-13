import React from 'react';

import './style.css';

function Rodape() {
    return (

    <div className='container-rodape'>

            <footer>

                    <img src="./assets/logo.png" alt="logo" className='logo'/>

                    <div className='card-rodape'>

                        <h5>ENDEREÇO</h5>
                        
                        <p>
                            Av. Bernardino de Campos, 98
                        </p>

                        <p>
                            São Paulo, SP 12345-678
                        </p>

                    </div>

                    <div className='card-rodape'>

                        <h5>CONTATO</h5>

                        <p>
                            info@meusite.com
                        </p>

                        <p>
                            Tel: (11) 3456-7890
                        </p>

                    </div>

                    <div className='card-rodape'>

                        <h5>HORÁRIOS</h5>

                        <p>
                            ABERTO TODOS OS DIAS
                        </p>

                        <p>
                            10:00 - 22:00
                        </p>

                    </div>
                
            </footer>

            <p className='text-rodape'>
                Gelateria. Orgulhosamente desenvolvido por "nome do desenvolvedor"
            </p>


        </div>
    )
}

export default Rodape;