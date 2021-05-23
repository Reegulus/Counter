import React from "react";
import styles from './Display.module.css'

type DisplayPropsType = {
    count: number
    maxValue: number
}

export function Display(props: DisplayPropsType) {
    return (
        <div className={styles.display}>
            <span className={props.count === props.maxValue ? styles.count : ""}>{props.count}</span>
        </div>
    )
}
