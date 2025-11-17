import ProductCard from './ProductCard';
// import { getProducts } from '/lib/products';
import { useEffect, useState } from "react";


export default function Gallery() {
  // const products = getProducts();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  
  return (
    <div className="container-gallery">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
