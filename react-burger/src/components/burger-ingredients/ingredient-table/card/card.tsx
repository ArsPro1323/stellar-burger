import React from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { cardData } from './data';
import styles from './card.module.css';

export default function IngredientCard(props: cardData) {
  return(
    <div className={`${styles.card} pb-2 pt-6 pl-4 pr-2`} onClick={ props.onClick }>
        <img src={ props.image } alt={ props.name } className='img pl-4 pr-4 pt-6' />
        <p className={`${styles.price} text text_type_digits-default pt-1 pb-4`}><p className={styles.priceAmount}>{ props.price }</p><CurrencyIcon type="primary" /></p>
        <p className={`${styles.ingredientName} text text_type_main-default`}>{ props.name }</p>
    </div>
    )
}