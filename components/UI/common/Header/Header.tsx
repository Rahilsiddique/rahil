"use client";
import { usePathname } from "next/navigation";
import { APP_ROUTE } from "../../../../libs/constants/routes";
import { twclsx } from "../../../../libs/twclsx";
import { UnstyledLink } from "../../links";
import { useWindowScrollY } from "../../../../hooks/useWindowsScrollY";
import { MobileNav } from "./MobileNav";
import ThemeMenu from "./ThemeMenu";

const Header = () => {
  const y = useWindowScrollY();
  return (
    <header
      className={twclsx(
        "sticky top-0 inset-x-0 z-50",
        "border-b border-b-transparent",
        "bg-theme-50 dark:bg-theme-900",
        "supports-[backdrop-filter:blur(0px)]:bg-theme-50/60 dark:supports-[backdrop-filter:blur(0px)]:bg-theme-900/60",
        "supports-[backdrop-filter:blur(0px)]:backdrop-blur-xl",
        y > 34 && "border-b-theme-300 dark:border-b-theme-600"
      )}
    >
      <nav className="flex items-center justify-end h-16 layout md:justify-between md:h-20">
        <div className="hidden gap-1 space-x-3 dark:text-white md:flex md:items-center">
          {APP_ROUTE.map(route => {
            return (
              <UnstyledLink
                className={twclsx(
                  "font-semibold border-b-2 border-dashed",
                  usePathname().toString() === route.path
                    ? "dark:border-white border-black"
                    : "border-transparent"
                )}
                href={route.path}
                key={route.path}
              >
                {route.name}
              </UnstyledLink>
            );
          })}
        </div>
        <div className="inline-flex items-center justify-end space-x-2.5 md:space-x-0">
          <ThemeMenu />
          <MobileNav />
        </div>
      </nav>
    </header>
  );
};

export default Header;
