'use client'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import { AiOutlineUser } from 'react-icons/ai'
import { get } from '@/api/api'

export default function Profile({isLoading, user}) {
  const handleSignOut =  async () => { 
    try {
      await get('user/signOut')
      window.location.reload()
    }catch(err){
      console.log(err)
      return
    }
  }
  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 focus-visible:outline-none">
        {/* <Image src={user?.avatar || ''} alt="user_avatar" width={35} height={35}/> */}
        <AiOutlineUser className='w-[25px] h-[25px]'/>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-75"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-75"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-20 z-10 mt-2 flex w-screen max-w-max -translate-x-[100%] px-4">
          <div className="w-screen max-w-[150px] mr-3 flex-auto overflow-hidden rounded-2xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 ">
            <div className="p-4 flex flex-col">
              <button className='hover:bg-red-300 active:bg-red-500 rounded-md px-2 duration-150'>Your Profile</button>
              <button className='hover:bg-red-300 active:bg-red-500 rounded-md px-2 duration-150'>Your Library</button>
              <button onClick={handleSignOut} className='hover:bg-red-300 active:bg-red-500 rounded-md px-2 duration-150'>Sign out</button>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}