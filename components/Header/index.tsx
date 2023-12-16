"use client"
import Link from "next/link"
import { useState } from "react"
import { twMerge } from "tw-merge"
import classNames from "classnames"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { Container } from "../Container"
import { Logo, LoomLogoMain } from "../Logos"
import { Hamburger } from "../Icons/Hamburger"
import { primaryMenu } from "../../constants"
import MobileMenuModal from "./MobileMenuModal"
import { HamburgerX } from "../Icons/HamburgerX"
import { Button } from "../Button/Button"
import DropdownItem from "./DropdownItem"
import { MobileMenuTeam } from "../Icons/MobileMenuTeam"

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

  const [isOpen, setIsOpen] = useState(false)

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

          {/* Menu */}
          <nav className="flex-1 justify-end 2xl:flex hidden">
            <ul className="flex items-center ">
              {primaryMenu?.map((item) => (
                <li key={item.label}>
                  {/* SubMenu */}
                  {item.submenu ? (
                    <DropdownMenu.Root>
                      <DropdownMenu.Trigger asChild>
                        <button
                          className="rounded-[4px] py-2 px-4 flex items-center justify-center gap-2 font-light"
                          aria-label={item.label}
                        >
                          {item.label} <span className="text-[10px]">▼</span>
                        </button>
                      </DropdownMenu.Trigger>

                      <DropdownMenu.Portal>
                        <DropdownMenu.Content
                          className="min-w-[220px] bg-white rounded-[50px]  shadow-[0px_10px_70px_-10px_rgba(22,_23,_24,_0.3),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.1)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade max-w-md p-8"
                          sideOffset={5}
                        >
                          <ul>
                            {item.listItems?.map((subItem) => (
                              <li key={subItem.label}>
                                <DropdownItem
                                  url={subItem.url}
                                  label={subItem.label}
                                  icon={subItem.icon}
                                />
                              </li>
                            ))}
                          </ul>

                          <DropdownMenu.Arrow className="fill-white w-7 h-4" />
                        </DropdownMenu.Content>
                      </DropdownMenu.Portal>
                    </DropdownMenu.Root>
                  ) : (
                    <Link href={item.url} className="py-2 px-4 font-light">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA */}
          <ul className="flex items-center gap-4">
            <li>
              <Button linkUrl="#" variant="text" label="Link" />
            </li>
            <li>
              <Button linkUrl="#" label="Link" />
            </li>
            <li>
              <Button linkUrl="#" variant="secondary" label="Link" />
            </li>

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
          </ul>
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
