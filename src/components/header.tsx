import { ModeToggle } from "@/components/ModeToggle";
import NavbarButton from "@/components/NavbarButton";
import { Button } from "@/components/ui/button";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { File, HomeIcon, LogOutIcon, UserRound } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="animate-slide bg-background h-12 p-2 border-b sticky top-0 z-20">
      <div className="flex h-8 items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <NavbarButton icon={HomeIcon} label="home" href="/home" />
          <Link
            href="/home"
            className="flex justify-content item-center gap-2 ml-0"
            title="home"
          >
            <h1 className="hidden sm:block text-xl font-bold m-0 mt-1">
              Computer repair shop
            </h1>
          </Link>
        </div>
        <div className="flex items-center">
          <NavbarButton href="/tickets" label="Tickets" icon={File} />
          <NavbarButton href="/customer" label="Customer" icon={UserRound} />
          <ModeToggle />
          <Button
            variant="ghost"
            title="logout"
            aria-label="logout"
            className="rounded-full"
            asChild
          >
            <LogoutLink>
              <LogOutIcon />
            </LogoutLink>
          </Button>
        </div>
      </div>
    </header>
  );
}
