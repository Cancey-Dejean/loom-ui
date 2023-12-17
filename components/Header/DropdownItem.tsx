import classNames from "classnames"
import Link from "next/link"
import React from "react"
import { twMerge } from "tw-merge"

type DropdownItemProps = {
  label: string
  url: string
  className?: string
  active?: boolean
  icon?: React.ReactNode
}

const DropdownItem = ({
  label,
  url,
  icon,
  className,
  active,
}: DropdownItemProps) => {
  return (
    <Link
      href={url}
      className={classNames(
        active
          ? "bg-[var(--thd-color-violet-60)] text-white [&_svg]:!text-white"
          : "text-gray-700",
        `lm-body-sm flex items-center gap-3 py-[7px] text-lns-color-grey8 px-[10px] ${
          className || ""
        }`
      )}
    >
      {icon ? <span className="h-[18px] w-[18px]">{icon}</span> : null}

      {label}
    </Link>
  )
}

export default DropdownItem
