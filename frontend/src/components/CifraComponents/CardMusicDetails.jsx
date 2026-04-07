function CardMusicDetails({ music }) {
  return (
    <div>
      {music && (
        <div className="ml-20 mt-10 flex gap-8 items-center">
          <img
            className="rounded-full w-24"
            src={music.album.cover}
            alt="Foto do album da música"
          />
          <div className=" flex flex-col gap-1">
            <h1 className="text-2xl font-bold">{music.title}</h1>
            <p className="text-1xl text-gray-500">{music.artist.name}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardMusicDetails;
