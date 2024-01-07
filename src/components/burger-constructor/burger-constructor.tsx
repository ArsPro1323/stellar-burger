import { useCallback, useRef, useState } from 'react';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from "./burger-constructor.module.css"
import OrderDetails from '../orders-details/orders-details';
import { useDispatch, useSelector } from 'react-redux';
import {addIngredient, changeBun, sendIngredients} from '../../services/actions/constructor-action';
import {
  ConstructorBottomElement,
  ConstructorMidElement,
  ConstructorTopElement
} from './constructor-element/constructor-element';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrop } from "react-dnd";
import { clearConstructor } from '../../services/actions/constructor-action';
import { AppDispatch, RootState } from '../../services/reducers/store';
import { Ingredients } from '../../services/get-ingredients/get-ingredients-types';

export function BurgerConstructor() {
  const myRef = useRef();
  const handleAdding = (item: any, pos: any) => {
    if (item && item.type === 'bun') {
      dispatch(changeBun(item));
    } else {
      dispatch(addIngredient(item));
    }
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  

  const dispatch = useDispatch<AppDispatch>();
  const {elements, bun} = useSelector((state: RootState) => state.elementConstructor)

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'card',
    drop: (item) => {
      handleAdding(item, elements.length);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }))

  const [{ isOverBetween }, dropBetween] = useDrop(() => ({
    accept: 'cardBetween',
    collect: (monitor) => ({
      isOverBetween: monitor.isOver(),
    }),
  }))

  function onModalClose() {
    setIsModalOpen(false);
  }

  const calcOrderSum = useCallback(() => {
    return 2 * (bun?.price ?? 0) + elements.reduce((acc, item) => {
      return acc + item.price
    }, 0)
  }, [elements, bun])

  const makeOrder = useCallback(async () => {
    const baseElements = elements.map(elem => elem._id);
    const ingredients = bun ? baseElements.concat(bun._id) : baseElements;
    await dispatch(sendIngredients({ingredients}));
    dispatch(clearConstructor());
    setIsModalOpen(true);
  }, [elements, bun])

  const { v4: uuidv4 } = require('uuid');

  const order = useSelector((state: RootState) => state.order.orderId);

  return(
    // @ts-ignore
    <section ref={drop(dropBetween(myRef))} className={`${styles.burgerConstructor} pt-25`}>
      <div className={ styles.elements }>
        { bun && (
            <ConstructorTopElement isLocked={true} item={bun} index={-1} />
        )} 
        <div className={ styles.mainElements }>
          {elements.map((item, index) => {
              return <ConstructorMidElement key={ uuidv4() } isLocked={false} item={item} index={index}/>
          })}
        </div>
        
        { bun && (
            <ConstructorBottomElement isLocked={true} item={bun} index={-1} />
        )}
      </div>

      <div className={`${styles.buttonSection} pt-8`}>
        <p className={`${styles.amount} text text_type_main-medium pr-10`}>{ calcOrderSum() } <CurrencyIcon type="primary" /></p>
        <Button htmlType="button" type="primary" size="large" onClick={ (elements.length !== 0 || bun !== null) ? makeOrder : () => {} } >Оформить заказ</Button>
      </div>
      {isModalOpen && (
        <OrderDetails onModalClose={onModalClose} orderId={ order } />
      )}
    </section>
  )
}