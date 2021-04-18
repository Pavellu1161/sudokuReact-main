import React from "react";
import { useHistory } from "react-router-dom";

const Scores = (props) => {
  const history = useHistory();

  return (
    <>
      <div className="score">

        <h2 className="texto">Scores</h2>

        {props.users.map((user) => (
          <div>
            <div className="rules">
              <h4>Jugador: {user.playerName}</h4>
              <h4>Tiempo: {user.tiempo}</h4>
            </div>
          </div>
        ))}

      <div className="otro">
        <button className="botonscore1" id="home" type="submit" onClick={handlerBoton}>
          Volver al Inicio
        </button>
        <button className="botonscore2" id="otroIntento" type="submit" onClick={handlerBoton2}>
          Jugar de nuevo
        </button>
      </div>

      </div>
     
    </>
  );

  function handlerBoton2() {
    history.push("/sudoku");
  }
  function handlerBoton() {
    history.push("/");
  }
};

export default Scores;
