import MusicItem from "./MusicItem";

function MusicList({ musics }) {
  return (
    <ul className="mt-8 flex flex-col gap-6">
      {musics.map((music) => {
        return <MusicItem key={music.id} music={music} />;
      })}
    </ul>
  );
}

export default MusicList;
