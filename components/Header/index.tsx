"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import { twMerge } from "tw-merge"
import classNames from "classnames"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { Container } from "../Container"
import { Logo, LoomLogoMain } from "../Logos"
import { Hamburger } from "../Icons/Hamburger"
import { navSecondary, primaryMenu } from "../../constants"
import MobileMenuModal from "./MobileMenuModal"
import { HamburgerX } from "../Icons/HamburgerX"
import { Button } from "../Button/Button"
import DropdownItem from "./DropdownItem"
import NavMenu from "./NavMenu"
import { Fragment } from "react"
import { Menu, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"

const Header = ({
  logoCentered,
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
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    // Call the handleScroll function on page load
    handleScroll()

    // Listen for scroll events
    window.addEventListener("scroll", handleScroll)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, []) // Empty dependency array means this effect runs once on mount and clean up on unmount

  function handleMobileMenu() {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(false)
    }

    window.addEventListener("resize", handleResize)

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <>
      <header
        className={classNames(
          "fixed left-0 top-0 z-[20] h-nav-h-sm sm:h-nav-h-lg flex items-center w-full py-10px bg-white transition-all duration-[.3s] ease-in-out ",
          isOpen ? "!shadow-none" : null,
          scrolled ? "thd-shadow-nav" : null
        )}
      >
        <Container
          className={twMerge(
            "relative flex items-center justify-between gap-4 bg-white px-[32px] sm:px-[34px]"
          )}
        >
          <div
            className={classNames(
              "max-w-[120px] sm:max-w-[150px]",
              logoCentered
                ? "absolute top-1/2 left-1/2 [transform:translate(-50%,-50%)]"
                : "relative"
            )}
          >
            <Logo logo={<LoomLogoMain />} ariaLabel="Loom Logo" />
          </div>

          {/* Menu */}

          <nav className="flex-1 justify-end 2xl:flex hidden">
            <ul className="flex items-center ">
              {primaryMenu.slice(0, 4).map((item) => (
                <li key={item.label}>
                  {item.submenu ? (
                    <>
                      <Menu
                        as="div"
                        className="relative inline-block text-left"
                      >
                        <div>
                          <Menu.Button className="flex items-center justify-center gap-[6px] text-gray-900 ring-gray-300 py-2 px-4 font-light dropdown-btn">
                            {item.label}
                            <span className="text-[10px] dropdown-btn-icon">
                              ▼
                            </span>
                          </Menu.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute left-1/2 z-10 -translate-x-1/2 mt-2  min-w-[250px] origin-top-right bg-white  ring-opacity-5 focus:outline-none rounded-[40px] shadow-dropdown">
                            {/* Dropdown menu Arrow */}
                            <span className="absolute top-0 -translate-x-1/2origin-center rotate-180 left-1/2 -translate-y-[100%]">
                              <svg
                                className="block fill-white"
                                width="25"
                                height="14"
                                viewBox="0 0 30 10"
                                preserveAspectRatio="none"
                              >
                                <polygon points="0,0 30,0 15,10"></polygon>
                              </svg>
                            </span>

                            <ul className="py-[22px] px-[22px]">
                              {item.listItems?.map((subItem) => (
                                <li key={subItem.label}>
                                  <Menu.Item>
                                    {({ active }) => (
                                      <DropdownItem
                                        label={subItem.label}
                                        url={subItem.url}
                                        icon={subItem.icon}
                                        active={active}
                                      />
                                    )}
                                  </Menu.Item>
                                </li>
                              ))}
                            </ul>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </>
                  ) : (
                    <Link href={item.url} className="py-2 px-4 font-light">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            {/* CTA */}
            <ul className=" items-center gap-4 hidden sm:flex">
              {navSecondary?.map((link, index) => (
                <li key={index}>
                  <Button
                    url={link.url}
                    variant={link.variant as any}
                    label={link.label}
                  />
                </li>
              ))}
            </ul>

            {/* Hamburger */}
            <button
              className={classNames(
                "w-12 h-12 rounded-full flex items-center justify-center cursor-pointer 2xl:hidden relative z-50",
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
      <MobileMenuModal isOpen={isOpen} handleMobileMenu={handleMobileMenu} />
    </>
  )
}

export default Header
