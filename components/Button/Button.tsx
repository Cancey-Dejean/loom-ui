import Link from "next/link"
import classNames from "classnames"

import { cva } from "class-variance-authority"
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react"
import { twMerge } from "tw-merge"

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
  linkUrl?: string
  /**
   * Description goes here
   */
  icon?: React.ReactNode | boolean
  /**
   * Description goes here
   */
  reverseIcon?: boolean
  /**
   * Description goes here
   */
  shadow?: boolean
  /**
   * Description goes here
   */
  size?: "base" | "small" | "large"
  /**
   * Description goes here
   */
  label?: string
  /**
   * Description goes here
   */
  ariaLabel?: string
  /**
   * Description goes here
   */
  onClick?: () => void
} & AnchorHTMLAttributes<HTMLAnchorElement> &
  ButtonHTMLAttributes<HTMLButtonElement>

const button = cva(
  "h-[3rem] font-light text-[15px] leading-[26px] tracking-[0.0837019px] rounded-[624.9375rem] py-[8px] px-[16px] transition-background duration-[.1s] ease-in-out  hover:[transform:translate3d(0,-.1em,0)_scale(1.01)] hover:drop-shadow-width-hv",
  {
    variants: {
      variant: {
        primary: ["thd-btn-primary"],
        secondary: ["thd-btn-secondary"],
        text: ["bg-transparent text-[inherit] ![transform:none]"],
      },
      fontWeight: {
        light: ["font-light"],
        normal: ["font-normal"],
        medium: ["font-medium"],
      },
      size: {
        small: ["h-[34px]", "!py-1"],
        base: ["h-[48px]"],
        large: ["h-[56px]", "py-[8px]"],
      },
      shadow: {
        true: ["shadow-btn"],
        false: null,
      },
      reverseIcon: {
        true: ["flex-row-reverse"],
        false: null,
      },
    },
  }
)

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  className = "",
  variant = "primary",
  size = "base",
  label,
  linkUrl = "",
  shadow = false,
  reverseIcon = false,
  ariaLabel = label,
  icon = null,
  ...props
}: ButtonProps) => {
  const iconContent = icon ? <span>{icon}</span> : null

  return linkUrl !== "" ? (
    <Link
      href={linkUrl}
      className={twMerge(
        button({ variant, size, shadow, reverseIcon, className })
      )}
      aria-label={label || "Button"}
      {...props}
    >
      {iconContent}
      {label || "Button"}
    </Link>
  ) : (
    <button
      className={twMerge(
        button({ variant, size, shadow, reverseIcon, className })
      )}
      aria-label={label}
      {...props}
    >
      {iconContent}
      {label || "Button"}
    </button>
  )
}
