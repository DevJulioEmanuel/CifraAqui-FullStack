import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCifraPage } from "../hooks/useCifraPage";
import InputMusic from "../components/InputMusic";
import Title from "../components/Title";
import NavBar from "../components/NavBar";
import CardMusicDetails from "../components/CifraComponents/CardMusicDetails";

function Cifra() {
  const { id } = useParams();

  const { music, loading, error, fetchMusicById } = useCifraPage();

  useEffect(() => {
    fetchMusicById(id);
  }, [id]);

  return (
    <div>
      <div className="flex">
        <Title></Title>
        <InputMusic></InputMusic>
        <NavBar></NavBar>
      </div>
      <div>
        <CardMusicDetails music={music}></CardMusicDetails>
      </div>

      <div className="ml-20 mt-10 flex flex-col gap-4 max-w-2xl">
        <textarea
          placeholder="Digite ou cole a cifra aqui..."
          className="w-full min-h-[300px] max-h-[600px] p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black resize-none font-mono text-sm overflow-y-auto"
          onInput={(e) => {
            e.target.style.height = "auto";
            e.target.style.height = e.target.scrollHeight + "px";
          }}
        />

        <button className="bg-black text-white py-3 rounded-xl font-semibold hover:opacity-90 transition">
          Salvar cifra
        </button>
      </div>
    </div>
  );
}

export default Cifra;
