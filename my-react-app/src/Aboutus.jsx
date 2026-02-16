import React from "react";

const Aboutus = () => {
return (
    <div style={{ maxWidth: "600px", margin: "auto", textAlign: "left", backgroundColor: "lightblue", padding: "20px", borderRadius: "8px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.7)",marginTop:"50px",marginBottom:"50px" }}>
      <h2 style={{marginLeft:"39%"}}>About Us</h2>
      <p>
        Welcome to Local Cart! We are a passionate team dedicated to bringing you the best food and grocery options right to your doorstep. Our mission is to connect you with local restaurants and shops, making it easier than ever to enjoy delicious meals and essential groceries without leaving your home.
      </p>
      <p>
LocalCart is a smart food and grocery ordering platform developed as an academic project. The goal of this system is to demonstrate how modern web technologies, intelligent navigation, and voice-enabled interaction can improve the online ordering experience.

Our platform allows users to explore restaurants and grocery items, add products to the cart, and place orders through a simple and user-friendly interface. The application focuses on clarity, speed, and ease of access for both customers and store owners.

This website is built for project and learning purposes only.
All products, restaurants, prices, and user information shown in the system are demo data and do not represent real businesses.
</p>

<h5>Voice Assistant Feature</h5>
<p>

Local also includes a basic voice assistant designed to showcase speech technology integration in web applications.

Using voice commands, users can perform limited actions such as:

Navigate to pages (example: “Open login page”)

Move between restaurant or grocery sections

Trigger simple interface operations

The assistant is intentionally restricted in capability because it is meant for demonstration and prototype use rather than real-world deployment.
</p>

<h5>Project Vision</h5>
<p>

The aim of Local is to:

Understand full-stack development

Implement authentication and routing

manage orders and customer details

integrate speech recognition and speech output

simulate real-time ordering workflows
</p>
<h5>Disclaimer</h5>
<p>

Local is a prototype application created purely for educational evaluation.
Payments, deliveries, and business operations are not real.
        </p>
    </div>
)
}

export default Aboutus