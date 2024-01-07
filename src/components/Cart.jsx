import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { removeCartFromDB } from '../utilities/fakeDB';
import CartItem from './CartItem';

const Cart = () => {
    const { cartArray } = useLoaderData();

    //======== Total Price =======//
    let total = 0;
    if (cartArray.length > 0) {
        for (const item of cartArray) {
            total = total + item.price * item.quantity;
        }
    };

    //======== Remove Cart =======//
    const handleRemoveItem = (id) =>{
        removeCartFromDB(id)
    }

    return (
        <div className='flex min-h-screen items-start justify-center bg-gray-100 text-gray-900'>
            <div className='flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 '>
                <h2 className='text-xl font-semibold'>{cartArray.length ? "Review Cart Items" : "Cart is EMPTY !"}</h2>

                <ul className='flex flex-col divide-y divide-gray-700'>
                    {
                        cartArray.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} handleRemoveItem = {handleRemoveItem} />)
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
                        cartArray.length > 0 ?
                            <button className='btn-outlined'>Clear Cart</button> 
                            :
                            <Link to="/shop"><button className='btn-outlined'>Back to Shop</button></Link>
                    }

                    <button className='btn-primary'>Place Order</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
