import Link from "next/link"
import React from "react"

type DropdownItemProps = {
  label: string
  url: string
  icon?: React.ReactNode
}

const DropdownItem = ({ label, url, icon }: DropdownItemProps) => {
  return (
    <>
      <Link
        href={url}
        className="lm-body-sm flex items-center gap-3 py-[7px]  text-lns-color-grey8 px-[34px]"
      >
        {icon ? <span className="h-[18px] w-[18px]">{icon}</span> : null}

        {label}
      </Link>
    </>
  )
}

export default DropdownItem
