import React from 'react';
import { Logo, BurgerIcon, ListIcon, ProfileIcon  } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from "./app-header.module.css";

export default function AppHeader() {
  return(
    <header className={styles.appHeader}>
      <div className={styles.menu}>
        <a href="#" className={`${styles.link} ${styles.menuLink} ${styles.leftLink}`}><BurgerIcon type="primary" /><h2 className={`${styles.linkText} link-text text text_type_main-default`}>Конструктор</h2></a>
        <a href="#" className={`${styles.link} ${styles.menuLink}`}><ListIcon type="primary" /><h2 className={`${styles.linkText} link-text text text_type_main-default`}>Лента заказов</h2></a>
      </div>
      <div className={styles.headerLogo}>
        <Logo />
      </div>
      <a href="#" className={`${styles.link} ${styles.profileLink}`}><ProfileIcon type="primary" /><h2 className={`${styles.linkText} link-text text text_type_main-default`}>Личный кабинет</h2></a>
    </header>
    )
}