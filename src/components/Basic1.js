import React,{useState} from 'react'

const Basic1 = () => {

    const [product, setProducts] = useState({name: '', price: ''}) 
    return (
        <div>
            <form>
                <input type='text' value={product.name} 
                onChange={evt => setProducts({...product, name: evt.target.value})}/>
                {/* ...は要素を分解する */}
                <input type='text' value={product.price} 
                onChange={evt => setProducts({...product, price: evt.target.value})}/>
            </form>
            <h1>Product name is {product.name}</h1>
            <h1>Product value is {product.price}</h1>
        </div>
    )
    }

export default Basic1