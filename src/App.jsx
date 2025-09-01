import { useState } from 'react'
import './App.css'

function App() {
  

  const [num,setNum] = useState(12)


  return (
    <div className='min-h-screen bg-gray-200 py-12'>
      <div className='w-9/12 mx-auto'>
      <div className='flex justify-between'>
        <h1 className='text-3xl font-bold'>🎨Gradient Generator</h1>
        <div className='flex gap-4'>
          <input className='border border-slate-300 bg-white rounded-lg w-[100px] p-2' type="text" />
          <select>
            <option value="">Linear</option>
            <option value="">Radiel</option>
          </select>
        </div>
      </div>

      </div>
    </div>
  )
}

export default App
