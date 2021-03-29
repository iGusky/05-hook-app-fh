import React, { useCallback, useState } from 'react';
import '../02-useEffect/effects.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHooks = () => {

    const [counter, setCounter] = useState( 10 )

    //Rregresa una version memorizada de esa función si la dependencia no ha cambiado
    const increment = useCallback((num) => {
        setCounter( c => c + num);
    },[ setCounter ])

    return (
        <div>
            <h1>useCallback Hook { counter } </h1>
            <hr />

            <ShowIncrement increment={increment}/>
        </div>
    )
}
