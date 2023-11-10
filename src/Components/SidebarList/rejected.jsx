import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { BsPlusCircle } from 'react-icons/bs';

const rejected = () => {
  // ACTUAL CODE const [rejectedData, setRejectedData] = useState([]);

  const rejectedData = [
    { rej_id: 12, cust_id: '3', medicine: 'Tramadol', date: '08-11-2023', amount: 'Ghc100' },
    { rej_id: 15, cust_id: '4', medicine: 'Weed', date: '05-11-2023', amount: 'Ghc10' },
    { rej_id: 15, cust_id: '4', medicine: 'Weed', date: '05-11-2023', amount: 'Ghc10' },
  ];

  useEffect(() => {
    const fetchRejectedData = async () => {
      try {
        const response = await axios.get('/api/rejected');
        // setRejectedData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Failed to fetch rejected data', error);
      }
    };

    fetchRejectedData();
  }, []);

  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>
          List of Rejected Medicine
          <p className='sub-title'>List of customers with meds rejected</p>
        </h3>

        <div className='btn-download'>
          <a href="#">
            <BsPlusCircle className='card_icon' /> Manage Data
          </a>
        </div>
      </div>

      <div className='table-charts'>
        <div className='table-data'>
          <div className='order'>
            <div className='head'>
              <h3>Rejected Medicine List</h3>
            </div>

            <div>
              <table>
                <thead>
                  <tr>
                    <th>Rej_id</th>
                    <th>Cust_id</th>
                    <th>Medicine</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {rejectedData.map((item) => (
                    <tr key={item.rej_id}>
                      <td>{item.rej_id}</td>
                      <td>{item.cust_id}</td>
                      <td>{item.medicine}</td>
                      <td>{item.date}</td>
                      <td>{item.amount}</td>
                      <td>
                  
                          <button style={{ backgroundColor: 'red', border: 'none', color: 'white', cursor: 'pointer', padding: '5px 10px', borderRadius: '5px', marginRight: '8px'}}>Delete</button>
                          <button style={{ backgroundColor: 'green', border: 'none', color: 'white', cursor: 'pointer', padding: '5px 10px', borderRadius: '5px'}}>Re-approved</button>
                                        
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
  );
};

export default rejected;
