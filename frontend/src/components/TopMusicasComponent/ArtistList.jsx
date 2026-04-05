import ArtistItem from "./ArtistItem";

function ArtistList({ artists }) {
  return (
    <ul className="mt-8 flex flex-col gap-6">
      {artists.map((artist) => {
        return <ArtistItem key={artist.id} artist={artist} />;
      })}
    </ul>
  );
}

export default ArtistList;
