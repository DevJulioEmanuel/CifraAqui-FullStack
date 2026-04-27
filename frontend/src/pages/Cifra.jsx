import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCifraPage } from "../hooks/useCifraPage";
import { useCifraEditor } from "../hooks/useCifraEditor";

import InputMusic from "../components/Core/InputMusic";
import Title from "../components/Core/Title";
import NavBar from "../components/Core/NavBar";
import Footer from "../components/Core/Footer";

import CardMusicDetails from "../components/CifraComponents/CardMusicDetails";
import YoutubePlayer from "../components/CifraComponents/YoutubePlayer";
import CifraTexto from "../components/CifraComponents/CifraTexto";
import CifraEditor from "../components/CifraComponents/CifraEditor";

function Cifra() {
  const { id } = useParams();

  const { music, cifra, loading, error, fetchMusicById, handleSaveCifra } =
    useCifraPage();

  const {
    isEditing,
    content,
    youtubeLink,
    setContent,
    setYoutubeLink,
    startEditing,
    save,
  } = useCifraEditor(handleSaveCifra, id);

  useEffect(() => {
    fetchMusicById(id);
  }, [id]);

  useEffect(() => {
    if (cifra?.content) setContent(cifra.content);
  }, [cifra]);

  return (
    <div>
      <div className="flex">
        <Title />
        <InputMusic />
        <NavBar />
      </div>

      <CardMusicDetails music={music} />

      <div className="max-w-6xl mx-auto flex gap-16 mt-10 items-start px-4">
        <div className="w-[600px] flex flex-col gap-4">
          {loading && <p>Carregando...</p>}
          {error && <p>{error}</p>}

          {!cifra && !isEditing && (
            <button onClick={startEditing}>Criar Cifra</button>
          )}

          {cifra && !isEditing && (
            <>
              <CifraTexto texto={cifra.content} />
              <button onClick={startEditing}>Editar cifra</button>
            </>
          )}

          {isEditing && (
            <CifraEditor
              content={content}
              youtubeLink={youtubeLink}
              setContent={setContent}
              setYoutubeLink={setYoutubeLink}
              onSave={save}
            />
          )}
        </div>

        <div className="shrink-0 sticky top-6 self-start">
          <YoutubePlayer videoId={cifra?.videoId} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Cifra;
