import { useState } from "react";

export function Contador(){
    const [nums, setNums] = useState([0])

    //arrow function
    const addNums = () => {

        const Lastnum = nums[nums.length - 1]; // obtiene el último número del array
        setNums([...nums,Lastnum + 1]) // crea un nuevo array copiando nums y le agrega (último + 1)
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