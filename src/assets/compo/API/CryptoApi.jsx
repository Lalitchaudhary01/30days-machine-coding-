import React, { useEffect, useState } from "react";

const CryptoApi = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const filteresUser = user.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );
  const fetchUser = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
      );
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      setUser(data);
    } catch (err) {
      setError("Failed to load users.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  if (loading)
    return <p className="text-center mt-10 text-blue-500">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Crypto Currency List
      </h1>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteresUser.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow-md rounded p-4 hover:shadow-lg transition duration-300"
          >
            <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
            <p className="text-sm text-gray-700">
              <strong>Symbol:</strong> {user.symbol.toUpperCase()}
            </p>
            <p className="text-sm text-gray-700">
              <strong>Current Price:</strong> $
              {user.current_price.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoApi;
