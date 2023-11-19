import React from 'react';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ElementProps } from './constructor-element-types';
import { Ingredients } from '../../../services/get-ingredients/get-ingredients-types';
import styles from "./burger-element.module.css"

export function ConstructorTopElement(props: ElementProps) {
  return(
    <div className={styles.ingredientCard}>
      <div className={`${styles.constructorIngredient} pl-2`}>
        <ConstructorElement
          type = "top"
          isLocked={ props.isLocked }
          text = { props.item.name }
          price={ Number(props.item.price) }
          thumbnail={ props.item.image }
        />
      </div>
      {!props.isLocked ? <DragIcon type="primary" /> : null }
    </div>
  )    
}

export function ConstructorBottomElement(props: ElementProps) {
  return(
    <div className={styles.ingredientCard}>
      <div className={`${styles.constructorIngredient} pl-2`}>
        <ConstructorElement
          type = "bottom"
          isLocked={ props.isLocked }
          text = { props.item.name }
          price={ Number(props.item.price) }
          thumbnail={ props.item.image }
        />
      </div>
      {!props.isLocked ? <DragIcon type="primary" /> : null }
    </div>
  )    
}

export function ConstructorMidElement(props: ElementProps) {
  return(
    <div className={styles.ingredientCard}>
      <div className={`${styles.constructorIngredient} pl-2`}>
        <ConstructorElement
          isLocked={ props.isLocked }
          text = { props.item.name }
          price={ Number(props.item.price) }
          thumbnail={ props.item.image }
        />
      </div>
      {!props.isLocked ? <DragIcon type="primary" /> : null }
    </div>
  )    
}