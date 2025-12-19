export default function ProductCards ({name, description, price}:{nam}) {


    return(
        <div>
            <p>Название: {name}</p>
            <p>Описание: {description}</p>
            <p>Цена: {price}</p>
        </div>
    )
}