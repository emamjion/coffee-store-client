import React from 'react';
import CoffeeCard from '../CoffeeCard/CoffeeCard';
import { FaCoffee } from 'react-icons/fa';

const PopularProducts = ({coffees}) => {
    const popularCoffees = coffees;
    return (
        <div>
            <div className='flex items-center flex-col justify-center'>
                <h1 className='font-medium text-2xl my-4'>Our Popular Products</h1>
                <button className='bg-slate-700 text-white px-6 py-3 mb-6 rounded-lg font-medium flex flex-row items-center gap-3'>Add Coffee <span className=''>< FaCoffee /></span> </button>
            </div>
            <div className='grid md:grid-cols-2 gap-6 mt-12'>
                {
                    popularCoffees.map(popularCoffee => <CoffeeCard
                        key={popularCoffee._id}
                        popularCoffee={popularCoffee}
                    >

                    </CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default PopularProducts;