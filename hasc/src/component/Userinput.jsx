import {useState} from 'react'

export default function Userinput() {
   const[value,setvalue]=useState()
   const[result,setresult]=useState('Result')

  return (
    <div className='bg-black h-screen flex justify-center items-center'>
        <div className='bg-white p-5 space-y-5 rounded-2xl'>
            <h1 className="text-black text-3xl font-semibold text-center">User input </h1>
             <input onChange={(e) => setvalue(e.target.value)} className="bg-blue-300 px-2 py-1 rounded-md"type="enter a number" placeholder='Enter your number' />
        <div className="flex flex-col gap-3">
            <button onClick={() => setresult(value % 2 == 0 ? "Even" : "Odd")}>Even & Odd</button>
            <button onClick={() => setresult(value > 0 ? "Positive" : "Negative")}>Pos & neg</button>
        </div>
        <p>{result}</p>
        </div>
    </div>
  )
}
