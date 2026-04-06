import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function MusicCard({ music }) {
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className="flex flex-row items-center gap-4 mt-5 ml-10 mb-8">
      <img src={music.album.cover} className="w-12 h-12 rounded-full" />

      <div
        onClick={() => navigate(`/music/${music.id}`)}
        className="w-80 hover:bg-gray-100 p-2 cursor-pointer transition rounded-md"
      >
        <p className="font-semibold">{music.title}</p>
        <p className="text-sm text-gray-500">{music.artist.name}</p>
      </div>

      <button
        onClick={togglePlay}
        className="bg-gray-200 text-white w-14 h-14 rounded-full"
      >
        {playing ? "❚❚" : "▶︎"}
      </button>

      <audio ref={audioRef} src={music.preview} />
    </div>
  );
}

export default MusicCard;
