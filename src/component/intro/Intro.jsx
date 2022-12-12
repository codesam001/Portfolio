import { useEffect, useRef } from 'react'
import { init } from 'ityped'
import './intro.scss'



export default function Intro() {

  const textRef = useRef()


  useEffect(() => {
    init(textRef.current, { 
      showCursor: true, 
      backDelay: 1500,
      backSpeed: 60,
      autoStart:true,
      delay:75,
      loop:true,
      strings: ["Developer", "Designer", "Content Creator"],
       });
  }, []);

  // <Typewriter 
           
  // options={{ 
  // strings:["Developer", "Designer", "Content Creater"],
  // autoStart:true,
  // delay:75,
  // loop:true
  // }}
  
  // /> 



  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="asset/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I am </h2>
          <h1>Saurabh Pundir</h1>
          <h3>
            Freelance <span ref={textRef}></span> 
          </h3>
        </div>
        <a href="#pertfolio">
          <img src="asset/down.png" alt=""/>
        </a>
      </div>
    </div>
  )
}















