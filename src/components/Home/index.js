import React from "react";
import "./Home.css";
import ShoppingImg1 from "../../assets/shopping-1.svg";
import ShoppingImg2 from "../../assets/shopping-2.svg";
import AddImg from "../../assets/add.svg";
import UpdateImg from "../../assets/update.svg";
import GetImg from "../../assets/get.svg";
import UseImg from "../../assets/use-1.svg";
import ContactImg from "../../assets/contact.svg";


const Home = () => {
  return (
    <div className="Home"> 
      <main>
        <div className="main-info">
          <h1>Home Inventory Manager</h1>
          <p>A Web App solution, to be always updated with what should be on your next shopping list.</p>
          <button className="btn">Get Started</button>
        </div>
        <img src={ShoppingImg1} />
      </main>
      <div className="feature">
        <img src={ShoppingImg2} />
        <div>
          <h2>Main feature of the app</h2>
          <p>We help you with what is needed in your home Inventory by giving you a shopping list, So that you dont miss anything in your next Shopping.</p>
        </div>
      </div>
      <div className="working">
        <h2>How does it work?</h2>
        <div className="steps">
          <div className="step">
            <div>
              <h3>Create Product</h3>
              <p>Create a product and tell how much quantity do you consume of it.</p>
            </div>
            <img src={AddImg} />
          </div>
          <div className="step">
            <img src={UpdateImg} />
            <div>
              <h3>Update Quantity</h3>
              <p>Update your products quantity to match with the quantity at your home.</p>
            </div>
          </div>
          <div className="step">
            <div>
              <h3>Get your next shopping list</h3>
              <p>Now you can see what products should be on your next shopping list.</p>
            </div>
            <img src={GetImg} />
          </div>
          <div className="step">
            <img src={UseImg} />
            <div>
              <h3>Use as you need</h3>
              <p>Now you can add more products, update product quantities as you shop.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="contact">
        <div>
          <h2>Contact me for queries or feedback</h2>
          <p>Name: Yuvraj Singh Chouhan</p>
          <p>Email: yuvrajisbest13@gmail.com</p>
          <p>Twitter: something</p>
        </div>
        <img src={ContactImg} />
      </div>
      <footer>
        <div>
          <p className="logo">Home Inventory Management App</p>
          <p>This project was built in MLH hero hacks Hackathon, Github Repo here.</p>
        </div>
        <div className="links">
          <a>Google</a>
          <a>Github</a>
          <a>Instagram</a>
          <a>Twitter</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;