import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import "./Inventory.css";
import NewProductFormImg from "../../assets/shopping-2.svg";
import UpdateProductFormImg from "../../assets/use-1.svg";

const Inventory = () => {

  const [productsData, setProductsData] = useState([]);

  const fetchData = () => {
    const productsDataStored = JSON.parse(localStorage.getItem("products") || "[]");
    setProductsData(productsDataStored);
  }

  useEffect(() => {
    fetchData();
  }, []);


  const [newProductData, setNewProductData] = useState({
    name: "",
    quantityConsumption: "",
    daysConsumption: "",
    quantityInInventory: 0,
    lastAddedDate: new Date(),
    lastAddedQuantity: 0,
  });

  const handleInputChange = e => {
    setNewProductData({
      ...newProductData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const temp = [...productsData];
    temp.push(newProductData);
    setProductsData([...temp]);

    console.log(productsData);

    const dataInLocalStorage = JSON.parse(localStorage.getItem("products") || "[]");
    
    dataInLocalStorage.push(newProductData);

    localStorage.setItem("products", JSON.stringify(dataInLocalStorage));

    console.log(productsData);

    setNewProductData({
      name: "",
      quantityConsumption: "",
      daysConsumption: ""
    });
  }

 

  return (
    <div className="Inventory">
    { console.log("products", productsData)}
      <h1>Inventory</h1>
      {productsData.length > 0 ? (
        <div className="stored">
          <h2>Your Inventory</h2>
          <table>
            <tr>
              <th>Product Name</th>
              {/* <th>Last Added Date</th>
              <th>Last Added Quantity</th> */}
              <th>Quantity Remaining</th>
              <th>Remaining Days</th>
            </tr>

            {productsData.map((product, index) => {
              return (
                <tr>
                  <td>{product.name}</td>
                  {/* <td>{product.lastAddedDate}</td>
                  <td>{product.lastAddedQuantity}</td> */}
                  <td>{product.quantityInInventory}</td>
                  <td>{product.daysConsumption}</td>
                </tr>
              );
            })}
          </table>
          <table>
            <tr>
              <th>Product Name</th>
              <th>Last Added Date</th>
              <th>Last Added Quantity</th>
            </tr>

            {productsData.map((product, index) => {
              return (
                <tr>
                  <td>{product.name}</td>
                  <td>{product.lastAddedDate}</td>
                  <td>{product.lastAddedQuantity}</td>
                </tr>
              );
            })}
          </table>
          <h2>Your Products</h2>
          <table>
            <tr>
              <th>Product Name</th>
              <th>Quantity being consumed</th>
              <th>Days to consume</th>
            </tr>

            {productsData.map((product, index) => {
              return (
                <tr>
                  <td>{product.name}</td>
                  <td>{product.quantityConsumption}</td>
                  <td>{product.daysConsumption}</td>
                </tr>
              );
            })}
          </table>
        </div>
      ) : (
        <h1>No products added yet</h1>
      )}
      <div className="SignUp">
        <form onSubmit={handleSubmit}>
          <h1>Add new product</h1>
          <label for="name">Product Name</label>
          <br />
          <input
            id="name"
            type="text"
            name="name"
            value={newProductData.name}
            onChange={handleInputChange}
            autoComplete="off"
          />
          <br />
          <label for="quantityConsumption">How much do you consume it? (in Kg/Ltr)</label>
          <br />
          <input
            id="quantityConsumption"
            type="text"
            name="quantityConsumption"
            value={newProductData.quantityConsumption}
            onChange={handleInputChange}
            autoComplete="off"
          />
          <br />
          <label for="daysConsumption">How many days do you take to consume it?</label>
          <br />
          <input
            id="daysConsumption"
            type="text"
            name="daysConsumption"
            value={newProductData.daysConsumption}
            onChange={handleInputChange}
          />
          <br />
          <button className="btn">Submit</button>
        </form>
        <img src={NewProductFormImg} />
      </div>
      <div className="SignUp">
        <img src={UpdateProductFormImg} />
        <form onSubmit={handleSubmit}>
          <h1>Update Inventory</h1>
          <label for="name">Product Name</label>
          <br />
          <select>
            <option selected>Select Product</option>
            {productsData.map((product, index) => {
              return <option value={product.name}>{product.name}</option>
            })}
          </select>
          <br />
          <label for="quantityAdded">How much quantity should be added?</label>
          <br />
          <input
            id="quantityAdded"
            type="text"
            name="quantityConsumption"
            value={newProductData.quantityConsumption}
            onChange={handleInputChange}
            autoComplete="off"
          />
          <br />
          <label for="daysConsumption">When did you bought this product?</label>
          <br />
          <input
            id="daysConsumption"
            type="date"
            name="daysConsumption"
            value={newProductData.daysConsumption}
            onChange={handleInputChange}
          />
          <br />
          <button className="btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Inventory;
