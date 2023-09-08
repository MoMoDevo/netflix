"use client"

import Image from 'next/image';
import React, { MouseEventHandler } from 'react'
import { Button } from './ui/button';
   
 
import useCart from '@/lib/shoppingCart';

interface Product{
  product:ProductProps[]
}
interface ProductProps{
    id:string  
    image:string;
 
    price:string;
    title:string



}






const ProductCard = (product:ProductProps) => {
  const cart=useCart()
  const addToCart:MouseEventHandler <HTMLButtonElement> =(event)=>{
    event.stopPropagation()
    cart.addItem(product)
    

  }
  const removeFormCart:MouseEventHandler <HTMLButtonElement> =(event)=>{
    event.stopPropagation()
    cart.removeItem(product.id)
    

  }

  
  return (
    <div className='h-[300px] shadow-md flex flex-col sm:gap-x-2 gap-y-4 w-[300px] mb-3  m-auto group-hover:bg-slate-600'>
        <Image src={product.image} width={300}  height={300}  alt='product' priority  className='w-full hover:opacity-5 h-4/6'/>
        <div className="flex justify-between pt-1">

        <p>{ product.title.slice(0,5)} </p>
        <p>price:{ product.price} </p>
        </div>
        <Button className='w-2/5' onClick={addToCart}>Add To Cart</Button>
        <Button className='w-2/5' onClick={removeFormCart}>remove</Button>
         

    </div>
  )
}

export default ProductCard