import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../styles/address-form.css";

function AddressForm({ addAddress }) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && address) {
      addAddress({ name, address });
      setName('');
      setAddress('');
      navigate('/address-book');
    }
  };

  return (
    <div className='form-wrapper'>
    <form className='form-box' onSubmit={handleSubmit}>
      
      <center><h2>Add New Address</h2></center>
      <div>
        <label htmlFor="name">Address Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter address name"
        />
      </div>
      <div>
        <label htmlFor="address">Wallet Address</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter address"
        />
      </div>
      <div>
        <button className='submit-btn' type="submit">Add Wallet</button>
        <button className='cancel-btn' type="button" onClick={() => navigate('/address-book')}>
          Back
        </button>
      </div>
      
    </form>
    </div>
  );
}

export default AddressForm;
