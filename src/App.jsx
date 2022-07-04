import Plano from "./Plano";
import "./App.css"
import React from "react"
function App() {
const planos = [
  {
    link : "big-king.webp",
    title : "Combo Big King",
    info : "Um hambúrguer com duas carnes bovinas grelhadas de 57g, pão com gergelim e queijo...",
    serve: "Serve 1 pessoa",
    price : "R$41,90",

  },
  {
    link : "cheddar-duplo.webp",
    title : "Combo Cheddar Duplo",
    info : "Um hambúrguer com duas carnes bovinas grelhadas de 57g, Pão preto com gergelim, queijo...",
    serve: "Serve 1 pessoa",
    price : "R$ 41.90",

  },
  {
    link : "cheeseburger-duplo.webp",
    title : "Combo Cheeseburguer Duplo com Bacon",
    info : "Um hambúrguer com duas carnes bovinas grelhadas de 57g, pão com gergelim e queijo...",
    serve: "Serve 1 pessoa",
    price : "R$ 39.90",
  },
   {
    link : "mega-stacker.webp",
    title : "Combo Mega Stacker 2.0",
    info : "Um hambúrguer com duas carnes bovinas grelhadas de 113g, pão com gergelim e queijo...",
    serve: "Serve 1 pessoa",
    price : "R$ 51.90",

  }
];
return(
  <div className="cardPai">
    <img src="logo.svg" alt="" height={50} width={50} />
    <header className="cabecalho">entregador </header>
    <header>Restaurante e mercado</header>
    <header>carreiras</header>
    <header>iFood Card</header>
    <h1 className="top">Destaques</h1>
    {planos.map( (plano) =>{
        return <Plano imagem={plano.link} titulo={plano.title}
        infoBurguer={plano.info}
        servePessoas={plano.serve}
        preco={plano.price} />

    })}
  </div>
  
);
}

export default App;