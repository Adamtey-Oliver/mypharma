import React, { useState, useEffect } from 'react';
import { BsPlusCircle }
 from 'react-icons/bs'
import './inventory.css';

const inventory = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stockQuantity, setStockQuantity] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {

    const user = JSON.parse(sessionStorage.getItem('user'));

    if (user && user.role === 'admin') {
   
      fetchOrders();
    } else {

      window.location.href = '/signin';
    }
  }, []);

  const fetchOrders = () => {
    fetch('https://pharma-k0q8.onrender.com/api/v1/product/new')
      .then(response => response.json())
      .then(order => {
        console.log(order);
      })
      .catch(error => console.error('Error fetching data:', error));
  };

  const logout = () => {

    sessionStorage.clear();

    window.location.href = '/signin';
  };

  const addProduct = () => {
    const data = {
      name,
      description,
      price,
      stockQuantity,
      category,
      image,
    };

    fetch('https://pharma-k0q8.onrender.com/api/v1/product/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(result => {
        if (result.success) {
          alert('Product added successfully!');
        } else {
          alert('Failed to add product. Please try again.');
        }
      })
      .catch(error => console.error('Error:', error));
  };

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
    
            <div className="main-content">
              <div className="card">
                <h2>Add New Product</h2>
                <p>This is where you can add a new product</p>



                <form id="addProductForm" action="" method="">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                />
           
                <label htmlFor="description">Description:</label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  required
                />
    
                <label htmlFor="price">Price:</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={price}
                  onChange={e => setPrice(e.target.value)}
                  required
                />
    
                <label htmlFor="stockQuantity">Stock Quantity:</label>
                <input
                  type="number"
                  id="stockQuantity"
                  name="stockQuantity"
                  value={stockQuantity}
                  onChange={e => setStockQuantity(e.target.value)}
                  required
                />
    
                <label htmlFor="category">Category:</label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  value={category}
                  onChange={e => setCategory(e.target.value)}
                  required
                />
    
                <label htmlFor="image">Image:</label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  value={image}
                  onChange={e => setImage(e.target.value)}
                  required
                />
    
                <button type="button" onClick={addProduct}>
                  Add Product
                </button>
              </form>
              </div>


              
            </div>
    
        </main>
    );
    

};

export default inventory;
