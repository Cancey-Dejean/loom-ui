import React from "react"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import {
  CheckIcon,
  ChevronRightIcon,
  DotFilledIcon,
  HamburgerMenuIcon,
} from "@radix-ui/react-icons"

const MenuItemDropdown = () => {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true)
  const [urlsChecked, setUrlsChecked] = React.useState(false)
  const [person, setPerson] = React.useState("pedro")

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="rounded-[4px] py-2 px-4 flex items-center justify-center gap-2  outline-none  focus:border-2 focus-visible:border-gray-400/50"
          aria-label="Customise options"
        >
          Link <span className="text-[10px]">▼</span>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[220px] bg-white rounded-[50px]  shadow-[0px_10px_70px_-10px_rgba(22,_23,_24,_0.3),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.1)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade max-w-md p-8 "
          sideOffset={10}
        >
          <div>Lorem ipsum</div>

          <DropdownMenu.Arrow className="fill-white w-7 h-4" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default MenuItemDropdown
