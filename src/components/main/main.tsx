import React, { useState, useEffect, ReactNode } from 'react';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import { BurgerConstructor } from '../burger-constructor/burger-constructor';
import styles from "./main.module.css";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

export default function MainContent() {
    return (
        <DndProvider backend={HTML5Backend}>
            <main className={styles.mainWindow}>
                <BurgerIngredients/>
                <BurgerConstructor/>
            </main>
        </DndProvider>
    );
}