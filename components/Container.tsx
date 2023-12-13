import { twMerge } from "tw-merge"

type ContainerProps = {
  children: React.ReactNode
  className?: string
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={twMerge(
        `max-w-container mx-auto w-full px-4 3xl:px-0 ${className || ""}`
      )}
    >
      {children}
    </div>
  )
}
