import MusicList from "./MusicList";

function TopMusicas() {
  const musics = [
    {
      id: 1,
      title: "Eu Vi Tudo",
      artist: "Zimbra",
      imageUrl: "src/assets/artistUrls/zimbra.png",
    },
    {
      id: 2,
      title: "A Balada de Tim Bernardes",
      artist: "Tim Bernardes",
      imageUrl: "src/assets/artistUrls/timbernardes.png",
    },
    {
      id: 3,
      title: "Lembrei de Nós",
      artist: "João Gomes",
      imageUrl: "src/assets/artistUrls/joaogomes.png",
    },
    {
      id: 4,
      title: "Yellow",
      artist: "Coldplay",
      imageUrl: "src/assets/artistUrls/coldplay.png",
    },
  ];

  return (
    <div className="mt-3">
      <h1 className="text-4xl font-bold">Músicas mais acessadas</h1>
      <MusicList musics={musics}></MusicList>
    </div>
  );
}

export default TopMusicas;
