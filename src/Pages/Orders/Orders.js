import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';
import img from '../../assets/images/checkout/checkout.png';

import './Orders.css';

const Orders = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrder] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrder(data));
    }, [user?.email]);

    const handleDelete = id =>{
        const proceed = window.confirm("Are You sure you want to delete?");
        if(proceed){
            fetch(`http://localhost:5000/orders/${id}`,{
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data =>{
                console.log(data);
                if(data.deletedCount>0){
                    alert('Successfully Deleted');
                    const remaining = orders.filter(odr => odr._id!== id);
                    setOrder(remaining);
                }
            })
        }
    }

    const handleStatusUpdate = id =>{
        fetch(`http://localhost:5000/orders/${id}`,{
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'Approved'})
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                const remaining = orders.filter(odr=>odr._id !== id);
                const approving = orders.find(odr=>odr._id===id);

                approving.status = 'Approved';
                const newOrders=[...remaining , approving];

                setOrder(newOrders);
            }
        });
    }

    return (
        <div>
            <div>
                <img src={img} className='w-full' alt="" />
            </div>
            <h2 className="text-5xl">You Have: {orders.length} orders</h2>
            <div className="overflow-x-auto w-full my-20">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders.map(order => <OrderRow
                            key={order._id}
                            order={order}
                            handleDelete={handleDelete}
                            handleStatusUpdate={handleStatusUpdate}
                            ></OrderRow>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Orders;