export default function ItemComp(props){

    let {name, quantity, category} = props;

    return(
        <div className="bg-green-500">
            <h3>{name}</h3>
            <ul>
                <li>Quantity: {quantity}</li>
                <li>Category: {category}</li>
            </ul>   
        </div>
    );
}