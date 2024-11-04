'use client'
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'next/navigation'
import { setuser } from '../../redux/userSlice';

const UserDetails: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state:any) => state.user);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: '',
        lng: ''
      }
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: ''
    }
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        dispatch(setuser(data));
        setEditedUser(data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, [id, dispatch]);
  if (!user || !user.address || !user.company) {
    return <div>Loading...</div>;
  }

  const handleEdit = () => {
    setIsEditing(true);
    setEditedUser(user);
  };

  const handleSave = () => {
    dispatch(setuser(editedUser));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedUser(user);
    setIsEditing(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedUser(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedUser(prev => ({
      ...prev,
      address: {
        ...prev.address,
        [name]: value,
      },
    }));
  };

  const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedUser(prev => ({
      ...prev,
      company: {
        ...prev.company,
        [name]: value,
      },
    }));
  };

  return (
    <div className="user-page">
      <h1 className="user-title">User Details</h1>
      {isEditing ? (
        <div>
          <div className="form-group">
            <label>Name:</label>
            <input
              name="name"
              value={editedUser.name}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>Username:</label>
            <input
              name="username"
              value={editedUser.username}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              name="email"
              value={editedUser.email}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          
          <h2>Address</h2>
          <div className="form-group">
            <label>Street:</label>
            <input
              name="street"
              value={editedUser.address.street}
              onChange={handleAddressChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>Suite:</label>
            <input
              name="suite"
              value={editedUser.address.suite}
              onChange={handleAddressChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>City:</label>
            <input
              name="city"
              value={editedUser.address.city}
              onChange={handleAddressChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>Zipcode:</label>
            <input
              name="zipcode"
              value={editedUser.address.zipcode}
              onChange={handleAddressChange}
              className="input-field"
            />
          </div>

          <h2>Phone and Website</h2>
          <div className="form-group">
            <label>Phone:</label>
            <input
              name="phone"
              value={editedUser.phone}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>Website:</label>
            <input
              name="website"
              value={editedUser.website}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          <h2>Company</h2>
          <div className="form-group">
            <label>Company Name:</label>
            <input
              name="name"
              value={editedUser.company.name}
              onChange={handleCompanyChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>Catch Phrase:</label>
            <input
              name="catchPhrase"
              value={editedUser.company.catchPhrase}
              onChange={handleCompanyChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>BS:</label>
            <input
              name="bs"
              value={editedUser.company.bs}
              onChange={handleCompanyChange}
              className="input-field"
            />
          </div>

          <div className="button-group">
            <button onClick={handleSave} className="button save-button">Save</button>
            <button onClick={handleCancel} className="button cancel-button">Cancel</button>
          </div>
        </div>
      ) : (
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <h2>Address</h2>
          <p>{user.address.street}</p>
          <p>{user.address.suite}</p>
          <p>{user.address.city}</p>
          <p>{user.address.zipcode}</p>
          <h2>Phone and Website</h2>
          <p>{user.phone}</p>
          <p>{user.website}</p>
          <h2>Company</h2>
          <p>{user.company.name}</p>
          <p>{user.company.catchPhrase}</p>
          <p>{user.company.bs}</p>
          <button onClick={handleEdit} className="button edit-button">Edit</button>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
