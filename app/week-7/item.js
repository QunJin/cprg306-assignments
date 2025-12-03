

export default function Item({itemObj}){

    let {name, quantity, category} = itemObj;

    return(
        <main>
            <div className="bg-blue-600 pt-3 pb-3 pl-2 m-3 w-1/5 mx-auto hover:bg-emerald-500">
            <ul>
                <li className="text-2xl font-bold">{name}</li>
                <li>Buy {quantity} in {category}</li>
            </ul>
            </div>
        </main>
    )
}