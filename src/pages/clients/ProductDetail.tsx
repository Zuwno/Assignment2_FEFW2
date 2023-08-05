import { useGetProductByIdQuery } from '../../Api/products'
import { IProduct } from '@/interfaces/Products';
import React from 'react'
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams<{ id:string }>();
    const {data:productData,isLoading:isLoadingProduct}=useGetProductByIdQuery( id || '' )

  return (
    <>
         <h1 className='text-3xl font-bold text-purple-800 p-2 text-center'>Chi tiết sản phẩm </h1>
    <div className='py-4 px-8 leading-8'>
       <h3 className=' text-purple-800 font-bold text-2xl hover:text-purple-400 pb-2'>{productData?.name}</h3>
       <img className='w-[200px] hover:scale-95 ' src={productData?.images} alt="" />
       <p className=' text-purple-800 font-bold hover:text-purple-400'>{productData?.price}$</p>
       <p className=' text-purple-800 font-bold hover:text-purple-400'>{productData?.description}</p>
    </div>
    </>
  )
}

export default ProductDetail