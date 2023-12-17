export default function NavMenu() {
  return (
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
          className="min-w-[250px] bg-white rounded-[40px]  shadow-[0px_10px_70px_-10px_rgba(22,_23,_24,_0.3),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.1)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade px-8 py-5"
          sideOffset={5}
        >
          <ul>
            {item.listItems?.map((subItem) => (
              <li key={subItem.label}>
                <DropdownItem
                  url={subItem.url}
                  label={subItem.label}
                  icon={subItem.icon}
                  className="px-0"
                />
              </li>
            ))}
          </ul>

          <DropdownMenu.Arrow className="fill-white w-7 h-4" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
