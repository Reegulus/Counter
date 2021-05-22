import React from "react";
import styles from './Counter.module.css'
import {Display} from "../Display/Display";
import {Button} from "../Button/Button";

type CountPropsType = {
    incCount: () => void
    resetCount: () => void
    count: number
    maxValue: number
}
export function Counter(props: CountPropsType) {
return (
    <div className={styles.counter}>
        <Display
            count={props.count}
            maxValue={props.maxValue}
        />
        <Button
            incCount={props.incCount}
            resetCount={props.resetCount}
            maxValue={props.maxValue}
            count={props.count}
        />
    </div>
)
}
