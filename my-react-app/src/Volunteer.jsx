import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './App.css';


const Volunteer = () => {
    const [volunteerData,setVolunteerData] = useState({
        fullName:"",
        email:"",
        phoneNumber:"",
        gender:"",
        age:"",
        address:"",
        skills:"",
        areaOfInterest:"",
        availability:"",
        preferredLocation:""
        
    })
    const navigate = useNavigate()

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setVolunteerData((prev) =>({
            ...prev,
            [name]:value
        }))
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(volunteerData)

        try {
      const res = await axios.post('https://volunteer-backend-4bfp.onrender.com/volunteer',volunteerData);
      console.log('Volunteer added:', res.data);
      alert('Volunteer added successfully!');

    } catch (err) {
      console.error('Error adding volunteer:', err);
      alert('Failed to add volunteer');
    }

        
    }



    return (
        <div className='vData'>
            <form onSubmit={handleSubmit}>
                <h2>Volunteer Registration</h2>
                    Full Name:<br />
                     <input
                      type='text' 
                      name="fullName"
                      placeholder='Full Name' 
                      value={volunteerData.fullName}
                      onChange={handleChange}/><br/><br/><br />

                    Email Address:<br/>
                     <input type="email"
                      placeholder="Email" 
                      name='email' 
                      value={volunteerData.email} 
                      onChange={handleChange} 
                      required/><br /><br/>

                    Phone Number:<br/>
                     <input type='number'
                     name="phoneNumber"
                     placeholder='Phone Number' 
                     value={volunteerData.phoneNumber} 
                     onChange={handleChange}
                     required/><br/><br/>

                    Gender:<br/>
                     <select name="gender" value={volunteerData.gender} onChange={handleChange} required>
                     <option value="">Select Gender</option>
                     <option value="male">Male</option>
                     <option value="female">Female</option>
                     <option value="other">Other</option>
                     </select><br/><br/><br/>
                
                    Age:<br/>
                     <input type='number'
                      name="age"
                      placeholder='Age' 
                      value={volunteerData.age} 
                      onChange={handleChange} 
                      required/><br/><br/>

                    Address:<br/>
                     <input type='text' 
                     name="address" 
                     placeholder='Address' 
                     value={volunteerData.address} 
                     onChange={handleChange} 
                     required/><br/><br/>

                    Skills:<br/>
                     <input type="text" 
                     name="skills" 
                     placeholder='Enter your skills'  
                     value={volunteerData.skills} 
                     onChange={handleChange} 
                     required /><br/><br/><br/>
                    
                    Area of Interest:<br/>
                     <select name="areaOfInterest" value={volunteerData.areaOfInterest} onChange={handleChange} required>
                     <option value="">Select Area of Interest</option>
                     <option value="Education">Education</option>
                     <option value="Environment">Environment</option>
                     <option value="Health">Health</option>
                     <option value="Community Service">Community Service</option>
                     </select><br/><br/><br/>

                    Availability:<br/>
                     <select name="availability" value={volunteerData.availability} onChange={handleChange} required>
                     <option value="">Select Availability</option>
                     <option value="Weekdays">Weekdays</option>
                     <option value="Weekends">Weekends</option>
                     <option value="Both">Both</option>
                     </select><br/><br/><br/>
                    
                    Preferred Volunteer location:<br/>
                     <select name="preferredLocation" value={volunteerData.preferredLocation} onChange={handleChange} required>
                     <option value="">Select Preferred Location</option>
                     <option value="Local">Local</option>
                     <option value="Remote">Remote</option>
                     </select><br/><br/><br/>

                <button type='submit'>Create Account</button>
            </form>
        </div>
    )
}

export default Volunteer
