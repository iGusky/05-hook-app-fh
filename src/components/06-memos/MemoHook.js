import React, {useMemo, useState} from 'react'
import useCounter from '../../hooks/useCounter';
import '../02-useEffect/effects.css'
import { procesoPesado } from '../../helpers/procesoPesado.js';


export const MemoHook = () => {

  const { counter, increment } = useCounter(2000);
  const [show, setShow] = useState(true);
  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <div>
      <h1>Memo Hook</h1>
      <hr />
      <h3>Counter: <small> {counter} </small> </h3>

      <p> { memoProcesoPesado } </p>

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
