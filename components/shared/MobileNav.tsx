import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import NavItems from "./NavItems";
import { Separator } from "../ui/separator"
const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image
            src="/assets/icons/menu.svg"
            width={24}
            height={24}
            alt="menu"
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
          <div className="flex space-x-2">
            <Image
              src="/assets/images/logo.png"
              alt="iDavos logo"
              width={36}
              height={36}
              priority
            />
            <span className="text-lg font-semibold">iDavos</span>
          </div>
          <Separator className="border border-gray-50" />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
