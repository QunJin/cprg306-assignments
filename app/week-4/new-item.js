"use client";

import { useState } from "react";


export default function NewItemComp(){

    const [quantity, setQuantity] = useState(0);

    const increment = () =>{
        if (quantity < 20){
            setQuantity(quantity + 1);
        }
    }

    const decrement = () =>{
        if (quantity > 1){
            setQuantity(quantity - 1);
        }
    }

    let buttonStyleInc = "w-8 h-8 flex items-center justify-center bg-blue-700 text-white rounded m-2 p-2 cursor-pointer hover:bg-blue-500 active:bg-blue-300 transition-colors";
    let buttonStyleDec = "w-8 h-8 flex items-center justify-center bg-blue-700 text-white rounded m-2 p-2 cursor-pointer hover:bg-blue-500 active:bg-blue-300 transition-colors";

    if (quantity >= 20){
        buttonStyleInc = "w-8 h-8 flex items-center justify-center bg-gray-500 text-white rounded m-2 p-2";
    }
    if (quantity <= 1){
        buttonStyleDec = "w-8 h-8 flex items-center justify-center bg-gray-500 text-white rounded m-2 p-2";
    }

    return (
        <div className="flex flex-col items-center justify-center text-white bg-gray-900">

        <label className="mb-4 text-lg font-medium">Choose quantity:</label>

      <div className="flex items-center space-x-4">
        <span className="text-xl pr-2 mr-0">{quantity}</span>

        <button
          onClick={increment}
          className={buttonStyleInc}
        >
          +
        </button>

        <button
          onClick={decrement}
          className={buttonStyleDec}
        >
          -
        </button>
      </div>

            {/* <h1>quantity: {quantity}</h1>

            <button onClick={increment} className={buttonStyleInc} > + </button>
            <button onClick={decrement} className={buttonStyleDec} > - </button> */}
        </div>
    );
}


