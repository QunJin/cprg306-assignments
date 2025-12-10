"use client"
import { useState } from "react";
import Item from "./item";
// import itemData from "/.itemjson";

export default function ItemList({items, onItemSelect}){
    // let itemsArray = itemsData.map ((item)=>({...item}));

    let {id, name, quantity, category} = items

    const [sortBy, setSortBy] = useState("name")
 
    const handleSortName= (event) => setSortBy (event.target.value)
        if (sortBy == "name"){
            items.sort((itemA, itemB)=>{
                    //alphabetical sorting
                    let nameA = itemA.name.toUpperCase();
                    let nameB = itemB.name.toUpperCase();
                    if(nameA < nameB) return -1
                    if(nameB > nameB) return +1
                    return 0;
                   })
        }

    const handleSortCat = (event) => setSortBy (event.target.value)
        if (sortBy == "category"){
            items.sort((itemA, itemB)=>{
                    //alphabetical sorting
                    let nameA = itemA.category.toUpperCase();
                    let nameB = itemB.category.toUpperCase();
                    if(nameA < nameB) return -1
                    if(nameB > nameB) return +1
                    return 0;
                   })
        }
    
    let buttonstyle = ""
    return(
        <main>
            <div className="flex justify-center gap-4 my-4">
                {/* Sort by Buttons */}
                <button  type="button" className={`${sortBy === "name" ? "bg-amber-600" : "bg-red-700"} text-white rounded cursor-pointer hover:bg-amber-600 active:bg-amber-600 transition-colors px-3 py-2 mx-2`} value="name" onClick={handleSortName}>Name</button>

                <button type="button" className={`${sortBy === "category" ? "bg-amber-600" : "bg-red-700"} text-white rounded cursor-pointer hover:bg-amber-600 active:bg-amber-600 transition-colors px-3 py-2`} value="category" onClick={handleSortCat}> Category</button>

            </div>
            <div>
                {/* Sort by Display */}
                {items.map((item)=>(
                    <Item key={item.id} itemObj={item} onSelect={onItemSelect}/>
                ))}
            </div>
        </main>
    )
}