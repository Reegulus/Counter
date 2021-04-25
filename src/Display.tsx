import React from "react";
import "./Display.css"

type DisplayPropsType = {
    count: number
    maxValue: number
}

export function Display(props: DisplayPropsType) {
    return (
        <div className={"display"}>
            <span className={props.count === props.maxValue ? "error" : ""}>{props.count}</span>
        </div>
    )
}
