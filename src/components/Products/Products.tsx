import { useEffect, useState } from "react";
import ProductCards from "../ProductCarts/ProductCards";
import "./Products.css"
import type { ItemListSchema } from "../../api";
import axios from "axios";
export default function Products () {
const [products, setProducts] = useState<ItemListSchema[]>([]);

  async function loadData () {
    await axios
    .get ("http://89.169.3.47/api/v1/items?sort=newest&page=1&perPage=20").then((res) => {
      setProducts(res.data.data)
    });
  }

  useEffect(() => {
    loadData();
  },[]);

    return(
        <div className="List">
        <a>Продукты</a>
        {products?.map((product) => {
        return (
          <ProductCards
            product={product}
          />
        );
      })}
        </div>
    )
}
