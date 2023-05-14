'use client'
import Link from 'next/link'
import React from 'react'
import {BiSearch} from 'react-icons/bi'
import {BsBellFill} from 'react-icons/bs'
import {AiFillMessage} from 'react-icons/ai'
import UserInfo from './UserInfo'
export default function Header() {
  return (
    <div className='m-2 flex flex-row gap-2 justify-between'>
        <Link href="/" className='max-w-[40px] h-[40px] w-full flex items-center justify-center rounded-full hover:bg-gray-200 active:bg-gray-500 duration-200'>
          <img src="/favicon.ico" alt="" className='w-[24px] h-[24px]'/>
        </Link>
        
        <Link href="/" className='rounded-full p-2 bg-black text-white max-w-[100px] w-full text-center'>
            <button className="">
                Home
            </button>
        </Link>
        
        <div className="search-input relative w-full">
          <BiSearch className='absolute top-[30%] left-3 text-gray-500 text-lg'/>
          <input type="text" placeholder='Search' className='outline-none bg-gray-200 rounded-full p-2 pl-8 w-full'/>
        </div>

        <div className="head-profile flex flex-row items-center gap-2">
          <AiFillMessage className='w-[24px] h-[24px] cursor-pointer'/>
          <BsBellFill className='w-[24px] h-[24px] cursor-pointer'/>
          <UserInfo/>
        </div>
    </div>
  )
}
