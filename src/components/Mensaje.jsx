import React from 'react'
import { useState } from 'react'

const Mensaje = ({children, tipo}) => {
  return (
    <div className={`alerta ${tipo}`}>{children}</div>
    )
}

export default Mensaje