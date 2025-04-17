import { useEffect, useState } from 'react'
import './App.css'
import Loading from './componenets/loading/Loading'
import MainFile from './MainFile';
function App() {
  const [isLoading,setIsLoading] = useState(true);

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setIsLoading(false);
    },1500);
    return () => clearTimeout(timer);
  },[]);
  
  return (
        <>
        {isLoading ?<Loading />:<MainFile/>}
        </>
  )
}

export default App
