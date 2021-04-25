import React, {useState} from "react";

type ButtonPropsType = {
    incCount: () => void
    resetCount: () => void
    maxValue: number
    count: number
}
export function Button(props: ButtonPropsType) {

    return(
        <div className={"button"}>
            <button disabled={props.count === props.maxValue} onClick={props.incCount}>inc</button>
            <button disabled={props.count === 0} onClick={props.resetCount}>reset</button>
        </div>
    )
}
