import React, { useState } from "react";
import "./Inventory.css";

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

  return (
    <div className="Inventory">
    <h1>Inventory</h1>
     {(productsData.length > 0) ? (
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
      <div>
        <form>
          <h2>Add a new Product</h2>
          <label>
            Product Name
            <input type="text" name="productName" />
          </label>
          <label>
            Quantity consumed
            <input type="text" name="productName" />
          </label>
          <label>
            Days to consume
            <input type="text" name="productName" />
          </label>
          <button>Submit</button>
        </form>
      </div>
      <div>
        <form>
          <h2>Update Inventory</h2>
          <label>
            Dropdown
            <input type="text" name="productName" />
          </label>
          <label>
            Quantity consumed
            <input type="text" name="productName" />
          </label>
          <label>
            Days to consume
            <input type="text" name="productName" />
          </label>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Inventory;
