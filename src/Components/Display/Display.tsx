import React from "react";
import "./Display.css"

type DisplayPropsType = {
    count: number
    maxValue: number
}

export function Display(props: DisplayPropsType) {
    return (
        <div>
            <span className={props.count === props.maxValue ? "display" : ""}>{props.count}</span>
        </div>
    )
}
