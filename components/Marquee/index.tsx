import Image from "next/image"
import { Container } from "../Container"
import "./Marquee.css"
import Link from "next/link"

export const Marquee = ({}) => {
  return (
    <div className="wrapper">
      <ul className="flex items-center gap-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <li key={index}>
            <Link href="#" className="mover">
              <img
                key={index}
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2770c6847ab165771f43a8ec336dcc2e41398116b07216a30cdf00788b3eede0?apiKey=185abb1b280d4e229fdda76ca01214c3&"
                className="aspect-[3.36] object-contain object-center w-[131px] justify-center items-center overflow-hidden self-stretch max-w-full"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Marquee
