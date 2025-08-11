import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[startTime,setStartTime]=useState(null);
  const[now,setNow]=useState(null);
  const intervalRef=useRef(null)

  const handleStart=()=>{

    setStartTime(Date.now())
    setNow(Date.now())

    intervalRef.current=setInterval(() => {

      setNow(Date.now())
      
    }, 10);

  }

  const handleStop=()=>{
    clearInterval(intervalRef.current);
    intervalRef.current=null;
  }

  let secondPass=0

  if(startTime!=0&&now!=0){
    secondPass=(now-startTime)/1000;
  }


  return (
    <>
      <div>
        <div className='flex items-center justify-center h-screen'>
          <div className='space-y-2'>
            <div className='text-xl font-bold'>stopwatch: {secondPass}</div>
            <div className='flex items-center space-x-2'>
              <button className='border border-gray-300 font-bold px-4 py-1 bg-gray-100 rounded' onClick={handleStart}>start</button>
              <button className='border border-gray-300 font-bold px-4 py-1 bg-gray-100 rounded' onClick={handleStop}>stop</button>
            </div>
          </div>


        </div>

      </div>

    </>
  )
}

export default App
