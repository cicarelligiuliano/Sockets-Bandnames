import React, { useContext, useState } from 'react';
import { SocketContext } from '../context/SocketContext';

const BandAdd = () => {
    const [valor, setValor] = useState('');
    const { socket } = useContext(SocketContext);

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

    const agregarBanda = (name) => {
        socket.emit('agregar-banda', name);
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
