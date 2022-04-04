import React,{useState, useEffect} from 'react'

const BasicUseEffect = () => {
    const [count, setCount] = useState(0)
    const [item, setItem] = useState('')
    
    // renderingされた最初の一回だけ呼ばれる
    useEffect(()=> {
        console.log('useEffect invoke')
    },[count]
    )
    return (
        <div>
            <button onClick={()=> setCount(prevCount=>prevCount+1)}>Click {count}</button>
            <input type='text' value={item} onChange={evt=>setItem(evt.target.value)}/>
        </div>
    )
}

export default BasicUseEffect