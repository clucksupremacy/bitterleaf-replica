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

export default async function Gallery() {
  const { data: products, error } = await supabase.from('products').select('*');

  if (error) {
    console.error(error);
    return <p>Error loading products</p>;
  }

  if (!products || products.length === 0) {
    return <p>No products found</p>;
  }

  return (
    <div className="container-gallery">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
