export default function ItemCompObject({itemObj}){

    let {name, quantity, category} = itemObj;

    return(
        <div className="bg-green-500 m-4 p-2 w-1/4 rounded-md mx-auto">
            <h3 className="text-black font-bold text-2xl">{name}</h3>
            <ul className="list-disc pl-4">
                <li>Quantity: {quantity}</li>
                <li>Category: {category}</li>
            </ul>   
        </div>
    );
}