import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home"> 
      <main>
        <h1>Home Inventory Manager</h1>
        <p>A Web App solution, to be always updated with what should be on your next shopping list.</p>
        <button>Get Started</button>
      </main>
      <div>
        <h2>Main feature of the app</h2>
        <p>We help you with what is needed in your home Inventory by giving you a shopping list, So that you dont miss anything in your next Shopping.</p>
      </div>
      <div>
        <h2>How does it work?</h2>
        <ul>
          <li>create products</li>
          <li>Update their quantity</li>
          <li>Get your next shopping list, everytime</li>
          <li>Create new products or update product info and quantity</li>
        </ul>
      </div>
      <div>
        <h2>Contact me for queries or feedback</h2>
        <p>Name: Yuvraj Singh Chouhan</p>
        <p>Email: yuvrajisbest13@gmail.com</p>
        <p>Twitter: something</p>
      </div>
      <footer>
        <p>Home Inventory Management App</p>
        <p>This project was built in MLH hero hacks Hackathon By me (Yuvraj Singh Chouhan)</p>
      </footer>
    </div>
  );
};

export default Home;