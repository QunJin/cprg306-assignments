"use client"

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json"
import MealIdeas from "./mealideas.js"
import Link from "next/link";

import {useState} from "react"
import {useUserAuth} from "../_utils/auth-context.js"




export default function Page(){

    async function handleSignOut(){
        try {
            await firebaseSignOut();
        } catch (error) {
            console.log (error);
        }
    }

    const {user, firebaseSignOut} = useUserAuth();
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
            {user ? (
            <>
                <div className="text-center mb-4">
                    <h1 className ="text-4xl font-bold">Shopping List</h1>
                    <button 
                        onClick={handleSignOut} 
                        className="mt-4 bg-red-500 text-white rounded px-4 py-2 hover:bg-red-600 cursor-pointer"
                        type="button"
                    >
                        Sign Out
                    </button>
                </div>
                <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
                    <section className="flex-1 space-y-6">
                        <NewItem onAddItem={handleAddItem}/>
                        <ItemList items={itemsArray} onItemSelect ={handleItemSelect}/>
                    </section>
                    <aside className="flex-1">
                        <MealIdeas ingredient={selectedItemName}/>
                    </aside>
                </div>
            </>
            ) : (
                <section className="text-center mt-20 space-y-6">
                <p className="text-center text-red-600">Please sign in to view your shopping list.</p>
                <Link href="/week-9/" className="text-lg bg-blue-500 text-white rounded px-2 py-1 mt-4 hover:bg-blue-600 cursor-pointer" >Click here to return to the login page</Link>

                </section>
            )}
        </main>
    )
}