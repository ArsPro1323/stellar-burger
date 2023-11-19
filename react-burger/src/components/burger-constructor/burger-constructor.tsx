import React, { useState, useEffect } from 'react';
import { ConstructorElement, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { ConstructorTopElement, ConstructorBottomElement, ConstructorMidElement } from './constructor-element/constructor-element';
import { IngredientsType } from '../burger-ingredients/burger-ingredients-types';
import styles from "./burger-constructor.module.css"
import OrderDetails from '../orders-details/orders-details';

export function BurgerConstructor(props: IngredientsType) {
  let orderAmount = 2 * Number(props.buns[0]?.price ?? 0);
  
  const [amount, changeAmount] = useState(0)
  
  props.sauces.forEach((item) => {
    orderAmount += Number(item.price);
  })

  props.mains.forEach((item) => {
    orderAmount += Number(item.price);
  })

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalHeader, setModalHeader] = useState("");


  function onModalClose() {
    setIsModalOpen(false);
  }

  function onModalOpen() {
    setModalHeader("");
    setIsModalOpen(true);
  }

  return(
    <section className={styles.burgerConstructor}>
      <div className={`${styles.elements} pt-25`} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <ConstructorTopElement isLocked={true} item={props.buns[0]} />
        {props.sauces.map((item) => {
            return <ConstructorMidElement isLocked={false} item={item} />
        })}
        {props.mains.map((item) => {
            return <ConstructorMidElement isLocked={false} item={item} />
        })}
        <ConstructorBottomElement isLocked={true} item={props.buns[1]} />
      </div>
      <div className={`${styles.buttonSection} pt-10`}>
        <p className={`${styles.amount} text text_type_main-medium pr-10`}>{ orderAmount } <CurrencyIcon type="primary" /></p>
        <Button htmlType="button" type="primary" size="large" onClick={() => onModalOpen()}>Оформить заказ</Button>
      </div>
      {isModalOpen && (
        <OrderDetails onModalClose={onModalClose}/>
      )}
    </section>
  )
}