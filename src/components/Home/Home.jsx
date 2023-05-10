import React from 'react';
import PopularProducts from '../PopularProducts/PopularProducts';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const coffees = useLoaderData();
    console.log(coffees);
    
    return (
        <div>
            <h3>This is Home page</h3>
            <div className='px-72 mt-12'>
                <PopularProducts coffees={coffees} />
            </div>
        </div>
    );
};

export default Home;