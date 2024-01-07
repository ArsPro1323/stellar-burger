import React, { useCallback, useMemo } from 'react';
import styles from "./burger-ingredients.module.css";
import IngredientsTable from './ingredient-table/ingredient-table';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import { IngredientsType } from './burger-ingredients-types';
import { useSelector } from 'react-redux';
import store from '../../services/reducers/store';
import { RootState } from '../../services/reducers/store';
import { AppDispatch } from '../../services/reducers/store';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { initialiseIngredients } from '../../services/actions/ingredients-actions';
import { useRef } from 'react';

export default function BurgerIngredients() {
  const dispatch = useDispatch<AppDispatch>();
  const [current, setCurrent] = React.useState('bun')
  
  const bunTabRef = useRef<HTMLDivElement>(null);
  const sauceTabRef = useRef<HTMLDivElement>(null);
  const mainTabRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
      dispatch(initialiseIngredients());
  }, []);

  const menuAbsoluteHeightHalf = useMemo(() => {
    return menuRef.current?.offsetHeight ?? 0;
  }, [menuRef.current?.offsetHeight]);

  useEffect(() => {
    const menu = menuRef.current;
    if (menu) {
      const onScroll = () => {
        const bunTab = bunTabRef.current;
        const sauceTab = sauceTabRef.current;
        const mainTab = mainTabRef.current;

        if (bunTab && sauceTab && mainTab) {
          const bunTabTop = bunTab.getBoundingClientRect().top;
          const sauceTabTop = sauceTab.getBoundingClientRect().top;
          const mainTabTop = mainTab.getBoundingClientRect().top;

          if (bunTabTop >= 0 && bunTabTop <= menuAbsoluteHeightHalf) {
            setCurrent('bun');
          } else if (sauceTabTop >= 0 && sauceTabTop <= menuAbsoluteHeightHalf) {
            setCurrent('sauce');
          } else if (mainTabTop >= 0 && mainTabTop <= menuAbsoluteHeightHalf) {
            setCurrent('main');
          }
        }
      };

      menu.addEventListener('scroll', onScroll);
      return () => {
        menu.removeEventListener('scroll', onScroll);
      };
    }
  }, [menuRef.current?.offsetHeight]);

  const scrollToTab = useCallback((current: string) => {
    if (current === 'bun') {
      bunTabRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (current === 'sauce') {
      sauceTabRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (current === 'main') {
      mainTabRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [current]);

  const handleTabClick = useCallback((current: string) => {
    setCurrent(current);
    scrollToTab(current);
  }, [current]);

  // const { buns, mains, sauces } = useSelector((store: RootState)  => ({
  //   buns: store.ingredients.bun,
  //   mains: store.ingredients.main,
  //   sauces: store.ingredients.sauce
  // }))

  const buns = useSelector((store: RootState) => store.ingredients.entities.bun);
  const mains = useSelector((store: RootState) => store.ingredients.entities.main);
  const sauces = useSelector((store: RootState) => store.ingredients.entities.sauce);

  return(
    <div className={styles.ingredientsSection}>
      <h2 className={`${styles.heading} text text_type_main-large pt-10`}>Соберите бургер</h2>
        
      <div className={`${styles.tabs} pt-5 pb-10`}>
        <Tab value="bun" active={current === 'bun'} onClick={handleTabClick}>
          Булка
        </Tab>
        <Tab value="sauce" active={current === 'sauce'} onClick={handleTabClick}>
          Соус
        </Tab>
        <Tab value="main" active={current === 'main'} onClick={handleTabClick}>
          Основа
        </Tab>
      </div> 
        
      <div className={styles.ingredientsTable} ref={menuRef}>
        <IngredientsTable name='Булки' items={buns} innerRef={bunTabRef} />
        <IngredientsTable name='Соусы' items={sauces} innerRef={sauceTabRef}/>
        <IngredientsTable name='Основа' items={mains} innerRef={mainTabRef}/>
      </div>
    </div>
  )    

}