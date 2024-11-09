'use client'
import React, { useState, useEffect } from 'react';
import SearchBar from './searchbar';
import { useDispatch, useSelector } from 'react-redux';
import { AppState, UserState } from '../../types';
import { setuser } from '../redux/userSlice';
interface ModalProps {
  user: UserState;
  onClose: () => void;
  onSave: (updatedUser:UserState) => void;
}
const UserModal: React.FC<ModalProps> = ({ user, onClose  , onSave}) => {
  
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [displayuser, setDisplalyUser] = useState<UserState>(user);
  const [editedUser, setEditedUser] = useState<UserState>({
    id: '' ,
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
  
  const handleEdit = () => {
    setIsEditing(true);
    setEditedUser(user);
  };

  // const handleSave = () => {
  //   setDisplalyUser(editedUser);
  //   setUsers(displayuser);
  //   console.log(user);
  //   setIsEditing(false);
  // };
  const handleSave = () => {
    setDisplalyUser (editedUser);
    onSave(editedUser );
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedUser(user);
    setIsEditing(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedUser((prev) => ({
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
  if (!user) return null;
  return (
    <div className="user-page">
      <h1 className="user-title">User Details</h1>
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30" className='close-button'>
      <path onClick={onClose} d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
      </svg>
      
      {isEditing ? (
        <div>
          <div className="form-group">
            <label>Name:</label>
            <input
              name="name"
              value={editedUser?.name || 'NA'}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>Username:</label>
            <input
              name="username"
              value={editedUser?.username || 'NA'}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              name="email"
              value={editedUser?.email || 'NA'}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          
          <h2>Address</h2>
          <div className="form-group">
            <label>Street:</label>
            <input
              name="street"
              value={editedUser.address?.street || 'NA'}
              onChange={handleAddressChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>Suite:</label>
            <input
              name="suite"
              value={editedUser.address?.suite || 'NA'}
              onChange={handleAddressChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>City:</label>
            <input
              name="city"
              value={editedUser.address?.city || 'NA'}
              onChange={handleAddressChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>Zipcode:</label>
            <input
              name="zipcode"
              value={editedUser.address?.zipcode || 'NA'}
              onChange={handleAddressChange}
              className="input-field"
            />
          </div>

          <h2>Phone and Website</h2>
          <div className="form-group">
            <label>Phone:</label>
            <input
              name="phone"
              value={editedUser?.phone || 'NA'}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>Website:</label>
            <input
              name="website"
              value={editedUser?.website || 'NA'}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          <h2>Company</h2>
          <div className="form-group">
            <label>Company Name:</label>
            <input
              name="name"
              value={editedUser.company?.name || 'NA'}
              onChange={handleCompanyChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>Catch Phrase:</label>
            <input
              name="catchPhrase"
              value={editedUser.company?.catchPhrase || 'NA'}
              onChange={handleCompanyChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>BS:</label>
            <input
              name="bs"
              value={editedUser.company?.bs || 'NA'}
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
          <p><strong>Name:</strong> {displayuser.name}</p>
          <p><strong>Username:</strong> {displayuser.username}</p>
          <p><strong>Email:</strong> {displayuser.email}</p>
          <h2>Address</h2>
          <p>{displayuser.address.street}</p>
          <p>{displayuser.address.suite}</p>
          <p>{displayuser.address.city}</p>
          <p>{displayuser.address.zipcode}</p>
          <h2>Phone and Website</h2>
          <p>{displayuser.phone}</p>
          <p>{displayuser.website}</p>
          <h2>Company</h2>
          <p>{displayuser.company.name}</p>
          <p>{displayuser.company.catchPhrase}</p>
          <p>{displayuser.company.bs}</p>
          <button onClick={handleEdit} className="button edit-button">Edit</button>
        </div>
      )}
    </div>
  );
};
//-------------------
const UserData: React.FC = () => {
  const [user, setUsers] = useState<UserState[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<UserState[]>([]);
  const [selectedUser, setSelectedUser] = useState<UserState | null>(null);
const dispatch = useDispatch();
const Users = useSelector((state:AppState) => state.user);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data: UserState[] = await response.json();
        setUsers(data);
        dispatch(setuser(data));
        setFilteredUsers(data);
        console.log(Users)

        
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  });
  const handleSearch = (id: string) => {
    const filtered = user.filter((user: { id: { toString: () => string; }; }) => user.id.toString() === id);
    setFilteredUsers(filtered);

  };
  
  const handleSave = (updatedUser:UserState) => {
    const updatedUsers = user.map(u => (u.id === updatedUser .id ? updatedUser  : u));
    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers);
  };
  const handleDelete = (id: string) => {
    const updatedUsers = user.filter(user => user.id !== id);
    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers);
  };
  return (
    <div className="userdata">
      <div className="searchbardiv">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="usercontainer">
        <h1 className="usertitle">User Data</h1>
        <div className="grid">
          {filteredUsers.map(user => (
              <div key={user.id} className="user-data">
                <p >id:- {user.id}</p>
                <h2 className="text-lg-bold">Name:- {user.name}</h2>
                <p >Username:- {user.username}</p>
                <p >Email:- {user.email}</p>
              <div className="div2">
                <button
                  className="button delete-button"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
                <button
                  className="button edit-button"
                  onClick={() => {setSelectedUser(user);
                    console.log('details button clicked')
                    console.log(user)
                  }}
                >
                  See details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedUser && (
        <UserModal 
          user={selectedUser} 
          onClose={() => setSelectedUser(null)} 
          onSave={handleSave}
        />
      )}
    </div>

  );
};

export default UserData;

