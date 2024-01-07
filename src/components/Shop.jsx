import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductsCard from './ProductsCard';

const Shop = () => {
    const productsData = useLoaderData()
  
    return (
        <div className='product-container'>
            {
                productsData.map(product => <ProductsCard product={product} key={product.id}/>)
            }
        </div>
    );
};

export default Shop;