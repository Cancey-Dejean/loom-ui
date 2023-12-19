"use client"
import type { StaticImageData } from "next/image"
import { useState, useRef, Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import Image from "next/image"
import PlayIcon from "../../../components/Icons/PlayIcon"
// import { PlayIcon } from "../../atoms/Icons";

export type ModalVideoProps = {
  /**
   * Description goes here
   */
  thumb: string
  /**
   * Description goes here
   */
  thumbnailClass?: string
  /**
   * Description goes here
   */
  thumbAlt: string
  /**
   * Description goes here
   */
  videoSrc: string
  /**
   * Description goes here
   */
  videoWidth?: number
  /**
   * Description goes here
   */
  videoHeight?: number
}

export default function ModalVideo({
  thumb = "https://dummyimage.com/2020x1136.png/dddddd/ffffff",
  thumbnailClass = "",
  thumbAlt = "Modal video thumbnail",
  videoSrc = "/videos/video.mp4",
  videoWidth = 1920,
  videoHeight = 1080,
}: ModalVideoProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <>
      {/* 1. The button */}
      <button
        className="focus-visible:ring-indigo-300 group relative flex items-center justify-center  focus:outline-none focus-visible:ring "
        onClick={() => {
          setModalOpen(true)
        }}
        aria-label="Watch the video"
      >
        <Image
          className={`w-auto h-auto bg-[#ddd]  rounded-[30px] shadow-2xl transition-shadow duration-300 ease-in-out aspect-video ${thumbnailClass}`}
          src={thumb}
          width={2020}
          height={1136}
          alt={thumbAlt}
        />
        {/* Play icon */}
        <div className="absolute left-1/2 top-1/2 flex h-[70px] w-[70px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100">
          <PlayIcon />
        </div>
      </button>

      <Transition
        show={modalOpen}
        as={Fragment}
        afterEnter={() => videoRef.current?.play()}
      >
        <Dialog initialFocus={videoRef} onClose={() => setModalOpen(false)}>
          {/* 2. The backdrop layer */}
          <Transition.Child
            className="fixed inset-0 z-[99999] bg-black bg-opacity-50 transition-opacity"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-out duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            aria-hidden="true"
          />

          {/* 3. The modal video */}
          <Transition.Child
            className="fixed inset-0 z-[99999] flex p-6"
            enter="transition ease-out duration-300"
            enterFrom="opacity-0 scale-75"
            enterTo="opacity-100 scale-100"
            leave="transition ease-out duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-75"
          >
            <div className="mx-auto flex h-full max-w-5xl items-center">
              <Dialog.Panel className="aspect-video max-h-full w-full overflow-hidden rounded-md bg-black shadow-2xl">
                <video
                  ref={videoRef}
                  width={videoWidth}
                  height={videoHeight}
                  controls
                  className="h-full object-cover"
                >
                  <source src={videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  )
}
