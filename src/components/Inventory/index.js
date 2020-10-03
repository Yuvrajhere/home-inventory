import React from "react";

const Inventory = () => {
  return (
    <div>
      <div>
        <h1>Inventory</h1>
      </div>
      <div>
        <h2>Your Inventory</h2>
        <table>
          <tr>
            <th>Product Name</th>
            <th>Last Added Date</th>
            <th>Last Added Quantity</th>
            <th>Remaining Days</th>
          </tr>
          <tr>
            <td>Peter</td>
            <td>Griffin</td>
            <td>$100</td>
            <td>20</td>
          </tr>
          <tr>
            <td>Lois</td>
            <td>Griffin</td>
            <td>$150</td>
            <td>20</td>
          </tr>
          <tr>
            <td>Joe</td>
            <td>Swanson</td>
            <td>$300</td>
            <td>20</td>
          </tr>
          <tr>
            <td>Cleveland</td>
            <td>Brown</td>
            <td>$250</td>
            <td>20</td>
          </tr>
        </table>
      </div>
      <div>
        <h2>Your Products</h2>
        <table>
          <tr>
            <th>Product Name</th>
            <th>Quantity consumed</th>
            <th>Days to consume</th>
          </tr>
          <tr>
            <td>Peter</td>
            <td>Griffin</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>Lois</td>
            <td>Griffin</td>
            <td>$150</td>
          </tr>
          <tr>
            <td>Joe</td>
            <td>Swanson</td>
            <td>$300</td>
          </tr>
          <tr>
            <td>Cleveland</td>
            <td>Brown</td>
            <td>$250</td>
          </tr>
        </table>
      </div>
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