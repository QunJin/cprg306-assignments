"use client"

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json"

import {useState} from "react"




export default function Page(){

        const [itemsArray, setItemsArray] = useState(
    itemsData.map((item)=>({...item}))
    );

    function handleAddItem(newItem){
        setItemsArray([...itemsArray, newItem])
    }
    return(
        <main>
            <h1 className ="text-4xl font-bold text-center">Shopping List</h1>
            <NewItem onAddItem={handleAddItem}/>
            <ItemList items={itemsArray}/>
        </main>
    )
}