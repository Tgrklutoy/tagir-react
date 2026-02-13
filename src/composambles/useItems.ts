import axios from "axios";
import type { CategoryListResponse, ItemListSchema } from "../api";

export async function GetItems (category:string|null = null
): Promise<ItemListSchema[]>{
    return await axios
    .get(`http://89.169.3.47/api/v1/items?sort=newest&page=1&perPage=20` + (category != null? `&category=${category}`  :"")
    )
    .then((res) => {
        if (res.status == 200) {
        return res.data.data;
    }
    });
}