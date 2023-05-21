"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { handleLogin } from "../api/fetchApi";
import { useState } from "react";
import Profile from "./Profile";
import {RxCross1} from 'react-icons/rx'

export default function Login() {
  const [isOpen, setOpen] = useState(false);
  const [isLogin, setLogin] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      email: formData.get("email"),
      pass_word: formData.get("password"),
    };
    const response = await handleLogin(data);
    if (response.content) {
      setOpen(false);
    } else {
      setLogin(response.message);
    }
  };

  return (
    <div>
      {/* <Profile/> */}
      <Dialog.Root open={isOpen} onOpenChange={(open) => { 
        setOpen(open)
      }}>
        <Dialog.Trigger asChild>
          <button className="py-2 px-4 bg-red-400 text-white rounded-full focus-visible:outline-none">
            Login
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="opacity-80 bg-gray-500 fixed inset-0" />
          <Dialog.Content className="rounded-xl fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[90vw] max-w-[450px] max-h-[85vh] h-[calc(100%-1rem)] p-[25px] focus:outline-none">
            <div className="relative w-full max-w-md max-h-full">
            <Dialog.Close className="absolute right-[10px] top-[10px] z-[999] focus-visible:outline-none h-[25px] w-[25px] inline-flex rounded-full items-center justify-center hover:bg-gray-300 active:bg-gray-600">
              <RxCross1/>
            </Dialog.Close>
              <div className="relative bg-white rounded-lg shadow">
                <div className="px-6 py-6 lg:px-8">
                  <h3 className="mb-10 text-3xl font-bold text-gray-800 text-center">
                    Welcome to Pinterest
                  </h3>
                  <form
                    onSubmit={(e) => {
                      handleSubmit(e);
                    }}
                    className="space-y-6"
                  >
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Your email
                      </label>
                      <input
                        // type="email"
                        name="email"
                        // id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus-visible:outline-red-500"
                        placeholder="name@company.com"
                        required
                      />
                      {/* <span className="text-red-500 text-sm">{isLogin}</span> */}
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Your password
                      </label>
                      <input
                        type="password"
                        name="password"
                        // id="password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus-visible:outline-red-500"
                        required
                      />
                    </div>
                    <div className="flex justify-between">
                      <a
                        href="#"
                        className="text-sm text-red-700 hover:underline"
                      >
                        Lost Password?
                      </a>
                    </div>
                    <button
                      type="submit"
                      className="w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      Login to your account
                    </button>
                    <div className="text-sm font-medium text-gray-500">
                      Not registered?{" "}
                      <a href="#" className="text-red-700 hover:underline">
                        Create account
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
