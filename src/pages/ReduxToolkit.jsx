import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, multiply } from '../redux/counter/counterSlice'

const ReduxToolkit = () => {
    const count = useSelector((state) => state.counter.value)
    // agr kisi others components me data show krna to just upper wali line copy and paste,
    // no need for props drilling.

    // if you want to do more practise so work with ecommerce cart like these type of functionalities
    // so your command on redux will be good

    const dispatch = useDispatch()

    return (
        <div>
            Redux Toolkit <br />
            <button
                className='border border-slate-400 px-4 rounded-full mr-2 bg-red-500'
                onClick={() => {
                    if (count > 0) {
                        dispatch(decrement())
                    } else {
                        alert("count negative me nhi chalega")
                    }
                }}
            >-</button>

            Currently count is {count}

            <button
                className='border border-slate-400 px-4 rounded-full ml-2 bg-blue-500'
                onClick={() => dispatch(increment())}
            >+</button>

            <button
                className='border border-slate-400 px-4 rounded-full ml-2 bg-blue-500'
                onClick={() => dispatch(multiply())}
            >*</button>

        </div>
    )
}

export default ReduxToolkit