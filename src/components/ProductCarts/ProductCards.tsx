import type { ItemListSchema } from "../../api"
import type { Product } from "../Products"
import "./ProductCards.css"
export default function ProductCards ({ product }: {product: ItemListSchema}) {


    return(
        <div className="Cards">
            <p>Название: {product.title}</p>
            <p>Описание: {product.title}</p>
            <p>Цена: {product.price}</p>
        </div>
    )
}