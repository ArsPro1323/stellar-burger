import React, { useState } from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { cardData } from './data';
import styles from './card.module.css';
import Modal from '../../../modal/modal';
import IngredientDetails from '../../../ingredient-details/ingredient-details';
import { Ingredients } from '../../../../services/get-ingredients/get-ingredients-types';

export default function IngredientCard(props: cardData) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState<Ingredients>();

  function onModalClose() {
    setIsModalOpen(false);
  }

  function onModalOpen(header: string, item: Ingredients) {
    setModalData(item);
    setIsModalOpen(true);
  }

  return(
    <>
      <div className={`${styles.card} pb-2 pt-6 pl-4 pr-2`} onClick={() => onModalOpen(props.name, props.item)}>
        <img src={ props.image } alt={ props.name } className='img pl-4 pr-4 pt-6' />
        <p className={`${styles.price} text text_type_digits-default pt-1 pb-4`}><span className={styles.priceAmount}>{ props.price }</span><CurrencyIcon type="primary" /></p>
        <p className={`${styles.ingredientName} text text_type_main-default`}>{ props.name }</p>
      </div>
      {isModalOpen && (
        <Modal onClose={ onModalClose } header={"Детали ингредиента"}>
          <IngredientDetails item={modalData} onModalClose={ onModalClose }/>
        </Modal>
      )}
    </>
  )
}