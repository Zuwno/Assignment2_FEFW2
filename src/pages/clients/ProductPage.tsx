import { useGetProductsQuery } from '../../Api/products'
import { IProduct } from '@/interfaces/Products'
import React from 'react'


const ProductPage = () => {
    const {data}=useGetProductsQuery()
   console.log();
   
   
  return (
    <>
     <h1 className='text-3xl font-bold text-purple-800  p-4'> Danh sách sản phẩm </h1>
    <div className='flex gap-8 py-4 px-8'>
       
        {data?.map((product:IProduct,index:number|string)=>(
            <div key={index} >
            <div> 
             <a href={`/product/${product.id}`}>   <img className='w-[200px]' src={product.images} alt={`Product ${product.id}`} /></a>
            <a href={`/product/${product.id}`}> <h3 className='p-2 text-purple-800 font-bold hover:text-purple-400'>{product.name}</h3></a>
            </div>
          </div>
        )
        
        )}
    </div>
    </>
  )
}

export default ProductPage