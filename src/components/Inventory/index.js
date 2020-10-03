import React, { useState } from "react";
import {Link} from "react-router-dom";
import "./Inventory.css";
import NewProductFormImg from "../../assets/shopping-2.svg"

const products = [
  {
    name: "Wheat floor",
    quantityConsumption: 10,
    daysConsumption: 15,
    QuantityInInventory: 0,
    lastAddedDate: "22/09/20",
    lastAddedQuantity: 10,
  },
  {
    name: "Rice",
    quantityConsumption: 5,
    daysConsumption: 30,
    QuantityInInventory: 0,
    lastAddedDate: "22/09/20",
    lastAddedQuantity: 5,
  },
  {
    name: "Sunflower Oil",
    quantityConsumption: 8,
    daysConsumption: 20,
    QuantityInInventory: 0,
    lastAddedDate: "22/09/20",
    lastAddedQuantity: 8,
  },
];

const Inventory = () => {
  const [productsData, setProductsData] = useState(products);

  const [newProductData, setNewProductData] = useState({
    name: "",
    quantityConsumption: "",
    daysConsumption: ""
  });

  const handleInputChange = e => {
    setNewProductData({
      ...newProductData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

  }

  return (
    <div className="Inventory">
      <h1>Inventory</h1>
      {productsData.length > 0 ? (
        <div>
          <h2>Your Inventory</h2>
          <table>
            <tr>
              <th>Product Name</th>
              <th>Last Added Date</th>
              <th>Last Added Quantity</th>
              <th>Remaining Days</th>
            </tr>

            {productsData.map((product, index) => {
              return (
                <tr>
                  <td>{product.name}</td>
                  <td>{product.lastAddedDate}</td>
                  <td>{product.lastAddedQuantity}</td>
                  <td>{product.daysConsumption}</td>
                </tr>
              );
            })}
          </table>
          <h2>Your Products</h2>
          <table>
            <tr>
              <th>Product Name</th>
              <th>Quantity consumed</th>
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
          <label for="quantityConsumption">quantityConsumption</label>
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
          <label for="daysConsumption">daysConsumption</label>
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
      )}
      <div className="SignUp">
        <form onSubmit={handleSubmit}>
          <h1>Update Inventory</h1>
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
          <label for="quantityConsumption">quantityConsumption</label>
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
          <label for="daysConsumption">daysConsumption</label>
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
    </div>
  );
};

export default Inventory;
