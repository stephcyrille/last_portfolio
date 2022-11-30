import React from 'react'
import { Gauge } from '../gauge/Gauge';

export const LanguageLine = (props) => {
  const { language } = props;

  return (
    <>
      <div className='col-6'>
        <span className='programLanguage'>{language}</span>
      </div>
      <div className='col-6'>
        <Gauge />
      </div>
    </>
  )
}
