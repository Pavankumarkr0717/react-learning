import { useState } from 'react';
function App() {

  // const[counter, setCounter]=useState(0);
  // function addition(){
  //   setCounter(counter=>counter+1);
  //   setCounter(counter=>counter+1);
  // }
  // return (
  //   <>
  //   <h1 className="bg-grey text-black">welcome to react</h1>
  //   <h2>the value is {counter}</h2>
  //   <button onClick={addition}>add</button>
  //   <Name name="Pavan" age="23"/>
  //   <Name name="Madhu" age="23"/>
  //   <Name name="Tharun" age="23"/>
  //   </>
  // )


    const [color, setColor]=useState("black")
    return(
      <>
      <div className="w-full h-screen" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-xl">
            <button onClick={()=>setColor("red")} className="text-white px-4 py-1 rounded-full" style={{backgroundColor:"red"}}>Red</button>
            <button onClick={()=>setColor("green")} className="text-white px-4 py-1 rounded-full" style={{backgroundColor:"green"}}>Green</button>
          </div>
        </div>
      </div>
      </>
    )
}

export default App
