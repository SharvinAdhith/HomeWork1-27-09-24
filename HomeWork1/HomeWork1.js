import React, { useState } from 'react';
//import axios from 'axios';
import './HomeWork1.css'; 

const ConsumerData = () => {
    const [users, setUsers] = useState([
        { ID: 1, Name: 'Arjun', Email: 'arjun567@gmail.com', PhoneNo: '7854269885' },
        { ID: 2, Name: 'Krishna', Email: 'krishnalk@gmail.com', PhoneNo: '8759624781' },
        { ID:3, Name: 'Sharvin Adhith',Email: 'Sharvin@gmail.com', PhoneNo: '9945896265' },
        { ID:4, Name: 'Vikash',Email: 'vikas@gmail.com', PhoneNo: '7663598456' },
        { ID:5, Name: 'Wahaj',Email: 'Wahaj@gmail.com', PhoneNo: '7698569812' },
        { ID:6, Name: 'Nicholas',Email: 'nicholas@gmail.com', PhoneNo: '9782497328' },
    ]);
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [PhoneNo, setPhoneNo] = useState('');
    const HandleAddUser = () => {

        const nameRegex = /^[A-Za-z\s]+$/;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!Name || !Email || !PhoneNo) {
            alert('Please fill out all details');
            return;
        }
        if(!nameRegex.test(Name)){
            alert('Please enter Name properly');
            return;
        }
        if(!emailRegex.test(Email)){
            alert('Please enter email id correctly');
            return;
        }
        if(!/^\d{10}$/.test(PhoneNo)){
            alert('Please enter right count of Phone Number');
            return;
        }

        const newUser = {
            ID: users.length + 1,
            Name,
            Email,
            PhoneNo: parseInt(PhoneNo, 10),
        };
        setUsers([...users, newUser]);
        setName('');
        setEmail('');
        setPhoneNo('');
    };
    return (
        <>
            <h1>Consumer Data of Coimbatore Branch</h1>
            <div className="userdatadiv">
                <h2>Consumer Data</h2>
                <table className="Table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Contact Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.ID}>
                                <td>{user.ID}</td>
                                <td>{user.Name}</td>
                                <td>{user.Email}</td>
                                <td>{user.PhoneNo}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="inputdiv">
                    <input
                        type="text"
                        placeholder="Enter Name"
                        value={Name}
                        onChange={(e) => setName(e.target.value)}/>
                    <input
                        type="Email"
                        placeholder="Enter Email"
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)}/>
                    <input
                        type="number"
                        placeholder="Enter Contact Number"
                        value={PhoneNo}
                        onChange={(e) => setPhoneNo(e.target.value)}/>
                    <button onClick={HandleAddUser}>Add New Customer</button>
                </div>
            </div>
        </>
    );
};
export default ConsumerData;
