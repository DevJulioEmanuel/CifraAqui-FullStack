import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function InputMusic() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      navigate(`/search?q=${query}`);
    }
  };
  return (
    <div className="w-full max-w-md p-5">
      <label className="relative block">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        ></Search>
        <input
          type="text"
          placeholder="O que você quer tocar?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full rounded-xl py-2 pr-4 pl-10 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent"
        />
      </label>
    </div>
  );
}

export default InputMusic;
