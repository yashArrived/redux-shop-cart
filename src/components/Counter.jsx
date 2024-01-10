import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/Slices/CounterSlice';

const Counter = () => {

const count = useSelector((state)=> state.counter.value)
const dispatch = useDispatch();

  return (
    <div>Counter

        <div>
                    {
                        count
                    }
        </div>
        <button onClick={()=>dispatch(increment())} className='button bg-black font-white text-white'>Incr</button>
        <br />
        <br />
        <button onClick={()=>dispatch(decrement())}>Decr</button>
    </div>
  )
}

export default Counter