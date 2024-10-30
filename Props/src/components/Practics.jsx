import React from 'react'

const Practics = () => {
    const inputRef = useRef(null)
    const [bg, setBg] = useState('black')
    const [add, remove] = useState(1);
    let myltuplyResult = add * 5;
    const addButton = () => {
        remove(add => add + 1)
    }
    const removebutton = () => {
        remove(add - 1)
    }
    const handleFocus = () => {
        inputRef.current.focus();
    }
    return (
        <div className='container-fluid w-full h-screen' style={{ background: bg }}>

            <div className='grid grid-rows-1 grid-cols-2'>
                <div className='border'>
                    <p className='text-white font-medium text-xl'>Initial Value: {add}</p>
                    <p className='text-white'>Multiplied Value: {myltuplyResult}</p>
                    <button className='btn-sm' onClick={removebutton}>Remove 1</button>
                    <button onClick={addButton}>Click to multiple by 5</button>
                    <input ref={inputRef} type="text" className='' placeholder="Click the button to focus me!" />
                    <button onClick={handleFocus}>Focus on Input</button>
                </div>
                <div className='border py-2 px-2'>
                    <Card username="Suman" role="Developer" />
                </div>
            </div>
            <div className='grid grid-rows-1 grid-cols-1 center'>
                <div className='bg-white shadow-sm fixed flex flex-wrap justify-center bottom-6 px-2 inset-x-0'>
                    <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
                        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "red" }} onClick={() => setBg("red")}>Red</button>
                    </div>
                    <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
                        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "green" }} onClick={() => setBg("green")}>Red</button>
                    </div>
                    <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
                        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "blue" }} onClick={() => setBg("blue")}>Red</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Practics
