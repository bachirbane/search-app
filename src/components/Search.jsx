import { useState } from "react";

function Search() {
  // État pour stocker la recherche de l'utilisateur
  const [query, setQuery] = useState("");

  // Fonction déclenchée quand on soumet le formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    // Ouvre une recherche Google avec la requête saisie
    window.open(`https://www.google.com/search?q=${query.trim()}`, "_blank");
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-green-700 px-4">
      {/* Header */}
      <header className="absolute top-0 left-0 px-8 py-4">
        <span className="text-2xl font-bold text-white">InfoGo</span>
      </header>

      {/* Title */}
      <h1 className="text-6xl font-extrabold mb-8 text-white drop-shadow-xl">
        InfoGo
      </h1>

      {/* Search Bar */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center w-full max-w-lg bg-white rounded-full px-3 py-2 shadow-lg transition-transform hover:scale-105"
      >
        {/* Icon */}
        <svg
          className="h-6 w-6 mr-2 text-green-900"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.3-4.3" />
        </svg>

        {/* Input */}
        <input
          type="text"
          className="flex-1 outline-none text-lg text-gray-700 placeholder-gray-400 bg-transparent"
          placeholder="Search anything..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {/* Submit Button */}
         <button
  type="submit"
  className=" text-gray-700  "
>
          Submit
        </button>
      </form>

      {/* Quotes */}
      <div className="mt-12 p-6 rounded-xl bg-gray-800 shadow-xl max-w-3xl text-center">
        <div className="space-y-4">
          <p className="text-white text-xl italic font-medium opacity-90">
            "The important thing is not to stop questioning." – Albert Einstein
          </p>
          <p className="text-white text-xl italic font-medium opacity-90">
            "Research is formalized curiosity." – Zora Neale Hurston
          </p>
          <p className="text-white text-xl italic font-medium opacity-90">
            "Curiosity is the spark behind every great idea." – Unknown
          </p>
          <p className="text-white text-xl italic font-medium opacity-90">
            "Curiosity is the beginning of wisdom." – Socrates
          </p>
        </div>
      </div>
    </div>
  );
}

export default Search;
