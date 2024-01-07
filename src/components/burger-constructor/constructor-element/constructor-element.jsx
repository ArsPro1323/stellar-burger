import React from 'react';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from "./burger-element.module.css"
import { useDispatch } from 'react-redux';
import {removeIngredients, swapElements} from '../../../services/actions/constructor-action';
import { useDrag, useDrop } from 'react-dnd';
import { useRef } from 'react';

export function ConstructorTopElement(props) {
  return(
    <div className={`${styles.ingredientCard} ${styles.bunElement}`}>
      <div className={`${styles.constructorIngredient} pl-2`}>
        <ConstructorElement
          type = "top"
          isLocked={ props.isLocked }
          text = { `${props.item.name} (верх)` }
          price={ Number(props.item.price) }
          thumbnail={ props.item.image }
        />
      </div>
      {!props.isLocked ? <DragIcon type="primary" /> : null }
    </div>
  )    
}

export function ConstructorBottomElement(props) {
  return(
    <div className={`${styles.ingredientCard} ${styles.bunElement}`}>
      <div className={`${styles.constructorIngredient} pl-2`}>
        <ConstructorElement
          type = "bottom"
          isLocked={ props.isLocked }
          text = { `${props.item.name} (низ)` }
          price={ Number(props.item.price) }
          thumbnail={ props.item.image }
        />
      </div>
      {!props.isLocked ? <DragIcon type="primary" /> : null }
    </div>
  )    
}

export function ConstructorMidElement({ index, isLocked, item }) {
  const dispatch = useDispatch();
  const ref = useRef();
  
  const [{ isDragging}, dragBetween] = useDrag(() => ({
    type: 'cardBetween',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    })
  }))

  const [{ isOverBetween }, dropBetween] = useDrop(() => ({
    accept: 'cardBetween',
    collect: (monitor) => ({
      isOverBetween: monitor.isOver(),
    }),
    drop: (curItem) => {
      dispatch(swapElements(curItem.index, index));
    }
  }))

  return(
    <div ref={ dragBetween(dropBetween(ref)) } className={styles.ingredientCard}>
      <div className={`${styles.constructorIngredient} pl-2`}>
        <ConstructorElement
          isLocked={ isLocked }
          text = { item.name }
          price={ Number(item.price) }
          thumbnail={ item.image }
          handleClose={ () => {
            dispatch(removeIngredients(index));
          }}
        />
      </div>
      {!isLocked ? <DragIcon type="primary" /> : null }
    </div>
  )    
}