import React, {useState} from "react";

export function Display() {
    let [count, setCount] = useState(0)

    function incNumbers() {
        // setNumbers(numbers)
        if (count < 5) {
            return
        }
        setCount(count++)
    }

    function resetNumbers() {
        setCount(0)
    }
    return(
        <div className={"button"}>
            <p>{count}</p>
            <button onClick={incNumbers}>inc</button>
            <button onClick={resetNumbers}>reset</button>
        </div>
    )
}
