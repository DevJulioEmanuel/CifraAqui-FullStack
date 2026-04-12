import { useSearchParams } from "react-router-dom";
import { useMusicSearch } from "../hooks/useMusicSearch";
import InputMusic from "../components/Core/InputMusic";
import Title from "../components/Core/Title";
import NavBar from "../components/Core/NavBar";
import { useEffect } from "react";
import MusicCard from "../components/SearchComponents/MusicCard";

function Search() {
  const [searchParams] = useSearchParams();

  const query = searchParams.get("q");

  const { musics, loading, error, fetchMusics } = useMusicSearch();

  const firstMusic = musics[0];
  const artistImage = firstMusic?.artist?.picture_xl;

  useEffect(() => {
    if (query) {
      fetchMusics(query);
    }
  }, [query]);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex">
        <Title></Title>
        <InputMusic></InputMusic>
        <NavBar></NavBar>
      </div>

      <div className="flex">
        <div className="w-1/2">
          <h1 className="text-2xl font-semibold ml-10">
            Resultados para: {query}
          </h1>
          {loading && <p>Carregando...</p>}
          {error && <p>{error}</p>}
          {musics.map((music) => (
            <MusicCard key={music.id} music={music} />
          ))}
        </div>
        <div className="w-1/2 mt-30">
          {artistImage && (
            <img src={artistImage} alt="Artist" className="rounded-2xl w-96" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;
