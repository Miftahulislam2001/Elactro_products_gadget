import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductsCard from './ProductsCard';
import { addToDb } from '../utilities/fakeDB';
import { cartContext, productsContext } from '../App';
import toast from 'react-hot-toast';

const Shop = () => {
    //const productsData = useLoaderData()
    const productsData = useContext(productsContext)
    const [cart, setCart] = useContext(cartContext)

    // Add cart handler
    const handleAddToCart = (product)=>{

        let newCart = []
        const exist = cart.find(existingProd => existingProd.id === product.id)

        if(!exist){
            product.quantity = 1;
            newCart = [...cart, product]
        }else{
            const rest = cart.filter(existingProd => existingProd.id !== product.id)
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist]
        }
        setCart(newCart)
        addToDb(product.id);
        toast.success('Product Added! 🛒')
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