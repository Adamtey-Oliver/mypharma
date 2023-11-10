
import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { BsPlusCircle }
 from 'react-icons/bs'

 
const approved = () => {

  // ACTUAL CODE const [approvedData, setApprovedData] = useState([]);

  const approvedData = [
    { appr_id: 7, cust_id: '1', medicine: 'Durol', date: '05-11-2023', amount: 'Ghc55' },
    { appr_id: 5, cust_id: '2',  medicine: 'Vitamin-C', date: '03-11-2023', amount: 'Ghc20' },
  ];

  useEffect(() => {
    const fetchApprovedData = async () => {
      try {
        const response = await axios.get('/api/approved'); 
        // setApprovedData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Failed to fetch approved data', error);
      }
    };

    fetchApprovedData();
  }, []);

  return (
    <main className='main-container'>
        <div className='main-title'>
          <h3>
          List of Approved Medicine
          <p className='sub-title'>List of customers with meds approved</p>
          </h3>
          
          <div className='btn-download'>
              <a  href="#"> <BsPlusCircle className='card_icon'/> Manage Data </a>
          </div>
        </div>

        <div className='table-charts'>
            <div className="table-data">
              <div className="order">
                    <div className="head">
                        <h3>Approved Medicine List</h3>
                    </div>
                        
                    <div>
                    
                      <table>
                        <thead>
                          <tr>
                            <th>Appr_id</th>
                            <th>Cust_id</th>
                            <th>Medicine</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {approvedData.map((item) => (
                            <tr key={item.appr_id}>
                              <td>{item.appr_id}</td>
                              <td>{item.cust_id}</td>
                              <td>{item.medicine}</td>
                              <td>{item.date}</td>
                              <td>{item.amount}</td>
                              <td>
                                <button
                                  style={{ backgroundColor: 'green', border: 'none', color: 'white', cursor: 'pointer', borderRadius: '5px', padding: '5px 10px' }}
                                  onClick={() => handleApproval(item)}
                                  >
                                  Approve
                                </button>
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

export default approved
