import Link from "next/link"
import { cva } from "class-variance-authority"
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react"
import { twMerge } from "tw-merge"
import { BUTTON_VARIANTS } from "./buttonStorybookData"

export type ButtonProps = {
  /**
   * Description goes here
   */
  variant?: "primary" | "secondary" | "text"
  /**
   * Description goes here
   */
  className?: string
  /**
   * Description goes here
   */
  fontWeight?: "light" | "normal" | "medium"
  /**
   * Description goes here
   */
  url?: string
  /**
   * Description goes here
   */
  icon?: React.ReactNode | boolean
  /**
   * Description goes here
   */
  size?: "medium" | "large"
  /**
   * Description goes here
   */
  label?: string
  /**
   * Description goes here
   */
  onClick?: () => void
} & AnchorHTMLAttributes<HTMLAnchorElement> &
  ButtonHTMLAttributes<HTMLButtonElement>

const button = cva("btn", {
  variants: {
    variant: {
      primary: ["btn-primary"],
      secondary: ["btn-secondary"],
      text: ["min-w-[auto] bg-transparent text-[inherit] ![transform:none]"],
    },
    fontWeight: {
      light: ["!font-light"],
      normal: ["!font-normal"],
      medium: ["!font-medium"],
    },
    size: {
      medium: ["h-[3rem]"],
      large: ["!px-[100px] !py-[25px] text-[21px] sm:!text-[25px] !h-auto"],
    },
  },
})

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  className = "",
  variant = "primary",
  size = "medium",
  fontWeight = "normal",
  label,
  url,
  icon,
  ...props
}: ButtonProps) => {
  const iconContent = icon ? <span>{icon}</span> : null

  return url ? (
    <Link
      href={url}
      className={twMerge(button({ variant, size, fontWeight, className }))}
      {...props}
    >
      {iconContent}
      {label || "Link"}
    </Link>
  ) : (
    <button
      className={twMerge(button({ variant, size, fontWeight, className }))}
      {...props}
    >
      {iconContent}
      {label || "Button"}
    </button>
  )
}
