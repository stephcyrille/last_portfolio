import React from 'react'

export const Gauge = ({props}) => {
  // const { height, green, grey, start } = props
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      baseProfile="full"
      height="20"
      className='img-fluid'
    >
      <circle cx="10" cy="10" r="6" fill="green"/>
      <circle cx="30" cy="10" r="6" fill="green"/>
      <circle cx="50" cy="10" r="6" fill="green"/>
      <circle cx="70" cy="10" r="6" fill="green"/>
      <circle cx="90" cy="10" r="6" fill="green"/>
      <circle cx="110" cy="10" r="6" fill="green"/>
      <circle cx="130" cy="10" r="6" fill="grey"/>
    </svg>
  )
}
