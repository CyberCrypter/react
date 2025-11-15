import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount } from './store/reducer/counterSlice'


function App() {
  const {value} = useSelector((state)=> state.counter)
  const dispatch = useDispatch();
  
  return (
    <div>
      <h1 className='text-center p-4 font-bold text-4xl'>Counter: {value}</h1>

      <div className='text-center pt-12 flex-col'>
        <button onClick={()=> dispatch(increment())} className='text-2xl border-b-amber-950 border-3 bg-amber-200 mr-2 cursor-pointer p-2 rounded-md font-medium'>increment</button>
        <button onClick={()=> dispatch(decrement())} className='text-2xl border-b-amber-950 border-3 bg-amber-200 mr-2 cursor-pointer p-2 rounded-md font-medium'>decrement</button>
        <button onClick={()=> dispatch(incrementByAmount(5))} className='text-2xl border-b-amber-950 border-3 bg-amber-200 p-2 cursor-pointer rounded-md font-medium'>increment by 5</button>
      </div>
    </div>
  )
}

export default App