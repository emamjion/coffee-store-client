import React, { useState } from 'react';
import { FaRegEye, FaEdit, FaWindowClose } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({popularCoffee, handleDelete}) => {
    const { _id, name, quantity, supplier, taste, category, details, photo } = popularCoffee;
    

    // Delete Operation --> into popularProduct components 
    
    return (
        <div className="card card-side bg-[#F5F4F1] p-3">
            <figure><img src={photo} alt="Movie"/></figure>
            <div className="flex items-center justify-between w-full">
                <div className='ml-6'>
                    <h2 className="card-title">{name}</h2>
                    <p>Category: {category}</p>
                    <p>Supplier: {supplier}</p>
                    <p>Taste: {taste}</p>
                    <p>Price: {quantity} Taka</p>
                </div>
                <div className="flex flex-col mr-8 gap-4">
                    <button className='bg-[#D2B48C] p-2 text-white rounded'> < FaRegEye /> </button>
                    <Link to={`/updateCoffee/${_id}`}>
                        <button className='bg-[#212121] p-2 text-white rounded'> < FaEdit /> </button>
                    </Link>
                    <button 
                    onClick={() => handleDelete(_id)}
                    className='bg-[#f94848] p-2 text-white rounded'> < FaWindowClose /> </button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;