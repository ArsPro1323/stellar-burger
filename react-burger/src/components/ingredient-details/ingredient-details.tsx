import Modal from '../modal/modal';
import { IngredientDetailsType } from './ingredient-deatail-types';
import styles from "./ingredient-details.module.css"
import IngredientSubstance from './ingredient-substance/ingredient-substance';

export default function IngredientDetails({item, onModalClose}: IngredientDetailsType) {
  return(
    <>
      <img src={item?.image_large} alt={item?.name} className={styles.image} />
      <h2 className='text text_type_main-medium pt-4'>{item?.name}</h2>
      <div className={ `${styles.substances} pt-8 pb-15` }>
        <IngredientSubstance name='Калории, ккал' amount={item?.calories} />
        <IngredientSubstance name='Белки, г' amount={item?.proteins} />
        <IngredientSubstance name='Жиры, г' amount={item?.fat} />
        <IngredientSubstance name='Углеводы, г' amount={item?.carbohydrates} />
      </div>
    </>
  );
}