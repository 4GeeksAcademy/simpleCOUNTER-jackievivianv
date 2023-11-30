import React from "react";

const Boton = ({handlerStop}) => {
    return (
        <button className="btn btn-danger btn-lg m-3" onClick={handlerStop}>
            Stop
        </button>
    );

   
};


export default Boton;