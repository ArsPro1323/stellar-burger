import Modal from '../modal/modal';
import { OrderDetailsType } from './order-details-types';
import image from "../../images/done.png"
import styles from "./order-details.module.css"

export default function OrderDetails({onModalClose, orderId}: OrderDetailsType) {
  return(
    <Modal onClose={onModalClose} header={""}>
      <h2 className='text text_type_digits-large'> {orderId} </h2>
      <p className="text text_type_main-medium pt-8 pb-15">Идентификатор заказа</p>
      <img src={ image } alt="done" className='pb-15'/>
      <p className='pb-2 text text_type_main-default'>Ваш заказ начали готовить</p>
      <p className={`${styles.smallText} pb-30 text text_type_main-default`}>Дождитесь готовности на орбитальной станции</p>
    </Modal>
  );
}