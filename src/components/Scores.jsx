import React from "react";
import {useHistory} from "react-router-dom";

const Scores = (props) => {
  const history = useHistory();

  const persona = props.playerName;


  if (persona ==="") {
    history.push("/");
  }


  return (
    <>

    <div className="score">
      <h2 className="texto" >Scores</h2>

      {props.users.map((user) => (
          <div>
            <div className="rules">
              {user.tiempo > 1 && user.tiempo !== "" ? (
                <>
                  <h4>Jugador: {user.playerName}</h4>
                  <h4>Tiempo: {user.tiempo}</h4>
                </>
              ) : (
                <></>
              )}

            </div>
          </div>

        ))}

            <div className="otro">

            <button className="botonscore1" id="home" type="submit" onClick={handlerBoton}>
              Volver al Inicio
            </button>
            <button className="botonscore1" id="otroIntento" type="submit" onClick={handlerBoton2}>
              Jugar de nuevo
            </button>
            <button className="botonscore1" id="winners" type="submit" onClick={handlerBoton3}>
              Ver Tabla de Mejores Partidas
            </button>

            </div>
    </div>

    </>
 
  );

  function handlerBoton() {
    history.push("/");
  }
  function handlerBoton2() {
    history.push("/sudoku");
  }
  function handlerBoton3() {
    history.push("/winners");
  }
};

export default Scores;