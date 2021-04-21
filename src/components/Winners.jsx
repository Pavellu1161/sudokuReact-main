import React from "react";
import { useHistory } from "react-router-dom";

const Scores = (props) => {
  const history = useHistory();

  const persona = props.playerName;

  if (persona ==="") {
    history.push("/");
  }

  return (
    <>
      <div className="score">
        <h2 className="texto" >Winners</h2>
        
        {props.users.map((user) => (
          <div>
            <div className="rules">
              {console.log({ user: props.users })}

              {user.menorTiempo <= 30 && user.menorTiempo !== "" ? (
                <>
                  <h4>Jugador: {user.playerName}</h4>
                  <h4>Mejor Tiempo: {user.menorTiempo}</h4>
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
        <button className="botonscore1" id="puntuaciones" type="submit" onClick={handlerBoton3}>
          Puntuaciones
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
  function handlerBoton3() {
    history.push("/scores");
  }
};

export default Scores;
