import { APP_ROUTE } from '../../../../libs/constants/routes'
import { twclsx } from '../../../../libs/twclsx'
import { UnstyledLink } from '../../links'

const Header = () => {
  return (
    <header className={twclsx(``)}>
      <nav>
        <div className='flex gap-5'>
          {APP_ROUTE.map(route => {
            return (
              <UnstyledLink className={twclsx('font-semibold border-b-2 border-dashed')} href={route.path} key={route.path}>
                {route.name}
              </UnstyledLink>
            )
          })}
        </div>
      </nav>
    </header>
  )
}

export default Header