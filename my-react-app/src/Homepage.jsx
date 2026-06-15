import React from 'react'
import './App.css';
import login from './Login.jsx'
import volunteer from './Volunteer.jsx'
import Dashboard from './Dashboard.jsx'
import {Link} from 'react-router-dom'

const Homepage = () => {
    return (
    <div>

      {/* Navbar */}
      <nav className="navbar">
        <h2>VolunteerHub</h2>

        <ul>
          <li><a href="/volunteer">Register</a></li>
          <li><a href="/login">Admin Login</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">

        <h1>Make a Difference in Your Community</h1>

        <p>
          Join our volunteer network and help create
          positive change through community service.
        </p>

        <button className="register-btn">
         <a href="/volunteer">Register Now</a>
        </button>

      </section>

      {/* About Section */}
      <section className="about">

        <h2>About Us</h2>

        <p>
          Our Volunteer Registration System helps
          organizations connect with volunteers.
          Register your skills and participate in
          meaningful activities.'This is the sample data only'.
        </p>

      </section>

      {/* Statistics Cards */}
      <section className="stats">

        <div className="card">
          <h2>500+</h2>
          <p>Volunteers</p>
        </div>

        <div className="card">
          <h2>50+</h2>
          <p>Events</p>
        </div>

        <div className="card">
          <h2>20+</h2>
          <p>Organizations</p>
        </div>

      </section>

      {/* Footer */}
      <footer>
        <p>
          © 2026 VolunteerHub | All Rights Reserved
        </p>
      </footer>

    </div>
    )
}

export default Homepage