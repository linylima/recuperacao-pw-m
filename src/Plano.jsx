import Button from "./Button";
import React from "react";
import "./Plano.css";

function Plano({imagem, titulo, infoBurguer, servePessoas, preco}){
    return(
        <div  className="plano-container">
            <img src={imagem} alt="" width={"200px"} />
            <h3 className="plano-titulo">{titulo}</h3>
            <p className="plano-info">{infoBurguer}</p>
            <p className="plano-info">{servePessoas}</p>
            <h3 className="plano-preco">{preco}</h3>
            <Button/>
        </div>
    );
}
export default Plano;