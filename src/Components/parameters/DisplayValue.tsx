import React from "react";
import {ButtonSet} from "./ButtonSet";

export function DisplayValue() {
    return (
        <div>
           <h1>max value:</h1> <input type="number"/>
           <h1>min value:</h1> <input type="number"/>
            <ButtonSet/>
        </div>
    )
}