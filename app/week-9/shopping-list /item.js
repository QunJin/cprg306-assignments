

export default function Item({itemObj, onSelect}){

    let {name, quantity, category} = itemObj;

    return(
        <main>
            <div 
            onClick={()=> onSelect(itemObj)}
            className="bg-blue-600 pt-3 pb-3 pl-2 m-3 w-3/5 mx-auto hover:bg-emerald-500 cursor-pointer">
            <ul>
                <li className="text-2xl font-bold">{name}</li>
                <li>Buy {quantity} in {category}</li>
            </ul>
            </div>
        </main>
    )
}