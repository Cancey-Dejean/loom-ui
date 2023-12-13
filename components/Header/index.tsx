"use client"
import Link from "next/link"
import { twMerge } from "tw-merge"
import { Container } from "../Container"
import { Logo, LoomLogoMain } from "../Logos"
import { Hamburger } from "../Icons/Hamburger"
import { primaryMenu } from "@/constants"
import { MobileMenu } from "./MobileMenu"
import MobileMenuModal from "./MobileMenuModal"
import { useState } from "react"
import { HamburgerX } from "../Icons/HamburgerX"
import classNames from "classnames"

const Header = ({
  logoCentered,
  headerAnimation = true,
}: {
  /**
   * Description goes here
   */
  logo?: React.ReactNode
  /**
   * Description goes here
   */
  logoCentered?: boolean
  /**
   * Description goes here
   */
  navPrimary?: []
  /**
   * Description goes here
   */
  navSecondary?: []
  /**
   * Description goes here
   */
  headerAnimation?: boolean
}) => {
  // const [scrolled, setScrolled] = useState(false)

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 10) {
  //       setScrolled(true)
  //     } else {
  //       setScrolled(false)
  //     }
  //   }

  //   // Call the handleScroll function on page load
  //   handleScroll()

  //   // Listen for scroll events
  //   window.addEventListener("scroll", handleScroll)

  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll)
  //   }
  // }, []) // Empty dependency array means this effect runs once on mount and clean up on unmount

  let [isOpen, setIsOpen] = useState(false)

  function handleMobileMenu() {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <header
        className={twMerge(
          "fixed left-0 top-0 z-[20] h-nav-h-lg flex items-center w-full py-10px bg-white transition-all duration-[.3s] ease-in-out"
          // headerAnimation ? "fixed " : "sticky ",
          // scrolled ? " shadow-lg lg:bg-white lg:py-2" : "py-0 lg:py-6"
        )}
      >
        <Container
          className={twMerge(
            "relative flex items-center justify-between gap-4 bg-white px-[34px]"
          )}
        >
          <div
            className={
              logoCentered
                ? "absolute top-1/2 left-1/2 [transform:translate(-50%,-50%)]"
                : "relative"
            }
          >
            <Logo logo={<LoomLogoMain />} ariaLabel="Loom Logo" />
          </div>

          <div className="flex-1">
            <nav className={twMerge("w-full items-center text-right")}>
              <ul className="flex items-center">
                {primaryMenu?.map((item) => (
                  <li key={item.label}>
                    <Link href="#" className="py-2 px-4">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            {/* CTA */}
            <div>
              <Link href={"/"}>cta</Link>
            </div>

            {/* Hamburger */}
            <button
              className={classNames(
                "w-12 h-12 rounded-full flex items-center justify-center cursor-pointer 2xl:hidden",
                isOpen ? "bg-thd-color-violet-60" : "bg-thd-color-violet-10"
              )}
              onClick={handleMobileMenu}
            >
              {isOpen ? <HamburgerX /> : <Hamburger />}
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Menu */}
      <div className="absolute top-0 left-0 w-full z-50">
        <MobileMenuModal isOpen={isOpen} handleMobileMenu={handleMobileMenu} />
      </div>
    </>
  )
}

export default Header
