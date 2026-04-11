/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCifraPage } from "../hooks/useCifraPage";
import InputMusic from "../components/InputMusic";
import Title from "../components/Title";
import NavBar from "../components/NavBar";
import CardMusicDetails from "../components/CifraComponents/CardMusicDetails";

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
    if (cifra?.content) {
      setContent(cifra.content);
    }
  }, [cifra]);

  const handleSave = async () => {
    if (!content.trim()) return;

    const success = await handleSaveCifra(content, id);

    if (success) {
      setIsEditing(false);
    }
  };

  return (
    <div>
      <div className="flex">
        <Title />
        <InputMusic />
        <NavBar />
      </div>

      <div>
        <CardMusicDetails music={music} />
      </div>

      <div className="ml-20 mt-10 flex flex-col gap-4 max-w-2xl">
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
            <pre className="whitespace-pre-wrap font-mono text-sm bg-gray-100 p-4 rounded-xl">
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

            <button
              onClick={handleSave}
              className="bg-black text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
            >
              Salvar cifra
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Cifra;
