import { cva } from "class-variance-authority"
import classNames from "classnames"

export type TextProps = {
  /**
   * Description goes here
   */
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p"
  /**
   * Description goes here
   */
  variant?:
    | "display-xl"
    | "display-lg"
    | "heading-lg"
    | "heading-md"
    | "body-lg"
    | "body-md"
  /**
   * Description goes here
   */
  className?: string
  /**
   * Description goes here
   */
  // size?: "display-one" | "display-two" | "heading-one" | "heading-two" | "body"
  /**
   * Description goes here
   */
  children: React.ReactNode
}

const heading = cva("", {
  variants: {
    variant: {
      "display-xl": ["display-xl"],
      "display-lg": ["display-lg"],
      "heading-lg": ["heading-lg"],
      "heading-md": ["heading-md"],
      "body-lg": ["body-lg"],
      "body-md": ["body-md"],
    },
  },
})

/**
 * Primary UI component for user interaction
 */
const Text = ({
  variant = "display-lg",
  as = "h1",
  children,
  className = "",
}: TextProps) => {
  const Element = as
  return (
    <Element className={classNames(heading({ variant, className }))}>
      {children || "Text goes here"}
    </Element>
  )
}

export default Text
