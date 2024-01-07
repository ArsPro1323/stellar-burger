import styles from "./ingredient-substance.module.css"
import { SubstanceProps } from "./ingredient-substancse-types"

export default function IngredientSubstance(props: SubstanceProps) {
  return (
    <div className={styles.table}>
      <h3 className="text text_type_main-default pb-2">{ props.name }</h3>
      <p className="text text_type_main-medium">{ props.amount }</p>
    </div>
  )
}