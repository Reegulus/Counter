import React from "react";
import {Display} from "./Display";
import {Button} from "./Button";

type CountPropsType = {
    incCount: () => void
    resetCount: () => void
    count: number
    maxValue: number
}
export function Counter(props: CountPropsType) {
return (
    <div className={"display"}>
        <Display count={props.count} maxValue={props.maxValue}/>
        <Button
            incCount={props.incCount}
            resetCount={props.resetCount}
            maxValue={props.maxValue}
            count={props.count}
        />
    </div>
)
}
