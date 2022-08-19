import { ActiveLink } from './ActiveLink'
import styles from './Navbar.module.css'

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export function Navbar() {
  return (

    <nav className={styles.menu}>
    {
      menuItems.map(({href, text}) => (
        <ActiveLink href={href} text={text} key={href}/>
      ))
    }
    </nav>
  )
}
