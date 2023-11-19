import React, { useEffect, useState } from 'react';
import styles from "./burger-ingredients.module.css";
import IngredientsTable from './ingredient-table/ingredient-table';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import { IngredientsType } from './burger-ingredients-types';

export default function BurgerIngredients(props: IngredientsType) {
  const [current, setCurrent] = React.useState('bun')
  
  return(
    <section className={styles.ingredientsSection}>
      <h2 className={`${styles.heading} text text_type_main-large pt-10`}>Соберите бургер</h2>
      
      <div style={{ display: 'flex' }} className='tabs pt-5 pb-10'>
        <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
          Булка
        </Tab>
        <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
          Соус
        </Tab>
        <Tab value="main" active={current === 'main'} onClick={setCurrent}>
          Основа
        </Tab>
      </div>
      
      <IngredientsTable name='Булки' items={ props.buns }/>
      <IngredientsTable name='Соусы' items={ props.sauces }/>
      <IngredientsTable name='Основа' items={ props.mains }/>
    </section>
  )    

}