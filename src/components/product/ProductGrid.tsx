import React from 'react'
import ProductItem from './ProductItem'
import { ProductGridProps } from './types'


const ProductGrid = ({products}:ProductGridProps) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto container mt-4'>
        {products.map((product) => (
           <ProductItem key={product._id} product={product}/>
        ))}
    </div>
  )
}

export default ProductGrid