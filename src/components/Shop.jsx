import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductsCard from './ProductsCard';
import { addToDb } from '../utilities/fakeDB';
import { productsContext } from '../App';

const Shop = () => {
    //const productsData = useLoaderData()
    const productsData = useContext(productsContext)
    const handleAddToCart = (id)=>{
        addToDb(id);
    }
  
    return (
        <div className='product-container'>
            {
                productsData.map(product => <ProductsCard product={product} key={product.id} handleAddToCart={handleAddToCart}/>)
            }
        </div>
    );
};

export default Shop;