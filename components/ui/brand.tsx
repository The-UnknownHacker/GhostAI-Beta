import Link from "next/link"
import { FC } from "react"

interface BrandProps {
  theme?: "dark" | "light"
}

export const Brand: FC<BrandProps> = ({ theme = "dark" }) => {
  return (
    <Link
      className="flex cursor-pointer flex-col items-center hover:opacity-50"
      href="https://www.ghostai.me"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="mb-2">
        <img
          src={`/icons/ghostai-icon.png`} // Adjust the path to match your directory structure
          alt="Chatbot UI"
          width={100} // Adjust width as needed
        />
      </div>

      <div className="text-4xl font-bold tracking-wide">Welcome To GhostAI</div>
    </Link>
  )
}
