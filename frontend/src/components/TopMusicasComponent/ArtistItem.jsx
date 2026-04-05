function ArtistItem({ artist }) {
  return (
    <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer transition">
      <img
        src={artist.imageUrl}
        alt="Foto do artista"
        className="w-13 h-13 rounded-full object-cover"
      />
      <span className="font-semibold">{artist.artist}</span>
    </li>
  );
}

export default ArtistItem;
