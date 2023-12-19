import Link from "next/link"
import { cva } from "class-variance-authority"
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react"
import { twMerge } from "tw-merge"
import "./Button.css"

const button = cva("btn", {
  variants: {
    variant: {
      primary: ["btn-primary"],
      secondary: ["btn-secondary"],
      text: ["btn-text"],
    },
    size: {
      small: ["btn-small"],
      medium: ["h-[3rem]"],
      large: ["btn-large"],
    },
  },
})

export const Button = ({
  className,
  variant,
  size,
  label,
  url,
  icon,
  ...props
}: {
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
  size?: "small" | "medium" | "large"
  /**
   * Description goes here
   */
  label?: string
  /**
   * Description goes here
   */
  onClick?: () => void
} & AnchorHTMLAttributes<HTMLAnchorElement> &
  ButtonHTMLAttributes<HTMLButtonElement>) => {
  const iconContent = icon ? <span>{icon}</span> : null

  return url ? (
    <Link
      href={url}
      className={twMerge(button({ variant, size, className }))}
      {...props}
    >
      {label || "Link"}
      {iconContent}
    </Link>
  ) : (
    <button
      className={twMerge(button({ variant, size, className }))}
      {...props}
    >
      {label || "Button"}
      {iconContent}
    </button>
  )
}
