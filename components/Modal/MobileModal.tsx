import React from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { Cross2Icon } from "@radix-ui/react-icons"
import { Hamburger } from "../Icons/Hamburger"

export const MobileModal = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        {/* <button className="text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
          Edit profile
        </button> */}
        <button className="bg-thd-color-violet-10 w-12 h-12 rounded-full flex items-center justify-center 2xl:hidden">
          <Hamburger />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open] :animate-contentShow fixed top-[50%] left-[50%] h-screen w-screen  translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] flex flex-col focus:outline-none">
          <div className="my-[var(--thd-nav-h-sm)] h-full">Hello</div>

          <Dialog.Close asChild>
            {/* <button
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              close
            </button> */}

            <button
              className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center 2xl:hidden focus:shadow-violet7  focus:shadow-[0_0_0_2px] focus:outline-none absolute   z-[21]
               top-0 left-0 text-lns-color-blurple"
              aria-label="Close"
            >
              close
              {/* <Hamburger /> */}
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
