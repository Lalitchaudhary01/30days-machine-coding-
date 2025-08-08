import React, { useEffect, useState } from "react";

const Movies = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchMvies = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=8d4c6e5b7a1a9c3e4a4c6e5b7a1a9c3e&language=en-US&query=${search}&page=1&include_adult=false`
      );
      if (res.ok) {
        const data = await res.json();
        setMovies(data.results);
      } else {
        setError("Network response was not ok");
      }
    } catch (err) {
      setError("Failed to load users.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (search) {
      fetchMvies();
    }
  }, [search]);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  if (loading)
    return <p className="text-center mt-10 text-blue-500">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="min-h-screen flex justify-center">
      <h1 className="text-4xl font-bold text-gray-800 mt-10">
        Movies Search API
      </h1>
      <form className="flex flex-col items-center mt-10">
        <input
          type="text"
          placeholder="Search for movies..."
          value={search}
          onChange={handleSearch}
          className="border-2 border-gray-300 p-2 rounded-md w-80"
        />
        <button
          type="button"
          onClick={fetchMvies}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Search Movies
        </button>
        {movies.length > 0 && (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {movies.map((movie) => (
              <div key={movie.id} className="bg-white p-4 rounded-md shadow-md">
                <h2 className="text-lg font-semibold">{movie.title}</h2>
                <p className="text-gray-600">{movie.overview}</p>
              </div>
            ))}
          </div>
        )}
      </form>
    </div>
  );
};

export default Movies;
