import React, { useState, useEffect, ReactNode } from 'react';
import ReactDOM from 'react-dom/client';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import { BurgerConstructor } from '../burger-constructor/burger-constructor';
import getIngredients from '../../services/get-ingredients/get-ingredients';
import { Ingredients } from '../../services/get-ingredients/get-ingredients-types';
import styles from "./main.module.css";


export default function MainContent() {
    const [main, setMainData] = useState<Ingredients[]>([])
    const [bun, setBunData] = useState<Ingredients[]>([])
    const [sauce, setSauceData] = useState<Ingredients[]>([])
    const [loading, setLoaded] = useState(false)

    useEffect(() => {
        async function getData() {
            const url = "https://norma.nomoreparties.space/api/ingredients";
            const res = await getIngredients(url);
            
            setMainData(res.data.filter((item: Ingredients) => item.type === "main"))
            setBunData(res.data.filter((item: Ingredients) => item.type === "bun"))
            setSauceData(res.data.filter((item: Ingredients) => item.type === "sauce"))
            setLoaded(Boolean(res.success));
        }
        getData().catch((err) => console.log("error while recieveng data: ", err));
    }, [])
    
    const [modalChild, setModalChild] = React.useState<ReactNode | ''>('');
    const [modalHeader, setModalHeader] = React.useState('');


    if (loading) {
        return (
            <>
                <main className={styles.mainWindow}>
                    <BurgerIngredients buns={bun} mains={main} sauces={sauce} />
                    <BurgerConstructor buns={bun} mains={main} sauces={sauce} />
                </main>  
            </>
        );
    }
    return (
        <></>
    );
}