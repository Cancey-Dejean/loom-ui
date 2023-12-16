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
  url?: string
  /**
   * Description goes here
   */
  icon?: React.ReactNode | boolean
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
  onClick?: () => void
} & AnchorHTMLAttributes<HTMLAnchorElement> &
  ButtonHTMLAttributes<HTMLButtonElement>

const button = cva(
  "h-[3rem] font-light text-base flex items-center justify-center tracking-[0.0837019px] rounded-[624.9375rem] py-[8px] px-[16px] transition-background duration-[.1s] ease-in-out  hover:[transform:translate3d(0,-.1em,0)_scale(1.01)] hover:drop-shadow-width-hv min-w-[131px]",
  {
    variants: {
      variant: {
        primary: ["thd-btn-primary"],
        secondary: ["thd-btn-secondary"],
        text: ["min-w-[auto] bg-transparent text-[inherit] ![transform:none]"],
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
  url,
  icon,
  ...props
}: ButtonProps) => {
  const iconContent = icon ? <span>{icon}</span> : null

  return url ? (
    <Link
      href={url}
      className={twMerge(button({ variant, size, className }))}
      {...props}
    >
      {iconContent}
      {label || "Button"}
    </Link>
  ) : (
    <button
      className={twMerge(button({ variant, size, className }))}
      {...props}
    >
      {iconContent}
      {label || "Button"}
    </button>
  )
}
