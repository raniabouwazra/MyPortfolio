import React ,{useState} from 'react'
import './Progress.css'

const Progress = ({done})=> {
  const [style,setStyle]=useState({});
  setTimeout(() => {
    const newStyle = { 
      borderRadius: "1000px",
      height: "15px",
      backgroundColor: "var(--color-2)",
      width: `${done}%`
    }
   setStyle(newStyle);}
   , 4000 );
   

  return (
    <div className='bar'>
    <div className='progress-done' style={style}> </div>
    </div>

  )
}

export default Progress