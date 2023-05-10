import React, { useState } from 'react';
import CoffeeCard from '../CoffeeCard/CoffeeCard';
import { FaCoffee } from 'react-icons/fa';
import Swal from 'sweetalert2';

const PopularProducts = ({coffees}) => {
    const [filterCoffees, setFilterCoffees] = useState(coffees);
    const handleDelete = id => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
            //     Swal.fire(
            //     'Deleted!',
            //     'Your file has been deleted.',
            //     'success'
            // )

            fetch(`http://localhost:5000/coffee/${id}`, {
                method: 'DELETE'
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    Swal.fire(
                    'Deleted!',
                    'Your coffee has been deleted.',
                    'success'
                    )
                    const remaining = coffees?.filter(coffee => coffee._id !== id);
                    setFilterCoffees(remaining);

                }
            })
            }
        })
    }
    
    return (
        <div>
            <div className='flex items-center flex-col justify-center'>
                <h1 className='font-medium text-2xl my-4'>Our Popular Products</h1>
                <button className='bg-slate-700 text-white px-6 py-3 mb-6 rounded-lg font-medium flex flex-row items-center gap-3'>Add Coffee <span className=''>< FaCoffee /></span> </button>
            </div>
            <div className='grid md:grid-cols-2 gap-6 md:mt-12 mb-12'>
                {
                    filterCoffees?.map(popularCoffee => <CoffeeCard
                        handleDelete={handleDelete}
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