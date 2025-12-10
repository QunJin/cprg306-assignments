

"use client"

import {useState, useEffect} from "react";

export default function MealIdeas({ingredient}){

    const [meals,setMeals] = useState([])

    

    async function fetchMealIdeas(ing){

        if (!ing || ing.trim() === "")return[];
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ing}`)
            const data = await response.json();
            return data.meals || []
            
        } catch (error) {
            console.error(`Meal API error: ${error}`);
            return [];
        }
    }

    async function loadMealIdeas(){
        try {
            const mealList = await fetchMealIdeas(ingredient);
            setMeals(mealList);
            
        } catch (error) {
            console.error (`Load Meal error:${error}`)
            
        }
    }

    useEffect(()=>{
        loadMealIdeas();
    }, [ingredient]);
    return(
        <div>
            <h2 className= "text-x1 font-bold mb-4">
                Meal Ideas
            </h2>
            {meals.length === 0 ? (
        <p className="text-gray-600">
          {ingredient
            ? `No meal ideas found for "${ingredient}"`
            : "Select an item to see ideas"}
        </p>
      ) : (
        <ul className="space-y-2">
            <li>Meal Ideas for {ingredient}</li>
          {meals.map((meal) => (
            
            <li
              key={meal.idMeal}
              className="p-2 rounded bg-blue-950 hover:bg-blue-700 transition"
            >
              {meal.strMeal}
            </li>
          ))}
        </ul>
      )}
            </div>
    )
}