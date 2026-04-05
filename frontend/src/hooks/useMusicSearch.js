import { useState } from "react";
import { searchMusic } from "../services/searchMusic";

export const useMusicSearch = () => {
  const [musics, setMusics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMusics = async (query) => {
    try {
      setLoading(true);
      const data = await searchMusic(query);
      console.log(data.data);

      setMusics(data.data);
    } catch (err) {
      setError("Erro ao buscar músicas. erro: ", err);
    } finally {
      setLoading(false);
    }
  };
  return {
    musics,
    loading,
    error,
    fetchMusics,
  };
};
