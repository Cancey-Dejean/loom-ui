import { twMerge } from "tw-merge"

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={twMerge(
        `max-w-container mx-auto w-full px-4 3xl:px-0 rounded-[var(--radius-lg)] ${
          className || ""
        }`
      )}
    >
      {children}
    </div>
  )
}
