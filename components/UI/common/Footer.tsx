import APP_ROUTE, { ADDT_ROUTE } from "../../../libs/constants/routes";
import { UnstyledLink } from "../links";

const Footer = () => {
  return (
    <footer>
        <div className="flex flex-col w-full space-y-3 md:flex-row md:space-x-3 md:space-y-0 md:max-w-max">
          {APP_ROUTE.map(route =>
            <UnstyledLink
              href={route.path}
              key={`footer-${route.path}`}
              className="text-sm font-medium border-b border-transparent border-dashed md:max-w-max hover:border-b-theme-500 text-theme-500 dark:text-theme-400"
            >
              {route.name}
            </UnstyledLink>
          )}
        </div>
        <div className='flex flex-col w-full space-y-3 md:flex-row md:space-x-3 md:space-y-0 md:max-w-max'>
          {ADDT_ROUTE.map((route) => (
            <UnstyledLink
              href={route.path}
              key={`footer-${route.path}`}
              className='text-sm font-medium border-b border-transparent border-dashed md:max-w-max hover:border-b-theme-500 text-theme-500 dark:text-theme-400'
            >
              {route.name}
            </UnstyledLink>
          ))}
        </div>
    </footer>
  );
};

export default Footer;
