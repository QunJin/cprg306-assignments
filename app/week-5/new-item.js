"use client"

import { useState } from "react";

export default function NewItem(){

    const [quantity, setQuantity] = useState(1)
    const [name, setName] = useState("")
    const [category, setCategory] = useState("Produce")

    const resetForm = () => {
        setName("");
        setQuantity(1);
        setCategory("Produce");
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let item={
            name: name,
            quantity: quantity,
            category: category
        }

        console.log(item)

        alert(`
        Added item: ${item.name}, quantity: ${item.quantity}, category: ${item.category}
        `)
        resetForm();
    }

    const handleChangeName = (event) => {
        setName(event.target.value);
    }

    const handleChangeQuantity = (event) => {
        setQuantity(event.target.value);
    }

    const handleChangeCategory = (event) => {
        setCategory(event.target.value);
    }

    const increment = () => {
        if (quantity < 20){setQuantity(quantity + 1)}
    };

    const decrement = () => {
        if (quantity > 1){setQuantity(quantity - 1)}
    };

    let buttonStylesDecrement = "bg-blue-500 mr-2 w-10 rounded-2xl hover:bg-blue-400 transition-colors active:bg-blue-300"
    if (quantity === 1){
        buttonStylesDecrement = "bg-gray-400 mr-2 w-10 rounded-2xl cursor-not-allowed"
    };

    let buttonStylesIncrement = "bg-blue-500 mr-2 w-10 rounded-2xl hover:bg-blue-400 transition-colors active:bg-blue-300"
    if (quantity === 20){
        buttonStylesIncrement = "bg-gray-400 mr-2 w-10 rounded-2xl cursor-not-allowed"
    }

    return(
        <main>
            <form className="bg-blue-950 shadow-lg flex flex-col max-w-lg mx-auto mt-10 justify-center p-3" onSubmit={handleSubmit}>
            <div className="pb-2">
                <input className="border border-gray-300 p-2 rounded-lg w-full bg-white text-black" type="text" placeholder="Item Name" value={name} onChange={handleChangeName} required/>
            </div>
            <div className="flex flex-row pb-2">
                <div className ="bg-white text-center justify-center p-2 rounded flex flex-row">
                    <p className="text-black px-4" value={quantity}>{quantity}</p>
                    <button className={buttonStylesDecrement} onClick={decrement} type="button">-</button>
                    <button className={buttonStylesIncrement} onClick={increment} type="button">+</button>
                </div>
                <select className="border border-gray-300 p-2 ml-48 rounded-lg bg-white text-black" value={category} onChange={handleChangeCategory}>
                    <option value="Produce">Produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Meat">Meat</option>
                    <option value="Frozen Foods">Frozen Foods</option>
                    <option value="Canned Goods">Canned Goods</option>
                    <option value="Dry Goods">Dry Goods</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Household">Household</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div className="text-center">
                <button className="bg-blue-500 px-60 py-3 rounded-lg hover:bg-blue-400 transition-colors active:bg-blue-300 text-center font-bold" type="submit">+</button>
            </div>
            </form>
        </main>
    )

}