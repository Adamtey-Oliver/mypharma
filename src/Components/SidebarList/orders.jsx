import React, { useState, useEffect } from 'react';
import { BsPlusCircle }
 from 'react-icons/bs'
import './orders.css'
import Modal from './modal'
import axios from 'axios';
import react_image from '../Assets/customer.jpg'

const orders = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState('');
    const [userData, setUserData] = useState([]);
  
    useEffect(() => {
      const fetchUserData = async () => {
        try {
          const response = await axios.get('https://pharma-k0q8.onrender.com/api/v1/orders');
          setUserData(response.data);
          console.log(response.data)
        } catch (error) {
          console.error('Failed to fetch user data', error);
        }
      };
  
      fetchUserData();
    }, []);
  
    const handleOpen = async (userId) => {
      try {
        const response = await axios.get(`/api/user/${userId}/image`); 
        setModalImage(response.data.imageUrl);
        setModalOpen(true);
      } catch (error) {
        console.error('Failed to fetch user image', error);
      }
    };
  
    const handleClose = () => {
      setModalOpen(false);
    };


    const [checkboxes, setCheckboxes] = useState([]);

    const handleCheckboxChange = (index, type) => {
      const newCheckboxes = [...checkboxes];
  
      if (type === 'approved') {
        newCheckboxes[index] = { approved: true, rejected: false };
      } else if (type === 'rejected') {
        newCheckboxes[index] = { approved: false, rejected: true };
      }
  
      setCheckboxes(newCheckboxes);
    };
  

  
    const handleRejection = (medicine) => {
      if (checkbox === false) {
        console.log(`Medicine '${medicine}' has been rejected.`);
        setRejectionMedicines([...rejectionMedicines, medicine]); // reject component
      }
    };
  
    const handleApproval = (medicine) => {
      if (checkbox === true) {
        console.log(`Medicine '${medicine}' has been approved.`);
        setApprovedMedicines([...approvedMedicines, medicine]); //  approval component
      }
}
    


  return (

    <main className='main-container'>
        <div className='main-title'>
            <h3>
            ORDERS
            <p className='sub-title'>A quick data overview of the inventory.</p>
            </h3>
            
            <div className='btn-download'>
                <a  href="#">Add Meds <BsPlusCircle className='card_icon'/></a>
            </div>
        </div>


        <div className='main-title'>
            <div className="table-data">
                <div className="order">
                    <div className="head">
                        <h3>Recent Orders</h3>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                
                                <th>User</th>
                                <th>Medicine</th>
                                <th>Date Order</th>
                                <th>Status</th>
                                <th>View</th>
                                <th>Approve</th>
                                <th>Reject</th>
                            </tr>
                        </thead>
                        <tbody>
                                {userData.map((user, index) => (
                                 <tr key={user.id}>
                                <td>
                                    <img src={react_image} alt='User'/>
                                    <p>{userData.user}</p>
                                </td>
                                <td>{userData.medicine}</td>
                                <td>{userData.orderDate}</td>
                                <td>{userData.status}</td>
                                <td>
                                    <span
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => handleOpen(user.id)}
                                        >
                                        Open
                                    </span>
                                </td>
                                <td>
                                    <input
                                    className={checkboxes[index]?.approved ? 'green' : ''}
                                    style={{ cursor: 'pointer' }}
                                    type="checkbox"
                                    checked={checkboxes[index]?.approved}
                                    onChange={() => handleCheckboxChange(index, 'approved')}
                                    />
                                </td>
                                <td>

                                    <input
                                    className={checkboxes[index]?.rejected ? 'red' : ''}
                                    style={{ cursor: 'pointer' }}
                                    type="checkbox"
                                    checked={checkboxes[index]?.rejected}
                                    onChange={() => handleCheckboxChange(index, 'rejected')}
                                    />
                                </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {modalOpen && (
                        <div className="modal">
                        <div className="modal-content">
                            <img src={modalImage} alt="Medicine" />
                            <button onClick={handleClose}>Close</button>
                        </div>
                        </div>
                    )}
                </div>
            </div>
        </div>

    </main>
  )
}

export default orders
