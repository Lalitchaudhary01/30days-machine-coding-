import React, { useState } from "react";

const ProductSearch = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);

  const products = [
    { name: "iPhone", price: 80000 },
    { name: "Laptop", price: 60000 },
    { name: "Watch", price: 15000 },
  ];

  const handleSearch = () => {
    const found = products.find(
      (product) => product.name.toLowerCase() === query.toLowerCase()
    );
    setResult(found || "notfound");
  };

  return (
    <div className="flex flex-col items-center mt-10 text-white bg-black min-h-screen pt-10">
      <h1 className="text-3xl mb-4">Search Product</h1>
      <input
        className="text-black px-4 py-2 rounded"
        type="text"
        placeholder="Enter product name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-4"
        onClick={handleSearch}
      >
        Search
      </button>

      {result === "notfound" && (
        <p className="mt-4 text-red-400">Product not found</p>
      )}

      {result && result !== "notfound" && (
        <div className="mt-4 bg-gray-800 px-4 py-2 rounded">
          <p>Name: {result.name}</p>
          <p>Price: ₹{result.price}</p>
        </div>
      )}
    </div>
  );
};

export default ProductSearch;
