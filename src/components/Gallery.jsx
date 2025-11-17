// // for localhost postgres connection
// import ProductCard from './ProductCard';
// import { useEffect, useState } from "react";

// export default function Gallery() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("/api/products")
//       .then(res => res.json())
//       .then(data => setProducts(data));
//   }, []);

//   return (
//     <div className="container-gallery">
//       {products.map(product => (
//         <ProductCard key={product.id} product={product} />
//       ))}
//     </div>
//   );
// }


// for supabase-netlify postgres connection
import ProductCard from './ProductCard';
import { supabase } from '../../lib/supabaseClient';
import { useEffect, useState } from "react";

export default function Gallery() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    supabase
      .from('products')
      .select('*')
      .then(({ data }) => setProducts(data));
  }, []);

  return (
    <div className="container-gallery">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
