import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {img  , title , price , _id} = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className='p-3'><img className='rounded-xl' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className="text-2xl font-bold text-error">Price: ${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/checkout/${_id}`} className='btn btn-error hover:bg-transparent'>Checkout</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;