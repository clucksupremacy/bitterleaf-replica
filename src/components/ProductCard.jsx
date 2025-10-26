'use client'; //used for components that require client-side interactivity

import Link from 'next/link';
import Image from 'next/image';

export default function ProductCard({ product }) {
  return (
    <div>
        <Link href={product.link}>
            <div className="">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="product-image"
                />
                <div className="">
                    <h3 className="">{product.name}</h3>
                </div>
            </div>
        </Link>
        <p className="">{product.price}</p>
    </div>
    
  );
}
