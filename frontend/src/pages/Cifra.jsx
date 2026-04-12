/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCifraPage } from "../hooks/useCifraPage";
import InputMusic from "../components/Core/InputMusic";
import Title from "../components/Core/Title";
import NavBar from "../components/Core/NavBar";
import Footer from "../components/Core/Footer";

import CardMusicDetails from "../components/CifraComponents/CardMusicDetails";
import YoutubePlayer from "../components/YoutubePlayer";

function Cifra() {
  const { id } = useParams();
  const { music, cifra, loading, error, fetchMusicById, handleSaveCifra } =
    useCifraPage();
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState("");

  useEffect(() => {
    fetchMusicById(id);
  }, [id]);
  useEffect(() => {
    if (cifra?.content) setContent(cifra.content);
  }, [cifra]);

  const [youtubeLink, setYoutubeLink] = useState("");

  const extractVideoId = (url) => {
    const match = url.match(/(?:v=|youtu\.be\/)([^&\s]+)/);
    return match ? match[1] : null;
  };

  const handleSave = async () => {
    if (!content.trim()) return;

    const videoId = extractVideoId(youtubeLink);
    const success = await handleSaveCifra(content, id, videoId);

    if (success) setIsEditing(false);
  };

  return (
    <div>
      <div className="flex">
        <Title />
        <InputMusic />
        <NavBar />
      </div>

      <CardMusicDetails music={music} />

      {/* Container principal — cifra à esquerda, player à direita */}
      <div className="max-w-5xl mx-auto flex gap-8 mt-10 items-start px-4">
        {/* Coluna da cifra — cresce pra ocupar o espaço disponível */}
        <div className="w-[600px] flex flex-col gap-4">
          {loading && <p>Carregando...</p>}
          {error && <p>{error}</p>}

          {!cifra && !isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-black text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
            >
              Criar Cifra
            </button>
          )}

          {cifra && !isEditing && (
            <>
              <pre className="whitespace-pre-wrap font-mono text-sm bg-gray-50 p-10 rounded-xl">
                {cifra.content}
              </pre>
              <button
                onClick={() => setIsEditing(true)}
                className="bg-black text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
              >
                Editar cifra
              </button>
            </>
          )}

          {isEditing && (
            <>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Digite ou cole a cifra aqui..."
                className="w-full min-h-[300px] max-h-[600px] p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black resize-none font-mono text-sm overflow-y-auto"
              />
              <input
                type="text"
                value={youtubeLink}
                onChange={(e) => setYoutubeLink(e.target.value)}
                placeholder="Cole o link do YouTube aqui..."
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button
                onClick={handleSave}
                className="bg-black text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
              >
                Salvar cifra
              </button>
            </>
          )}
        </div>

        {/* Player — largura fixa, fica grudado no topo */}
        <div className="shrink-0 sticky top-6 self-start">
          <YoutubePlayer videoId={cifra?.videoId} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Cifra;
