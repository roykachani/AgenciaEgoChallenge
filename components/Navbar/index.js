import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { MenuIcon } from '../Icons/menuIcon.js';
import DropDownMenu from '../DropDownMenu/index.js';
import logo from '../../public/assets/logo.svg';

import styles from './nav.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.nav_container}>
      <div className={styles.nav}>
        <div className={styles.nav_logo}>
          <Image
            src={logo}
            alt="Logo Agencia Ego"
            width={38}
            height={40}
            className={styles.logo_img}
            onClick={() => router.push('/')}
            priority={true}
          />
        </div>
        <div className={styles.selected_link}>
          <div
            className={
              router.pathname === '/home'
                ? `${styles.nav_links} ${styles.nav_selected}`
                : `${styles.nav_links}`
            }
            onClick={() => router.push('/home')}
          >
            Modelos
          </div>
          <div
            className={
              router.pathname === '/fichaTecnica/[modelsId]'
                ? `${styles.nav_links} ${styles.nav_selected}`
                : `${styles.nav_links_none}`
            }
          >
            Ficha de modelo
          </div>
        </div>
      </div>
      <div className={styles.nav_menu} onClick={handleMenu}>
        <span className={styles.span_nav}>Menú</span>
        <MenuIcon />
      </div>
      {!!isOpen && <DropDownMenu handleMenu={handleMenu} />}
    </div>
  );
};
export default Navbar;
