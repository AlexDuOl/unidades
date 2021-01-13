import React from 'react';

const LocationGps = props => {
    const dataValues = props.dataParams.map((({ n, i, x, y, s, t}) => {
        return (
            <div className="ui card">
                <div className="content" key={i}>
                    <h1 className="header">Unidad: {n}</h1>
                    <div className="meta">
                    <span className="date">Identificador: {i}</span>
                    </div>
                    <div className="description">
                    Longitud: {x}
                    </div>
                    <div className="description">
                    Latitud: {y}
                    </div>
                    <div className="description">
                    Velocidad: {s}
                    </div>
                    <div className="description">
                    Tiempo: {t}
                    </div>
                </div>
            </div>
        )
    }));
 
    return <div>{dataValues}</div>
};

export default LocationGps;