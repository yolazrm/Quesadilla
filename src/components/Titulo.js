import React from "react";

const TituloRosa = () => {
    const name = "X";
    return(
        <h1 className="titulo" style={{colo: "pink"}}>
            Hola {name}
        </h1>
    );
};

const TituloNaranja = ({alumno, matricula, color}) => {
    return(
        <h1 className="titulo" style={{colo: color}}>
            Hola {alumno} con id {matricula}
        </h1>
    );
};
export {TituloRosa, TituloNaranja};
