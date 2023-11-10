
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { BsPlusCircle }
 from 'react-icons/bs'


const customers = () => {
  const [customers, setCustomers] = useState([]);


  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('https://pharma-k0q8.onrender.com/api/v1/users/current'); 
        // setCustomers(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Failed to fetch customers', error);
      }
    };

    fetchCustomers();
  }, []);


  return (
    <main className='main-container'>
        <div className='main-title'>
          <h3>
          List of Customers
          <p className='sub-title'>List of customers</p>
          </h3>
          
          <div className='btn-download'>
              <a  href="#"> <BsPlusCircle className='card_icon'/> Manage Data </a>
          </div>
        </div>

        <div className='table-charts'>
          <div className="table-data">
              <div className="order">
                    <div className="head">
                        <h3>Customers</h3>
                        
                    </div>
                        
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                    {Array.isArray(customers) && customers.map((customer) => (
                        <tr key={customer.id}>
                          <td>{customer.id}</td>
                          <td>{customer.fullName}</td>
                          <td>{customer.email}</td>
                          <td>{customer.address}</td>
                          <td>{customer.phone}</td>
                          <td>
                            <button style={{ backgroundColor: 'blue', color: 'white', cursor: 'pointer', padding: '5px 10px', borderRadius: '5px', marginRight: '8px'}}>Edit</button>
                            <button style={{ backgroundColor: 'red', color: 'white', cursor: 'pointer', padding: '5px 10px', borderRadius: '5px'}}>Delete</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
            </div>
          
          </div>
        </div>

    </main>
  )
}

export default customers
