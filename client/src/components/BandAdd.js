import React, { useState } from 'react';

const BandAdd = ({ agregarBanda }) => {
    const [valor, setValor] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (valor.trim().length > 0) {
            agregarBanda(valor);
            setValor('');
        }
    };

    const handleChange = (e) => {
        setValor(e.target.value);
    };

    return (
        <>
            <h3>Agregar Banda</h3>
            <form action='' onSubmit={onSubmit}>
                <input
                    type='text'
                    className='form-control'
                    placeholder='Band name...'
                    value={valor}
                    onChange={handleChange}
                />
            </form>
        </>
    );
};

export default BandAdd;
