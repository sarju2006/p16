
import { useState } from "react";

export default function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function addProduct(event) {
    event.preventDefault();

    const newProduct = {
      id: Date.now(),
      name: name,
      price: Number(price)
    };

    setProducts([...products, newProduct]);
    setName("");
    setPrice("");
  }

  return (
    <div>
      <h1>Product Management</h1>

      <form onSubmit={addProduct}>
        <input
          type="text"
          placeholder="Enter Product Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <br /><br />

        <input
          type="number"
          placeholder="Enter Product Price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          min="0"
          required
        />
        <br /><br />

        <button type="submit">Add Product</button>
      </form>

      <h2>Product List</h2>

      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        products.map((product) => (
          <div key={product.id}>
            <p>
              Product: {product.name} | Price: Rs. {product.price}
            </p>
          </div>
        ))
      )}
    </div>
  );
}
