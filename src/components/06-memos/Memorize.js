import React, {useState} from 'react'
import useCounter from '../../hooks/useCounter';
import '../02-useEffect/effects.css'
import { Small } from './Small';

export const Memorize = () => {

  const { counter, increment } = useCounter();
  const [show, setShow] = useState(true)
  
  //* Al tocar el botón de "Show / Hide" el componente Small se vuleve a llamar (esto puede aumentar el consumo de datos del usuario).
  //* Para prevenir eso, se usa el Memorize en el componente small.
  //* Tomará una copia de el componenete en el estado actual y solo lo redibujará si algun estado o pop cambia.

  return (
    <div>
      <h1>Memorize</h1>
      <hr />
      <p>Counter: <Small value={counter} /> </p>
      <button
        className="btn btn-primary"
        onClick={ () => {
          increment()}} >
        +1
      </button>

      <button 
        className="btn btn-outline-primary ml-5"
        onClick = { () => {
          setShow( !show );
        }}>
          Show / Hide { JSON.stringify( show )}
        </button>

    </div>  
  )
}
