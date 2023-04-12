"use client";
import { usePathname } from "next/navigation";
import { APP_ROUTE } from "../../../../libs/constants/routes";
import { twclsx } from "../../../../libs/twclsx";
import { UnstyledLink } from "../../links";

const Header = () => {
  console.log(typeof usePathname().toString());

  return (
    <header className={twclsx(``)}>
      <nav>
        <div className="flex gap-5 text-white">
          {APP_ROUTE.map(route => {
            return (
              <UnstyledLink
                className={twclsx(
                  "font-semibold border-b-2 border-dashed",
                  usePathname().toString() === route.path
                    ? "border-theme-800"
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
      </nav>
    </header>
  );
};

export default Header;
