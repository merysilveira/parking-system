import styles from './Header.module.css';
import parkingLogo from '../assets/parking-logo.svg';
import { Menu } from './Menu';

export function Header() {
  return (
    <header className={styles.header}>
      <img className="logo" src={parkingLogo} alt="Logotipo do Parking" />
      <Menu />
    </header>
  )
}