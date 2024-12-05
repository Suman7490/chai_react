
import React, { useState } from 'react'

const Practics = () => {
    const [add, remove] = useState(1);
    let myltuplyResult = add * 5;
    const addButton = () => {
        remove(add => add + 1)
    }
    const removebutton = () => {
        remove(add - 1)
    }
    return (


        <div className='text-center my-auto'>
            <p className='font-medium text-xl'>Initial Value: {add}</p>
            <p>Multiplied Value: {myltuplyResult}</p>
            <button className='bg-orange-600 px-2 rounded py-2 mr-3' onClick={removebutton}>Remove 1</button>
            <button onClick={addButton} className='bg-orange-600 px-2 rounded py-2'>Click to multiple by 5</button>
        </div>
    )
}

export default Practics
