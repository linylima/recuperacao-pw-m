import React from "react";
import HelloWorld from "./HelloWorld";
import Button from "./Button";
import SayName from "./SayName";
import Perfil from "./Perfil";
import "./App.css"
function App() {

  const lista_pessoas= [
    
    {

     nome:<b>STAR</b>,
    idade:"FREE 1  user  1 Project",
    },
    {
      nome:<b>Basic</b>,
      idade:"$19.99 5 Users 20 Projects",
    
    },
    {
      nome:<b>Expert</b>,
      idade:"$129.99 Unlimited Users Unlimited Projects",
      
    },
  ];
<HelloWorld />
  return(
    <div className="principal">
      
     
      { lista_pessoas.map( (pessoa) => {
        return <Perfil
        foto={pessoa.foto}
        nome={pessoa.nome}
        idade={pessoa.idade}
        />
      } ) }

    </div>
  );
}
export default App

