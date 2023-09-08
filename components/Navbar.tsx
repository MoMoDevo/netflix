"use client"
import useCart from '@/lib/shoppingCart'
import Link from 'next/link'
import React from 'react'
import { FaShoppingBasket } from 'react-icons/fa'


const Navbar = () => {
  const cart=useCart()
  return (
    <div className='h-12 w-full sticky shadow-sm flex justify-between px-4 itmes-center'>
      <div className="flex gap-x-2 items-center justify-center">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>about</Link>
        <Link href={"/store"}>store</Link>
      </div>
      <div className="self-center relative">
        <FaShoppingBasket size={35}/>
        <span className='absolute top-4 right-1 text-red-300'>{cart.items.length}</span>
        
      </div>

    </div>
  )
}

export default Navbar