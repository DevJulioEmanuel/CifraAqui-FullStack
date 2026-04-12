import { useState } from "react";
import { searchMusicById } from "../services/searchMusicById";
import { getCifraByDeezerId, saveCifra } from "../services/cifraService";

export const useCifraPage = () => {
  const [music, setMusic] = useState(null);
  const [cifra, setCifra] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMusicById = async (id) => {
    try {
      setLoading(true);

      const [musicRes, cifraRes] = await Promise.all([
        searchMusicById(id),
        getCifraByDeezerId(id),
      ]);

      setMusic(musicRes.data);
      setCifra(cifraRes);
    } catch (err) {
      setError(`Erro ao carregar dados: ${err}`);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveCifra = async (content, deezerId, videoId) => {
    try {
      const saved = await saveCifra({
        content,
        deezerId,
        videoId,
      });

      setCifra(saved);
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  };

  return {
    music,
    cifra,
    loading,
    error,
    fetchMusicById,
    handleSaveCifra,
  };
};
