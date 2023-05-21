'use client'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Profile() {
  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 focus-visible:outline-none">
        <span>Login</span>
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
        <Popover.Panel className="absolute left-20 z-10 mt-4 flex w-screen max-w-max -translate-x-[100%] px-4">
          <div className="w-screen max-w-[300px] flex-auto overflow-hidden rounded-2xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 ">
            <div className="p-4">
              <form action="">
                <div className="email flex flex-col">
                  <span>Email</span>
                  <input type="text" name="email" id="" placeholder='Email' />
                </div>
                <div className="password flex flex-col my-2">
                  <span>Password</span>
                  <input type="password" name="password" id="" placeholder='Password'/>
                </div>
                <button  
                  onClick={(e) => { 
                    console.log(e)
                    e.preventDefault() }}
                  type="submit"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}