import React, { useState } from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { cardData } from './data';
import styles from './card.module.css';
import Modal from '../../../modal/modal';
import IngredientDetails from '../../../ingredient-details/ingredient-details';
import { Ingredients } from '../../../../services/get-ingredients/get-ingredients-types';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../services/reducers/store';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../services/reducers/store';
import { closeModal, openModal } from '../../../../services/actions/modal-action';
import {useDrag} from "react-dnd";

function countElements (elems: Ingredients[], bun: Ingredients | null, _id: string) {
  let ans = 0;
  for (let i = 0; i < elems.length; i++) {
    if (elems[i]._id === _id) {
      ans++;
    }
  }
  if (bun && bun._id === _id) {
    ans++;
  }
  return ans;
}

export default function IngredientCard(props: Ingredients) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState<Ingredients>();

  const dispatch = useDispatch<AppDispatch>();
  const modalElement = useSelector((state: RootState) => state.modalWindow)

  const [{isDragging}, drag] = useDrag(() => ({
    type: 'card',
    item: props,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    })
  }))

  const { elements, bun } = useSelector((state: RootState) => state.elementConstructor)

  return(
    <>
      <div ref={drag} className={`${styles.card} pb-2 pt-6 pl-4 pr-2`} onClick={() => dispatch(openModal(props))}>
        {countElements(elements, bun, props._id) !== 0 && (
          <div className={`${styles.amount} text text_type_digits-default`}>{countElements(elements, bun, props._id)}</div>
        )}
        <img src={ props.image } alt={ props.name } className='img pl-4 pr-4 pt-6' />
        <p className={`${styles.price} text text_type_digits-default pt-1 pb-4`}><span className={styles.priceAmount}>{ props.price }</span><CurrencyIcon type="primary" /></p>
        <p className={`${styles.ingredientName} text text_type_main-default`}>{ props.name }</p>
      </div>
      {modalElement.isOpened && (
        <Modal onClose={ () => dispatch(closeModal()) } header={"Детали ингредиента"}>
          <IngredientDetails onModalClose={ () => dispatch(closeModal()) }/>
        </Modal>
      )}
    </>
  )
}