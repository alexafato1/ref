import React,{useState, useEffect, useRef} from 'react'



export default function App() {

    const [name, setname] = useState('')
    
     const prevName = useRef('')

     useEffect(() => {
       prevName.current = name
     }, [name])

    return (
        <div>
            <input value={name} onChange ={e => setname(e.target.value)}/>
            <div>My name is  {name} and it used to be {prevName.current}</div>
   
         
        </div>
    )
}
