import ProductCards from "../ProductCarts/ProductCards";
import type { Product } from "../Products";
import "./Products.css"
export default function Products () {
const productList: Product[] = [
    {
      id: 1,
      name: "Вентилятор",
      price: 779,
      description: "Самый лучший вентилятор в каменном веке",
      img: null,
    },
    {
      id: 2,
      name: "Шоколадное Молоко",
      price: 173,
      description: "Берется у черных коров",
      img: null,
    },
    {
      id: 3,
      name: "Матрас",
      price: 1000,
      description: "Говорят что он прошел уже 5 поколений 1 семьи",
      img: null,
    },
    {
      id: 4,
      name: "Портативный охладитель для арбузов",
      price: 9399,
      description: "В нем ваш арбуз всегда будет освежающим и холодным",
      img: null,
    },
    {
      id: 5,
      name: "Ложка",
      price: 49.9,
      description: "Никто точно не знает откуда она...",
      img: null,
    },
  ];
    return(
        <div className="List">
        <a>Продукты</a>
        {productList.map((product) => {
        return (
          <ProductCards
            product={product}
          />
        );
      })}
        </div>
    )
}