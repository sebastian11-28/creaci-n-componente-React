import React, { useState } from 'react';
import './Contador.css'; // Importamos los estilos

const Contador = () => {
    const [cuenta, setCuenta] = useState(0);

    return (
        <div className="contador">
            <h2>Contador: {cuenta}</h2>
            <button onClick={() => setCuenta(cuenta + 1)}>Incrementar</button>
            <button onClick={() => setCuenta(cuenta - 1)}>Decrementar</button>
        </div>
    );
};

export default Contador;
