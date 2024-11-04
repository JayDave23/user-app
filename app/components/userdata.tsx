'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import SearchBar from './searchbar';

interface Users {
  id: number;
  name: string;
  username: string;
  email: string;
}

const UserData: React.FC = () => {
  const [users, setUsers] = useState<Users[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<Users[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data: Users[] = await response.json();
        setUsers(data);
        setFilteredUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);
  const handleSearch = (id: string) => {
    const filtered = users.filter(user => user.id.toString() === id);
    setFilteredUsers(filtered);
  };

  const handleDelete = (id: number) => {
    const updatedUsers = users.filter(user => user.id !== id);
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
              <Link href={`/users/${user.id}`}>
                <p >id:- {user.id}</p>
                <h2 className="text-lg-bold">Name:- {user.name}</h2>
                <p >Username:- {user.username}</p>
                <p >Email:- {user.email}</p>
                
              </Link>
              <div className="div2">
                <button
                  className="button delete-button"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserData;