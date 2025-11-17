'use client'; //used for components that require client-side interactivity

import Link from 'next/link';
import Image from 'next/image';

export default function ProductCard({ product }) {
  return (
    <div className="card-container">
        <Link href={`/products/${product.id}`}>
            <div className="">
                <Image
                    src={product.product_image}
                    alt={product.product_name}
                    width={400}
                    height={400}
                    className="product-image"
                />
                <div className="product-name">
                    <h3 className="">{product.product_name}</h3>
                </div>
            </div>
        </Link>
        <p className="product-price">{product.product_price}</p>
    </div>
    
  );
}
