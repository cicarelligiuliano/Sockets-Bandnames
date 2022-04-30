import React, { useEffect, useState } from 'react';

const BandList = ({ data, votar, borrar, cambiarNombre }) => {
    const [bands, setBands] = useState(data);

    useEffect(() => {
        setBands(data);
    }, [data]);

    const cambioNombre = (event, id) => {
        const nuevoNombre = event.target.value;

        setBands((bands) =>
            bands.map((band) => {
                if (band.id === id) {
                    band.name = nuevoNombre;
                }
                return band;
            })
        );
    };

    const onPerdioFoco = (id, nombre) => {
        cambiarNombre(id, nombre);
    };

    const crearRows = () => {
        return bands.map((band) => {
            return (
                <tr key={band.id}>
                    <td>
                        <button
                            className='btn btn-primary'
                            onClick={() => {
                                votar(band.id);
                            }}
                        >
                            +1
                        </button>
                    </td>
                    <td>
                        <input
                            type='text'
                            className='form-control'
                            value={band.name}
                            onChange={(event) => cambioNombre(event, band.id)}
                            onBlur={() => onPerdioFoco(band.id, band.name)}
                        />
                    </td>
                    <td>
                        <h3>{band.votes}</h3>
                    </td>
                    <td>
                        <button className='btn btn-danger' onClick={() => borrar(band.id)}>
                            Borrar
                        </button>
                    </td>
                </tr>
            );
        });
    };

    return (
        <>
            <table className='table table-stripped'>
                <thead>
                    <tr>
                        <th></th>
                        <th>Nombre</th>
                        <th>Votos</th>
                        <th>Borrar</th>
                    </tr>
                </thead>
                <tbody>{crearRows()}</tbody>
            </table>
        </>
    );
};

export default BandList;
