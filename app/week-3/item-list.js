import ItemComp from "./item";
import ItemCompObject from "./item-object";

export default function ItemList(){
    const item1 = {
        name: "milk, 4 L 🥛",
        quantity: 1,
        category: "dairy",
    };
 
    const item2 = {
        name: "bread 🍞",
        quantity: 2,
        category: "bakery",
    };
    
    const item3 = {
        name: "eggs, dozen 🥚",
        quantity: 2,
        category: "dairy",
    };
    
    const item4 = {
        name: "bananas 🍌",
        quantity: 6,
        category: "produce",
    };
    
    const item5 = {
        name: "broccoli 🥦",
        quantity: 3,
        category: "produce",
    };
    
    const item6 = {
        name: "chicken breasts, 1 kg 🍗",
        quantity: 1,
        category: "meat",
    };
    
    const item7 = {
        name: "pasta sauce 🍝",
        quantity: 3,
        category: "canned goods",
    };
    
    const item8 = {
        name: "spaghetti, 454 g 🍝",
        quantity: 2,
        category: "dry goods",
    };
    
    const item9 = {
        name: "toilet paper, 12 pack 🧻",
        quantity: 1,
        category: "household",
    };
    
    const item10 = {
        name: "paper towels, 6 pack",
        quantity: 1,
        category: "household",
    };
    
    const item11 = {
        name: "dish soap 🍽️",
        quantity: 1,
        category: "household",
    };
    
    const item12 = {
        name: "hand soap 🧼",
        quantity: 4,
        category: "household",
    };

    return(
        <div>
            {/* <ItemComp name={item1.name} quantity={item1.quantity} category={item1.category}/> */}
            <ItemCompObject itemObj={item1} />
            <ItemCompObject itemObj={item2} />
            <ItemCompObject itemObj={item3} />
            <ItemCompObject itemObj={item4} />
            <ItemCompObject itemObj={item5} />
            <ItemCompObject itemObj={item6} />
            <ItemCompObject itemObj={item7} />
            <ItemCompObject itemObj={item8} />
            <ItemCompObject itemObj={item9} />
            <ItemCompObject itemObj={item10} />
            <ItemCompObject itemObj={item11} />
            <ItemCompObject itemObj={item12} />
        </div>
    );
}