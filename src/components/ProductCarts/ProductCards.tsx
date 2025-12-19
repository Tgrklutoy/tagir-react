import type { Product } from "../Products"
import "./ProductCards.css"
export default function ProductCards ({ product }: {product: Product}) {


    return(
        <div className="Cards">
            <p>Название: {product.name}</p>
            <p>Описание: {product.description}</p>
            <p>Цена: {product.price}</p>
        </div>
    )
}