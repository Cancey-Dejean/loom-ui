import MenuItemDropdown from "@/components/Header/MenuItemDropdown"
import { MobileMenuTeam } from "@/components/Icons/MobileMenuTeam"

export const companyName: string = "Loom"
// export const MAX_EXCERPT_LENGTH = 93;

export const primaryMenu = [
  {
    label: "Link 1",
    linkUrl: "/",
    className: "",
    submenu: true,
  },
  {
    label: "Link 1",
    linkUrl: "/",
    className: "",
    submenu: false,
  },
]

export const MOBILE_MENU_LIST = [
  {
    title: "Title",
    listItems: [
      {
        label: "Link 1",
        linkUrl: "/",
        icon: <MobileMenuTeam />,
      },
      {
        label: "Link 2",
        linkUrl: "/",
        icon: <MobileMenuTeam />,
      },
      {
        label: "Link 3",
        linkUrl: "/",
        icon: <MobileMenuTeam />,
      },
    ],
  },
  {
    title: "Title 2",
    listItems: [
      {
        label: "Link 1",
        linkUrl: "/",
        icon: <MobileMenuTeam />,
      },
      {
        label: "Link 2",
        linkUrl: "/",
        icon: <MobileMenuTeam />,
      },
      {
        label: "Link 3",
        linkUrl: "/",
        icon: <MobileMenuTeam />,
      },
    ],
  },
  {
    title: "Title 3",
    listItems: [
      {
        label: "Link 1",
        linkUrl: "/",
        icon: <MobileMenuTeam />,
      },
      {
        label: "Link 2",
        linkUrl: "/",
        icon: <MobileMenuTeam />,
      },
      {
        label: "Link 3",
        linkUrl: "/",
        icon: <MobileMenuTeam />,
      },
    ],
  },
]

export const navSecondary = [
  {
    label: "How it works",
    linkUrl: "/",
    icon: "",
    reverseIcon: false,
    intent: "navText",
    className: "",
    size: "small",
    shadow: false,
  },
  {
    label: "Sign in",
    linkUrl: "/",
    icon: "",
    reverseIcon: false,
    intent: "navText",
    className: "",
    size: "small",
    shadow: false,
  },
  {
    label: "Start a GoFundMe",
    linkUrl: "/",
    icon: "",
    reverseIcon: false,
    intent: "primary",
    className: "px-4",
    size: "small",
    shadow: false,
  },
]
