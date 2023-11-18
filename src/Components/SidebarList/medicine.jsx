import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BsPlusCircle }
 from 'react-icons/bs'

 const Medicine = () => {
    const [medicines, setMedicines] = useState([]);
  
    useEffect(() => {
      const fetchMedicines = async () => {
        try {
          const response = await axios.get('https://pharma-k0q8.onrender.com/api/v1/product'); // Replace this with your backend API endpoint
          setMedicines(response.data);
        // console.log(response.data)
        } catch (error) {
          console.error('Failed to fetch medicines', error);
        }
      };
  
      fetchMedicines();
    }, []);

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>
            List of Medicine
            <p className='sub-title'>List of medicines available for sales.</p>
            </h3>
            
            <div className='btn-download'>
                <a  href="#"> <BsPlusCircle className='card_icon'/> Add Meds </a>
            </div>
        </div>


        <div className='table-charts'>
              <div className="table-data">
                <div className="order">
                  <div className="head">
                      <h3>Recent Adds</h3>
                  </div>
                  
                      <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Medicine Name</th>
                                    <th>ID</th>
                                    <th>Price</th>
                                    <th>Stock in Qty</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {medicines.map((medicine) => (
                                    <tr key={medicine.id}> */}
                                      {medicines.map((medicine, index) => (
                                      <tr key={`${medicine.id}-${index}`}>
                                        <td>{medicine.name}</td>
                                        <td>{medicine._id}</td>
                                        <td>{medicine.price}</td>
                                        <td>{medicine.stockQuantity}</td>
                                        <td>
                                            <button style={{ backgroundColor: 'blue', border: 'none', color: 'white', cursor: 'pointer', padding: '5px 10px', borderRadius: '5px', marginRight: '8px'}}>Edit</button>
                                            <button style={{ backgroundColor: 'red', border: 'none', color: 'white', cursor: 'pointer', padding: '5px 10px', borderRadius: '5px'}}>Delete</button>
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

export default Medicine
