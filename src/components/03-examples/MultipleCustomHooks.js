import React from 'react';
import useCounter from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './effects.css';

export const MultipleCustomHooks = () => {

  //Usaremos el hook useCounter (custom).
  const { counter, increment} = useCounter(1);
  //Se envia el url al hook useFetch (custom).
  const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  //Se valida si viene la nada, si es verdadero se extrae la información.
  const { author, quote } = !!data && data[0];

  
  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {
        // Uso de operador terniario...
        loading ? 
          (
            <div className="alert alert-info text-center">
              Loading...
            </div>
          )
        :
          (
            <>
            <blockquote className="blockquote text-right">
              <p className="mb-0">{ quote }</p>
              <footer className="blockquote-footer"> { author }</footer>
            </blockquote>

              <button 
                className = "btn, btn-primary"
                onClick= { () => increment() }
              >
                Siguiente frase
              </button>
            </>
          )
      }

   

    </>
  )
}
