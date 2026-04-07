import { useState } from "react";
import { searchMusicById } from "../services/searchMusicById";

export const useCifraPage = () => {
  const [music, setMusic] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMusicById = async (id) => {
    try {
      setLoading(true);
      const data = await searchMusicById(id);
      setMusic(data.data);
    } catch (err) {
      setError(`Erro ao buscar dados da música. erro: ${err}`);
    } finally {
      setLoading(false);
    }
  };

  return {
    music,
    loading,
    error,
    fetchMusicById,
  };
};
