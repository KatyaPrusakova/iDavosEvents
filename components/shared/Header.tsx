import Link from "next/link";
import Image from "next/image";
// import { SignedOut,SignedIn,UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";
const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
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
        {/* <SignedIn> */}
        <nav className="md:flex-between hidden w-full max-w-xs">
          <NavItems />
        </nav>
        {/* </SignedIn> */}
        <div className="flex w-32 justify-end gap-3">
          {/* <SignedIn> */}
          {/* <UserButton afterSignOutUrl="/" /> */}
          <MobileNav />
          {/* </SignedIn> */}
          {/* <SignedOut> */}
          <Button className="rounded-full" size="lg" asChild>
            <Link href="/sign-in">Login</Link>
          </Button>
          {/* </SignedOut> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
