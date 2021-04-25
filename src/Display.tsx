import React from "react";


type DisplayPropsType = {
count: number
}
export function Display(props: DisplayPropsType) {
return (
    <div className={"display"}>
        <p>{props.count}</p>
    </div>
)}
