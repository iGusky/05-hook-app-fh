import React from 'react'

  
  //* Al tocar el botón de "Show / Hide" el componente Small se vuleve a llamar (esto puede aumentar el consumo de datos del usuario).
  //* Para prevenir eso, se usa el Memorize en el componente small.
  //* Tomará una copia de el componenete en el estado actual y solo lo redibujará si algun estado o popertie cambia.

export const Small = React.memo(({value}) => {
  console.log('cambié!')
  return (
    <small>
      {value}
    </small>
  )
})
