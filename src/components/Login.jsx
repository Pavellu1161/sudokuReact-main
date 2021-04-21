import React from "react";
import {  useHistory } from "react-router-dom";

const Login = (props) => {
  const [playerName, setPlayerName] = React.useState("");
  const history = useHistory();
  return (
    <div className="login">
      
      <h3 className="bienvenida" >Bienvenido </h3>

      <div className="rules">
        <p className="rules1">Reglas del Juego:</p>
        <p>Regla 1: Se debe completar las casillas vacías con un solo número del 1 al 9.</p>
        <p>Regla 2: En la misma fila no puede tener números repetidos.</p>
        <p>Regla 3: En la misma columna no puede tener números repetidos.</p>
        <p>Regla 4: En una misma región no pueden existir números repetidos.</p>
      </div>

      <div className="registro">
        <label class ="name" >Nombre: </label>
        <input
          id = "Nombreusuario"
          class="caja"
          value={playerName}
          required
          onChange={handleInputChange}
          type="text"
          placeholder="Ingrese su nombre para iniciar"
        ></input>
        <br/>
        <button class="boton" type="submit" onClick={controlHandleSubmit}>
          Empezar
        </button>
      </div>

    </div>
  );

  function controlHandleSubmit(e) {

    const Nombre = playerName;

    if(Nombre === ''){
      alert("El campo esta vacío");
    }else{
    
    e.preventDefault();
    props.setUsers([...props.users, { playerName, tiempo: 0 }]);
    props.setPlayerName(playerName);
    
    setPlayerName("");
    history.push("/home");

    }

  }

  function handleInputChange(e) {
    setPlayerName(e.target.value);
  }

};

export default Login;
