import ArtistList from "./ArtistList";

function TopArtist() {
  const artists = [
    {
      id: 1,
      artist: "Zimbra",
      imageUrl: "src/assets/artistUrls/zimbra.png",
    },
    {
      id: 2,
      artist: "Tim Bernardes",
      imageUrl: "src/assets/artistUrls/timbernardes.png",
    },
    {
      id: 3,
      artist: "João Gomes",
      imageUrl: "src/assets/artistUrls/joaogomes.png",
    },
    {
      id: 4,
      artist: "Coldplay",
      imageUrl: "src/assets/artistUrls/coldplay.png",
    },
  ];

  return (
    <div className="mt-10">
      <h1 className="text-4xl font-bold">Artistas mais acessadas</h1>
      <ArtistList artists={artists}></ArtistList>
    </div>
  );
}

export default TopArtist;
