function MusicItem({ music }) {
  return (
    <li className="flex items-center gap-4">
      <img
        src={music.imageUrl}
        alt="Foto do artista"
        className="w-13 h-13 rounded-full object-cover"
      />
      <div className="flex flex-col">
        <span className="font-semibold">{music.title}</span>
        <span>{music.artist}</span>
      </div>
    </li>
  );
}

export default MusicItem;
