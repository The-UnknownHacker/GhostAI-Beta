import { FC } from "react"

interface GoogleSVGProps {
  height?: number
  width?: number
  className?: string
}

export const GoogleSVG: FC<GoogleSVGProps> = ({
  height = 40,
  width = 40,
  className
}) => {
  return (
    <img
      className={className}
      src="/icons/ghostai-icon.png"
      alt="Google Logo"
      height={height}
      width={width}
    />
  )
}
