import { useLayoutEffect, useRef } from 'react';
import useCounter from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';

export const Layout = () => {

  //Usaremos el hook useCounter (custom).
  const { counter, increment} = useCounter(1);
  //Se envia el url al hook useFetch (custom).
  const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  //Se valida si viene la nada, si es verdadero se extrae la información.
  const { quote } = !!data && data[0];


  const quoteRef = useRef();

  useLayoutEffect(() => {
      console.log(quoteRef.current.getBoundingClientRect());
  }, [quote]);

  
  return (
    <>
      <h1>Layout Effect</h1>
      <hr />
      <blockquote className="blockquote text-right">
        <p 
          ref={quoteRef} 
          className="mb-0"
        >{ quote }</p>
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
