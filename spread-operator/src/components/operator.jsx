import { useState } from "react";

export function Operator(){
    const [nums, setNums] = useState([1,2,3,4,5])

    //arrow function
    const addNums = () => {
        setNums([...nums,6])

    }

    return (
        <>
        {nums.map((num, index) => (
            <p key={index}>{num}</p>
        ))}
        <h3>Spread Operator</h3>
        <button onClick={addNums}>Click me!</button>
        </>
    )
}