import React from "react"
import { Container } from "../Container"
import { Button } from "../Button/Button"
import ModalVideo from "../Modal/ModalVideo"

const Hero = () => {
  return (
    <section className="bg-thd-color-violet-20 py-[102px] text-center">
      <Container>
        <div className="flex flex-col ">
          <div className="flex justify-center">
            <h1 className="text-thd-heading-lg font-medium text-thd-color-violet-90 max-w-[30ch] mb-4 leading-[1.143]">
              Section Title
            </h1>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className="mb-8 thd-max-3xl text-thd-color-violet-80 text-thd-body-lg leading-[1.524] font-light">
              Easily record and share AI-powered video messages with your
              teammates and customers to supercharge productivity
            </p>

            <Button size="large" />
          </div>
        </div>
      </Container>

      <div className="px-[32px] mt-[52px] flex justify-center">
        <ModalVideo
          videoSrc="/videos/video.mp4"
          thumb="https://dummyimage.com/2020x1136.png/dddddd/ffffff"
          thumbAlt="Modal video thumbnail"
        />
      </div>
    </section>
  )
}

export default Hero
