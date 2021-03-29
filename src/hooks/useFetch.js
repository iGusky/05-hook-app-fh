import { useEffect, useRef, useState } from 'react'

export const useFetch = ( url ) => {
  
  // Se crea una referencia para saber si el componente está montado.
  const isMounted = useRef(true);
  const [state, setState] = useState({ data: null, loading: true, error: null});

  //Cuando el componente se desmonta (return) el useRef se vuelve falso.
  useEffect(() => {
    return () => {
      isMounted.current = false;
    }
  }, [])

  useEffect( () => {

    setState({ data: null, loading: true, error: null})

    fetch( url )
      .then( response => response.json())
      .then( data => {
        
        //Si es falso no se cambiará el estado.
        if(isMounted.current) { 
          setState({
            loading: false,
            error: null,
            data
          });
        }

      })
      .catch( () => {
          setState({
              data: null,
              loading: false,
              error: 'No se pudo cargar la data'
          });
      })
  }, [ url ]);

  return state;

}
