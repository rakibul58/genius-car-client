import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                    <img src={person} alt='' className="rounded-lg shadow-2xl w-10/12 h-full" />
                    <img src={parts} alt='' className="rounded-lg shadow-2xl absolute right-10 top-36 border-8 w-3/5" />
                </div>
                <div className='w-1/2'>
                    <p className="text-2xl font-bold text-error">About Us</p>
                    <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className="py-6 pr-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <p className="pb-6 pr-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-error hover:bg-transparent">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;