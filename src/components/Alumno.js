import React from "react";
//import Titulo from "./Titulo";
import { TituloRosa, TituloNaranja } from "./Titulo";

const Alumno = () => {
    const apellido = "";
    const alumnos = ["X1", "X2", "X3"];
    return(
        <>
            <TituloRosa alumno="Yoli" matricula="189219" color="lila"/>
            {apellido && <p>Tu apellido es: </p>}

            <h3>Lista de alumnos</h3>
            <ul>
                {alumnos.map((nombre,i) => {
                    return <li key={i}>{nombre}</li>;
                })}
            </ul>
        </>
    );
};

export default Alumno;