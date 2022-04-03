
import React,{useState} from 'react'


const Basic2 = () => {
    const [products, setProducts] = useState([])  
    const newProducts = () => {
        setProducts([...products,{
            id: products.length,
            name: "草"
        }])
    }    

    return (
        <div>
            {/*must: newProductは関数のため、returnの外に定義 */}
            <button onClick={newProducts}>Add New Product</button>
            <ul>
                 {/* mapで配列の要素の値を展開する */}
                {products.map(product => (
                    // must:keyを指定して一意にする
                    <li key={product.id}>{product.name} id: {product.id}</li>
                ))}
            </ul>

        </div>
    )
  
}

export default Basic2