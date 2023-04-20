import Product from "../components/product";
import './catalog.css';



const Catalog = () => {

    return (
        <div className="page catalog">
            <h2>Check our amaizing catalog!</h2>
            
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>

        </div>
    )
};

export default Catalog;