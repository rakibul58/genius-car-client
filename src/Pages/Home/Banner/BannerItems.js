import React from 'react';
import { Link } from 'react-router-dom';
import './BannerItems.css';
const BannerItems = ({slide}) => {
    const {image , id , next , prev} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img'>
                <img src={image} alt='' className="w-full rounded-xl" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/3">
                <h1 className='text-white font-bold text-5xl'>Affordable<br />
                    Price for Car<br />
                    servicing</h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2">
                <p className='text-white font-semibold text-lg w-96'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-2/3">
                <Link><button className="btn btn-error hover:bg-transparent mr-2">Discover More</button></Link>
                <Link><button className="btn btn-outline btn-error">Appointment</button></Link>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5 bg-black bg-opacity-60">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle bg-orange-600 border-none">❯</a>
            </div>
        </div>
    );
};

export default BannerItems;