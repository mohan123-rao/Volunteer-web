import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css'
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const res = await axios.get("https://volunteer-backend-4bfp.onrender.com/volunteer-get");
        console.log(res.data);
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAll();
  }, []);

  if (!data) return <h2>Loading...</h2>;

  return (
    <div className="dashboard">
      <h1> Volunteers Dashboard</h1>
        <>
        <table border={1}>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
            <th>Phone Number</th>
            <th>gender</th>                     
            <th>Age</th>
            <th>Address</th>
            <th>Skills</th>
            <th>Area of Interest</th>
            <th>Availability</th>
            </tr>
          </thead>
          <tbody>
            {
            data.map((v) => (
            <tr>
              <td>{v.fullName}</td>
              <td>{v.email}</td>
              <td>{v.phoneNumber}</td>
              <td>{v.gender}</td>
              <td>{v.age}</td>
              <td>{v.address}</td>
              <td>{v.skills}</td>
              <td>{v.areaOfInterest}</td>
              <td>{v.availability}</td>
            </tr>
            ))
          }
          </tbody>
        </table>
        </>
    </div>
  );
};

export default Dashboard;
