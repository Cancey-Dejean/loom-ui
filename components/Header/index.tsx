import { twMerge } from "tw-merge"
import { Container } from "../Container"
import { Logo, LoomLogoMain } from "../Logos"

export const primaryMenu = [
  {
    label: "Link 1",
    linkUrl: "/",
    intent: "navText",
    className: "",
    size: "small",
    shadow: false,
    reverseIcon: false,
    icon: null,
  },
]

type HeaderProps = {
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
}

const Header = ({
  logo,
  logoCentered,

  headerAnimation = true,
}: HeaderProps) => {
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

  return (
    <header
      className={twMerge(
        "left-0 top-0 z-50 h-[var(--thd-nav-h-lg)] flex items-center w-full py-10px bg-white  transition-all duration-[.3s] ease-in-out"
        // headerAnimation ? "fixed " : "sticky ",
        // scrolled ? " shadow-lg lg:bg-white lg:py-2" : "py-0 lg:py-6"
      )}
    >
      <Container className="relative flex items-center justify-between gap-4 bg-white">
        <div
          className={
            logoCentered
              ? "absolute top-1/2 left-1/2  [transform:translate(-50%,-50%)]"
              : "relative"
          }
        >
          <Logo logo={<LoomLogoMain />} ariaLabel="Loom Logo" />
        </div>

        <div className="flex-1">
          <nav className={twMerge("w-full items-center text-right")}>
            <ul className="flex items-center">
              {primaryMenu?.map((item) => (
                <li key={item.label}>
                  <a href="" className="py-2 px-4">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div>cta</div>
      </Container>
    </header>
  )
}

export default Header
