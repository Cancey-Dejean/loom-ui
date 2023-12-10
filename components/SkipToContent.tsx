import Link from "next/link"

const SkipToContent = () => {
  return (
    <Link href="#main-content" className="skip-link">
      Skip to&nbsp;
      <span className="text-thd-color-violet-90 underline">content</span>
    </Link>
  )
}

export default SkipToContent
