import Link from "next/link"
import React from "react"
import { MobileDropDown } from "../Icons/MobileDropDown"
import { MOBILE_MENU_LIST } from "@/constants"

export const MobileMenu = () => {
  return (
    <ul>
      {MOBILE_MENU_LIST.map((item) => (
        <li
          className="border-b border-thd-color-grey-20 last:border-0"
          key={item.title}
        >
          <MobileMenuItem title={item.title}>
            <ul>
              {item.listItems.map((listItem) => (
                <li>
                  <Link
                    href={listItem.linkUrl}
                    key={listItem.label}
                    className="flex items-center gap-2 py-[7px] px-[26px]"
                  >
                    <span className="h-[18px] w-[18px]">{listItem.icon}</span>
                    {listItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          </MobileMenuItem>
        </li>
      ))}
    </ul>
  )
}

const MobileMenuItem = ({
  title,
  children,
  linkable,
}: {
  title: string
  children: React.ReactNode
  linkable?: boolean
}) => {
  const menuItemStyles =
    "px-[30px] text-[23px] py-[18px] flex items-center justify-between"
  return (
    <div className="menu-item-body">
      {linkable ? (
        <Link href="#" className={menuItemStyles}>
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
