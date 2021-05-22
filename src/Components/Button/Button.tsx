import React from "react";
import styles from './Button.module.css'


type ButtonPropsType = {
    incCount: () => void
    resetCount: () => void
    maxValue: number
    count: number
}
export function Button(props: ButtonPropsType) {

    return(
        <div className={styles.buttonGeneral}>
            <input type={"button"} value={"value +"} className={styles.btnValue} disabled={props.count === props.maxValue} onClick={props.incCount}/>
            <input type={"button"} value={"reset 0"} className={styles.btnReset} disabled={props.count === 0} onClick={props.resetCount}/>
            <div>

            </div>
        </div>
    )
}
