import React from 'react';
import Swal from 'sweetalert2'


const AddCoffee = () => {
    const handleAddCoffee = event => {
        event.preventDefault();
        // collect form data 
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = { name, quantity, supplier, taste, category, details, photo }
        console.log(newCoffee);

        // send data to the server
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                // window.confirm('New Coffee Added successful');
                Swal.fire({
                    title: 'Success!',
                    text: 'New Coffee Added successful',
                    icon: 'success',
                    confirmButtonText: 'Done'
                })
            }
        })

    }
    
    
    
    return (
        <div>
            <button>Back to Home</button>
            <div className='bg-[#f4f3f0] md:w-[75%] mx-auto my-6'>
                <div className='text-center p-16'>
                    <h1 className='text-2xl py-4 font-medium'>Add New Coffee</h1>
                    <p className='text-base leading-7'> 
                        It is a long established fact that a reader will be distraceted by the readable content of a page when looking at <br /> its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed <br /> to using Content here.
                    </p>
                </div>
                {/* form part */}

                <form onSubmit={handleAddCoffee}>
                    <div className='grid md:grid-cols-2 w-[100%] pb-3 gap-6 px-12'>
                        <div className=''>
                            <span className='block w-[75%] text-left text-lg font-medium my-2'>Name</span>
                            <input className='w-[75%] p-2' type="text" name="name" placeholder='Enter coffee name' />
                        </div>
                        <div>
                            <span className='block w-[75%] text-left text-lg font-medium my-2'>Available Quantity</span>
                            <input className='w-[75%] p-2' type="text" name="quantity" placeholder='Enter Available Quantity' />
                        </div>
                        <div>
                            <span className='block w-[75%] text-left text-lg font-medium my-2'>Supplier</span>
                            <input className='w-[75%] p-2' type="text" name="supplier" placeholder='Enter coffee supplier' />
                        </div>
                        <div>
                            <span className='block w-[75%] text-left text-lg font-medium my-2'>Taste</span>
                            <input className='w-[75%] p-2' type="text" name="taste" placeholder='Enter coffee taste' />
                        </div>
                        <div>
                            <span className='block w-[75%] text-left text-lg font-medium my-2'>Category</span>
                            <input className='w-[75%] p-2' type="text" name="category" placeholder='Enter coffee category' />
                        </div>
                        <div>
                            <span className='block w-[75%] text-left text-lg font-medium my-2'>Details</span>
                            <input className='w-[75%] p-2' type="text" name="details" placeholder='Enter coffee details'/>
                        </div>
                    </div>
                    <div className='px-12 pb-6'>
                        <span className='block w-[75%] text-left text-lg font-medium my-2'>Photo</span>
                        <input className='w-[89%] p-2' type="text" name="photo" placeholder='Enter photo URL' />
                    </div>
                    <div className='px-12'>
                        <input className='bg-yellow-700 w-[89%] px-6 py-3 text-white text-lg rounded-lg font-medium mb-6 border-2 border-black cursor-pointer' type="submit" value="Add Coffee" />
                    </div>
                </form>
            
            </div>
        </div>
    );
};

export default AddCoffee;