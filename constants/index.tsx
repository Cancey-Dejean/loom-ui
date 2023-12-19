import { MobileMenuTeam } from "../components/Icons/MobileMenuTeam"

export const companyName: string = "Loom"
// export const MAX_EXCERPT_LENGTH = 93;

export const primaryMenu = [
  {
    label: "Dropdown",
    url: "#",
    linkable: false,
    listItems: [
      {
        label: "Link 1",
        url: "/hello",
        icon: <MobileMenuTeam />,
      },
      {
        label: "Link 2",
        url: "/link2",
        icon: <MobileMenuTeam />,
      },
      {
        label: "Link 3",
        url: "/link3",
        icon: <MobileMenuTeam />,
      },
    ],
    submenu: true,
  },
  {
    label: "Link 2",
    url: "/",
    linkable: true,
    listItems: null,
    submenu: false,
  },
  {
    label: "Link 3",
    url: "/",
    linkable: true,
    listItems: null,
    submenu: false,
  },
  {
    label: "Link 4",
    url: "/",
    linkable: true,
    listItems: null,
    submenu: false,
  },
  {
    label: "Link 5",
    url: "/",
    linkable: true,
    listItems: null,
    submenu: false,
  },
  {
    label: "Link 6",
    url: "/",
    linkable: true,
    listItems: null,
    submenu: false,
  },
]

export const navSecondary = [
  {
    label: "Link",
    url: "/",
    variant: "text",
  },
  {
    label: "Link",
    url: "/",
    variant: "primary",
  },
  {
    label: "Link",
    url: "/",
    variant: "secondary",
  },
]
