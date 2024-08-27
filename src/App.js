
import { useState } from 'react';
import './index.css';

function App() { 
  const [count, setcount] = useState(0)
  function increment(){
    setcount(count + 1)
  }
  function decrement() {
    setcount(prevvount => prevvount  > 0 ?  prevvount -1 : 0);
  }
function reset(){
  setcount(0)
}
  return (
    <div className="App max-[30rem]: flex items-center justify-center flex-col">
     <Header/>
      < Para count={count} />
      < Buttons increment={increment} decrement={decrement} reset={reset}/>
    </div>
  );
}

export default App;
function Header(){
return(
  <h1 className='text-center text-4xl text-gray-500 font-bold m-3'>counter app</h1>
)}

function Para({count}){
 return <p className='text-gray-700 text-3xl font-bold '>{count}</p>
}
function Buttons({decrement, increment, reset}){
  return <div className='flex items-center flex-col justify-between gap-4 m-[1rem]'>
    <button onClick={increment} className='bg-red-900 rounded-lg py-1 px-5 text-[#fff]  font-bold capitalize'>increment</button>
    <button onClick={decrement} className='bg-sky-900   rounded-lg py-1 px-5 text-[#fff]  font-bold capitalize'   >decrement</button>
    <button onClick={reset} className='bg-slate-700 rounded-lg py-1 px-5 text-[#fff]  font-bold capitalize'>rest</button>


  </div>
}