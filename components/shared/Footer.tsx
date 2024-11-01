import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href='/'>
          <div className="flex space-x-2">
            <Image
              src="/assets/images/logo.png"
              alt="iDavos logo"
              width={36}
              height={36}
              priority // Optional: prioritizes logo loading for better performance
            />
            <span className="text-lg font-semibold">iDavos</span>
          </div>
        </Link>

        <p>2024 iDavos. All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer