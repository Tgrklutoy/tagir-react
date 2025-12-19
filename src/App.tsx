import "./App.css"
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ProductCards from "./components/ProductCarts/ProductCards";
import type { Product } from "./components/Products";
import Products from "./components/Products/Products";

export default function App () {
    

    return (
    <div className="App">
        <Header/>
        <Hero/>
        
        <Products/>
    </div>
    )
}
