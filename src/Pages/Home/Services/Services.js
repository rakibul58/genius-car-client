import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className='my-20'>
            <div className='text-center'>
                <p className='text-error font-bold text-2xl'>Services</p>
                <h2 className='text-black font-extrabold text-4xl my-4'>Our Service Area</h2>
                <p className='capitalize'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 mt-12'>
                {
                    services.map(service=><ServiceCard
                    key={service._id}
                    service={service}
                    >

                    </ServiceCard>)
                }
            </div>
            <div className='flex justify-center mt-12'><button className='btn btn-outline btn-error'>More Services</button></div>
        </div>
    );
};

export default Services;