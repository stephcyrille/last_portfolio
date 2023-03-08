import React from 'react';
import { CircularProgressbar, buildStyles  } from "react-circular-progressbar";

export const CircularProgress = (props) => {
  let { percent, text } = props
  return (
    <>
      <CircularProgressbar 
        value={percent} 
        text={`${percent}`} 
        styles={buildStyles({
          // Rotation of path and trail, in number of turns (0-1)
          rotation: 0.25,
      
          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
          strokeLinecap: 'butt',
      
          // Text size
          textSize: '13px',
      
          // How long animation takes to go from one percentage to another, in seconds
          pathTransitionDuration: 0.5,
      
          // Can specify path transition in more detail, or remove it entirely
          // pathTransition: 'none',
      
          // Colors
          pathColor: `green`,
          trailColor: '#d6d6d6',
          textColor: '#fff',
          backgroundColor: '#37d137',
        })}
      />
      <div className='text-center py-1' style={{ fontSize: "12px" }}>{ text }</div>
    </>
  )
}
