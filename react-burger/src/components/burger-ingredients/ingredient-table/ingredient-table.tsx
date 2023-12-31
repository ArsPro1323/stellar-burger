import React, { useState } from 'react';
import { IngredientsItemType } from './ingredient-item-name';
import IngredientCard from './card/card';
import styles from './ingredient-table.module.css'
import { Ingredients } from '../../../services/get-ingredients/get-ingredients-types';
import IngredientDetails from '../../ingredient-details/ingredient-details';
import Modal from '../../modal/modal';

export default function IngredientsTable(props: IngredientsItemType) {
  return(
    <div className={styles.ingredientTable}>
      <h2 className={`${styles.ingredientHeading} text text_type_main-medium`}>{ props.name }</h2>
      <div className={`${styles.itemsContainer} pb-10`}>
        { props.items.map((item) => (
          <IngredientCard key={ item._id } name={item.name} image={item.image} price={item.price} item={ item }/>
        ))} 
      </div>
    </div>
  );
}