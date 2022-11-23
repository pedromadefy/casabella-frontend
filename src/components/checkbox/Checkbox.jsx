import React, { Children } from 'react'

export default function Checkbox(type, name, id, checked) {
  return (
    <>
    <input type={type} name={name} id={id} />
    <label >
        {Children}
    </label>
    </>
  )
}
