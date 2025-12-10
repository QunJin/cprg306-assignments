"use client"

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json"
import MealIdeas from "./mealideas.js"

import {useState} from "react"




export default function Page(){

    const [selectedItemName, setSelectedItemName]= useState("")

    const [itemsArray, setItemsArray] = useState(
    itemsData.map((item)=>({...item}))
    );

    function handleItemSelect(item) {
        const cleaned = item.name
        .split(",")[0]
        .replace(
            /[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu,
            ""
        )
        .trim();

        setSelectedItemName(cleaned);
    }
    function handleAddItem(newItem){
        setItemsArray([...itemsArray, newItem])
    }
    return(
        <main>
            <h1 className ="text-4xl font-bold text-center">Shopping List</h1>
            <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
                <section className="flex-1 space-y-6">
                    <NewItem onAddItem={handleAddItem}/>
                    <ItemList items={itemsArray} onItemSelect ={handleItemSelect}/>
                </section>
                <aside className="flex-1">
                    <MealIdeas ingredient={selectedItemName}/>
                </aside>
            </div>
        </main>
    )
}