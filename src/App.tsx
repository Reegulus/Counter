import React, {useState} from 'react';
import styles from './App.module.css';
import {Counter} from "./Components/mainCounter/Counter/Counter";
import {DisplayValue} from "./Components/parameters/DisplayValue";

function App() {
    const maxValue = 5
    let [count, setCount] = useState(0)

    const incCount = () => {
        if (maxValue === count) {
            return
        }
        setCount(count + 1)
    }

    const resetCount = () => setCount(0)


    return (
        <div className={styles.App} >
            <DisplayValue/>
               <Counter
                   incCount={incCount}
                   resetCount={resetCount}
                   count={count}
                   maxValue={maxValue}
               />

        </div>
    );
}

export default App;

