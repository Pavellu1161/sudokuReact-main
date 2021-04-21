import React from "react";
import { useHistory } from "react-router-dom";

const Home = (props) => {
  const history = useHistory();

  const persona = props.playerName;

  if (persona ==="") {
    history.push("/");
  }


  return (
    <div className="homeInformacion">
      
      <h2 className="texto"> Jugador : {props.playerName}</h2>

      <div className="contenedor">

      <p className="elegir" >Elija una opcion:</p>

      <button className="boton1" type="submit" onClick={HandleBoton1}>
        Iniciar Sudoku
      </button>
      
      <button className="boton2" type="submit" onClick={HandleBoton2}>
        Ver Scores
      </button>

      <button className="boton3" type="submit" onClick={HandleBoton3}>
       Iniciar con nuevo Jugador
      </button>

      </div>
      
    </div>

    );

  function HandleBoton1() {
    history.push("/sudoku");
  }
  function HandleBoton2() {
    history.push("/scores");
  }
  function HandleBoton3() {
    history.push("/");
  }

};

export default Home;
