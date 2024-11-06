import React, { useState, useCallback, useEffect, useRef } from 'react'

const Password = () => {
    const [length, setLength] = useState(8)
    const [numbersAllowed, setNumbersAllowed] = useState(false)
    const [charAllowed, setCharAllowed] = useState(false)
    const [password, setPassword] = useState("")
    const passwordRef = useRef(null)

    // ********* Password Generator Function *****************
    const passwordGenerator = useCallback(() => {
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if (numbersAllowed) str += "0123456789"
        if (charAllowed) str += "!@#$%^&*-_=+[]{}`~"

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(char)
        }
        setPassword(pass)
    }, [length, numbersAllowed, charAllowed, setPassword])

    const copyPassword = useCallback(() => {
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0, 100);
        window.navigator.clipboard.writeText(password)
    }, [password])

    // ********* Password Generator function callback
    useEffect(() => {
        passwordGenerator()
    }, [length, numbersAllowed, charAllowed, passwordGenerator])

    return (
        <div className='container-fluid'>
            <div className='grid grid-rows-1 grid-cols-1'>
                <div className='w-1/1 rounded bg-gray-800 my-4 mx-auto py-2 px-2 text-center text-orange-700'>
                    <h2 className='text-white text-xl pb-2'>Password Generator</h2>
                    <div className='flex shadow rounded overflow-hidden mb-4'>
                        <input
                            type='text'
                            placeholder='Password'
                            value={password}
                            ref={passwordRef}
                            readOnly
                            className='outline-none w-full py-1 px-3' />
                        <button
                            onClick={copyPassword}
                            className='bg-blue-700 outline-none text-white px-3 py-0.5 shrink-0'>Copy</button>
                    </div>

                    <div className='flex text-sm gap-x-2'>
                        <div className='flex items-center gap-x-1'>
                            <input
                                type='range'
                                min={6}
                                max={100}
                                value={length}
                                className='cursor-pointer'
                                onChange={(e) => { setLength(e.target.value) }}
                            />
                            <label>Length: {length}</label>
                        </div>
                        <div className='flex items-center gap-x-1'>
                            <input
                                type='checkbox'
                                defaultChecked={numbersAllowed}
                                id='numberInput'
                                onChange={() => {
                                    setNumbersAllowed((prev) => !prev)
                                }}
                            />
                            <label htmlFor='numberInput'>Numbers</label>
                        </div>
                        <div className='flex items-center gap-x-1'>
                            <input
                                type='checkbox'
                                defaultChecked={charAllowed}
                                id='charInput'
                                onChange={() => {
                                    setCharAllowed((prev) => !prev)
                                }}
                            />
                            <label htmlFor='numberInput'>Characters</label>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Password
