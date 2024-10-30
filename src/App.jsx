import { useState } from "react"

function App() {
 const [color, setColor] = useState("cyan")
const changeColor= ()=>{

}
  return (
    <div id="container" className="w-full h-screen duration-200 " style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap top-1 justify-center inset-x-0 px-2 ">
       <div className=" flex flex-wrap justify-center space-x-2 shadow-lg bg-white px-3 py-2 rounded-3xl ">
       <button onClick={()=> setColor("red")} className="outline-none px-4 rounded-xl"style={{backgroundColor: "red"}}>
            red
          </button>
          <button onClick={()=> setColor("green")} className="p-2 rounded-xl"style={{backgroundColor: "green"}}>
            green
          </button>
          <button onClick={()=> setColor("blue")} className="p-2 rounded-xl"style={{backgroundColor: "blue"}}>
            blue
          </button>
          <button onClick={()=> setColor("orange")} className="p-2 rounded-xl"style={{backgroundColor: "orange"}}>
            orange
          </button>
          <button onClick={()=> setColor("brown")} className="p-2 rounded-xl"style={{backgroundColor: "brown"}}>
            brown
          </button>
          <button onClick={()=> setColor("yellow")} className="p-2 rounded-xl"style={{backgroundColor: "yellow"}}>
            yellow
          </button>
          <button onClick={()=> setColor("lavender")} className="p-2 rounded-xl"style={{backgroundColor: "lavender"}}>
            lavender
          </button>
          <button onClick={()=> setColor("purple")} className="p-2 rounded-xl"style={{backgroundColor: "purple"}}>
          purple
          </button>
          <button onClick={()=> setColor("black")} style={{backgroundColor:"black"}} className="text-white p-2 rounded-xl">
            black
          </button>
        </div>
        </div>
    </div>
  )
}

export default App
