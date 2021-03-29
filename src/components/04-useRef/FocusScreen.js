import React, { useRef } from 'react';
import '../02-useEffect/effects.css';

export const FocusScreen = () => {
  // Se inicializa el ref.
  const inputRef = useRef();

  const handleClick = () => {
    // Se maneja el ref.
    inputRef.current.select();
  };

  return (
    <div>
        <h1>Focus Screen</h1> 
        <hr />

        <input 
          // Se le asigna un ref.
          ref = { inputRef }
          className="form-control"
          placeholder = "Su nombre"
        />

        <button 
          className="btn btn-outline-primary mt-3"
          onClick = { handleClick }
        >
          Focus
        </button>
    </div>
  )
}
