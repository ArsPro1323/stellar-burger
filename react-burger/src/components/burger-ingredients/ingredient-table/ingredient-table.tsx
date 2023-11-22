import React, { useState } from 'react';
import { IngredientsItemType } from './ingredient-item-name';
import IngredientCard from './card/card';
import styles from './ingredient-table.module.css'
import { Ingredients } from '../../../services/get-ingredients/get-ingredients-types';
import IngredientDetails from '../../ingredient-details/ingredient-details';
import Modal from '../../modal/modal';

export default function IngredientsTable(props: IngredientsItemType) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalHeader, setModalHeader] = useState("");
  const [modalData, setModalData] = useState<Ingredients>();


  function onModalClose() {
    setIsModalOpen(false);
  }

  function onModalOpen(header: string, item: Ingredients) {
    setModalHeader(header);
    setModalData(item);
    setIsModalOpen(true);
  }

  return(
    <div className={styles.ingredientTable}>
      <h2 className={`${styles.ingredientHeading} text text_type_main-medium`}>{ props.name }</h2>
      <div className={`${styles.itemsContainer} pb-10`}>
        { props.items.map((item) => (
            <div key={ item._id }>
              <IngredientCard name={item.name} image={item.image} price={item.price} onClick={() => onModalOpen(item.name, item)} />
              {isModalOpen && (
                <Modal onClose={onModalClose} header={"Детали ингредиента"}>
                  <IngredientDetails item={modalData} onModalClose={onModalClose}/>
                </Modal>
              )}
            </div>
        ))}
        
      </div>
    </div>
  );
}