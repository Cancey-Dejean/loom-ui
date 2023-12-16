import Link from "next/link"
import React from "react"
import { MobileDropDown } from "../Icons/MobileDropDown"
import { primaryMenu } from "../../constants"
import DropdownItem from "./DropdownItem"

export const MobileMenu = () => {
  return (
    <ul className="mt-5 sm:mt-14-">
      {primaryMenu.map((item) => (
        <li
          className="border-b border-thd-color-grey-20 last:border-0"
          key={item.label}
        >
          <MobileMenuItem title={item.label} linkable={item.linkable}>
            {item.listItems?.map((subItem) => (
              <DropdownItem
                url={subItem.url}
                label={subItem.label}
                icon={subItem.icon}
              />
            ))}
          </MobileMenuItem>
        </li>
      ))}
    </ul>
  )
}

export const MobileMenuItem = ({
  title,
  children,
  linkable,
  url,
}: {
  title: string
  children: React.ReactNode
  linkable?: boolean
  url?: string
}) => {
  const menuItemStyles =
    "px-[34px] text-[23px] py-6 flex items-center justify-between text-thd-color-grey-100 focus-visible:text-thd-color-violet-70 focus-visible:bg-thd-color-violet-10"
  return (
    <div className="menu-item-body">
      {linkable ? (
        <Link href={url || "/"} className={menuItemStyles}>
          <p>{title}</p>

          <span className="h-5 w-5">
            <svg viewBox="0 0 24 24" fill="none" className="">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5 12a1 1 0 011-1h12a1 1 0 110 2H6a1 1 0 01-1-1z"
                fill="currentColor"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 12l-5.293-5.293a1 1 0 010-1.414z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
        </Link>
      ) : (
        <details className="cursor-pointer">
          <summary className={menuItemStyles}>
            <p>{title}</p>

            <span className="h-5 w-5">
              <MobileDropDown />
            </span>
          </summary>

          <div className="pb-6">{children}</div>
        </details>
      )}
    </div>
  )
}
