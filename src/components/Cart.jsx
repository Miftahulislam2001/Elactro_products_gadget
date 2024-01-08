import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeCartFromDB } from '../utilities/fakeDB';
import CartItem from './CartItem';
import { cartContext } from '../App';
import toast from 'react-hot-toast';

const Cart = () => {
   // const { cartArray } = useLoaderData();
    const [cart, setCart] = useContext(cartContext)

    //======== Total Price =======//
    let total = 0;
    if (cart.length > 0) {
        for (const item of cart) {
            total = total + item.price * item.quantity;
        }
    };

    //======== Remove Cart =======//
    const handleRemoveItem = (id) =>{
        const remaining = cart.filter(item => item.id !== id)
        setCart(remaining)
        removeCartFromDB(id)
        toast.error('Product Removed! 🔥')
    }

    //======== Delete Shopping Cart ========//
    const deleteCartHandler = () =>{
        if(cart.length > 0){
            setCart([])
            deleteShoppingCart()
            return toast.success('Removed All Items')

        }
        return toast.error('Cart Empty')
    }

    //======== Place Order ========//
    const orderHandler = () =>{
        if(cart.length > 0){
            setCart([])
            deleteShoppingCart()
            return toast.success('Order Done')

        }
        return toast.error('Cart Empty')
    }

    return (
        <div className='flex min-h-screen items-start justify-center bg-gray-100 text-gray-900'>
            <div className='flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 '>
                <h2 className='text-xl font-semibold'>{cart.length ? "Review Cart Items" : "Cart is EMPTY !"}</h2>

                <ul className='flex flex-col divide-y divide-gray-700'>
                    {
                        cart.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} handleRemoveItem = {handleRemoveItem} />)
                    }
                </ul>

                <div className='space-y-1 text-right'>
                    <p className='font-semibold'>
                        Total amount: <span>{total}$</span>
                    </p>
                    <p className='text-sm text-gray-400'>
                        Not including taxes and shipping costs
                    </p>
                </div>

                <div className="flex justify-end space-x-4">
                    {/* Conditional Rendering */}
                    {
                        cart.length > 0 ?
                            <button onClick={deleteCartHandler} className='btn-outlined'>Clear Cart</button> 
                            :
                            <Link to="/shop"><button className='btn-outlined'>Back to Shop</button></Link>
                    }

                    <button onClick={orderHandler} className='btn-primary'>Place Order</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
