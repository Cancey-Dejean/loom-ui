import { Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react"
import { MobileMenu } from "./MobileMenu"

type MyModalProps = {
  isOpen: boolean
  handleMobileMenu: () => void
}

export default function MyModal({ isOpen, handleMobileMenu }: MyModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleMobileMenu}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/0" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex h-full items-center justify-center text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out  duration-300"
              enterFrom="opacity-0 -translate-y-2"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Panel className="w-full h-full transform overflow-hidden bg-white text-left align-middle shadow-xl transition-all flex flex-col justify-center relative z-40">
                <div className="h-full overflow-y-scroll mt-[var(--thd-nav-h-sm)]">
                  {/* Mobile Menu */}
                  <MobileMenu />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
