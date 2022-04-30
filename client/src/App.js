import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import BandAdd from './components/BandAdd';
import BandList from './components/BandList';

const connectSocketServer = () => {
    const socket = io.connect('http://localhost:8080', {
        transports: ['websocket'],
    });

    return socket;
};

function App() {
    const [online, setOnline] = useState(false);
    const [socket, setSocket] = useState(connectSocketServer());
    const [bands, setBands] = useState([]);

    useEffect(() => {
        setOnline(socket.connected);
    }, [socket]);

    useEffect(() => {
        socket.on('connect', () => {
            setOnline(true);
        });
    }, [socket]);

    useEffect(() => {
        socket.on('disconnect', () => {
            setOnline(false);
        });
    }, [socket]);

    useEffect(() => {
        socket.on('current-bands', (data) => {
            setBands(data);
        });
    }, [socket]);

    const votar = (id) => {
        socket.emit('votar-banda', id);
    };

    const borrar = (id) => {
        socket.emit('borrar-banda', id);
    };

    const cambiarNombre = (id, newName) => {
        socket.emit('cambiar-nombre', { id, newName });
    };

    const agregarBanda = (name) => {
        socket.emit('agregar-banda', name);
    };

    return (
        <div className='container'>
            <div className='alert'>
                <p>
                    Service status:
                    {online ? (
                        <span className='text-success'>Online</span>
                    ) : (
                        <span className='text-danger'>Offline</span>
                    )}
                </p>
            </div>

            <h1>Band Names</h1>
            <hr />
            <div className='row'>
                <div className='col-8'>
                    <BandList data={bands} votar={votar} borrar={borrar} cambiarNombre={cambiarNombre} />
                </div>
                <div className='col-4'>
                    <BandAdd agregarBanda={agregarBanda} />
                </div>
            </div>
        </div>
    );
}

export default App;
