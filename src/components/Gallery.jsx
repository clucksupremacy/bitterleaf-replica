import ProductCard from './ProductCard';
import { getProducts } from '/lib/products';

export default function Gallery() {
  const products = getProducts();
  
  return (
    <div className="container-gallery">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
