// Botao.jsx
import React from 'react';

const Botao = ({ texto, onClick, className }) => {
    return (
        <button className={className} onClick={onClick}>
            {texto}
        </button>
    );
};

export default Botao;
