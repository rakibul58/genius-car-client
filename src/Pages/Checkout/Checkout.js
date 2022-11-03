import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import img from '../../assets/images/checkout/checkout.png';

const Checkout = () => {
    const { title, price , _id} = useLoaderData();
    const { user } = useContext(AuthContext);

    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || `unregistered`;
        const phone = form.phone.value;
        const message = form.message.value;

        const order = {
            service: _id ,
            serviceName: title , 
            price ,
            customer: name,
            email,
            phone,
            message
        }

        // if(phone.lenght<10){
        //     alert('Phone number should be 10 characters or longer')
        // }

        fetch('http://localhost:5000/orders' , {

            method: 'POST' ,
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(order)

        })
        .then(res => res.json())
        .then(data=>{
            console.log(data);
            if(data.acknowledged){
                alert('Order placed successfully')
                form.reset();
            }
        })
        .catch(err => console.error(err));
    }


    return (
        <div className='my-20 p-5'>
            <div><img className='mx-auto w-full mb-12' src={img} alt="" /></div>
            <form onSubmit={handlePlaceOrder} className='p-10 bg-base-200 rounded-xl'>
                <h2 className='text-4xl font-bold'>You are about to order: <span className='text-error'>{title}</span></h2>
                <h4 className='text-3xl font-semibold mt-2 mb-8 text-error'>Price: ${price}</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    <input name='firstName' type="text" className='input w-full' placeholder='First Name'
                    /><input name='lastName' type="text" className='input w-full' placeholder='Last Name' /><input name='phone' type="text" className='input w-full' placeholder='Your Phone' required/><input name='email' type="text" className='input w-full' placeholder='Your Email'
                        defaultValue={user?.email} readOnly/>
                </div>
                <div>
                    <textarea name='message' className="textarea textarea-bordered mt-5 w-full h-52 rounded-xl" placeholder="Your Message"></textarea>
                </div>
                <input className='btn btn-error w-full mt-8 hover:bg-transparent' type="submit" value="Place Your Order" />
            </form>
        </div>
    );
};

export default Checkout;