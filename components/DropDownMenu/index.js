import { useRouter } from 'next/router';

import CloseIcon from '../Icons/closeIcon.js';

import styles from './dropDownMenu.module.css';

const DropDownMenu = ({ handleMenu }) => {
  const router = useRouter();

  const handleNav = (path) => {
    handleMenu();
    router.push(path);
  };

  return (
    <div className={styles.dropDownMenu_layout}>
      <div className={styles.menu_container}>
        <div
          onClick={handleMenu}
          className={styles.close_menu} //27px px
        >
          <span className={styles.span_nav}>Cerrar</span>
          <CloseIcon />
        </div>
        <nav className={styles.nav_content}>
          <ul className={styles.ul_list_menu}>
            <li className={styles.text_menu}>
              <a onClick={() => handleNav('/home')}>Modelos</a>
            </li>
            <li className={styles.text_menu}>Financiación</li>
            <li className={styles.text_menu}>Reviews y Comunidad</li>
          </ul>
          <div className={styles.menu_hr} />
          <ul className={styles.ul_list_menu}>
            <li className={styles.text_menu}>Toyota Mobility Service</li>
            <li className={styles.text_menu}>Toyota Gazoo Racing</li>
            <li className={styles.text_menu}>Toyota Híbridos</li>
          </ul>
          <div className={styles.menu_hr} />
          <ul className={styles.ul_list_menu}>
            <li className={styles.text_menu}>Concesionarios</li>
            <li className={styles.text_menu}>Test Drive</li>
            <li className={styles.text_menu}>Contacto</li>
          </ul>
          <div className={styles.about_links}>
            <ul className={styles.ul_list_menu}>
              <li className={styles.text_menu}>Actividades</li>
              <li className={styles.text_menu}>Servicios al Cliente</li>
              <li className={styles.text_menu}>Ventas especiales</li>
              <li className={styles.text_menu}>Innovación</li>
              <li className={styles.text_menu}>Prensa</li>
              <li className={styles.text_menu}>Acerca de...</li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default DropDownMenu;
