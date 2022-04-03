import React,{useState, useEffect} from 'react'

const BasicUseEffect = () => {
    const [count, setCount] = useState(0)
    useEffect(()=> {
        console.log('useEffect invoke')
    },[]
    )
    return (
        <div>
            <button onClick={()=> setCount(prevCount=>prevCount+1)}>Click {count}</button>
        </div>
    )
}

export default BasicUseEffect