function CifraEditor({
  content,
  youtubeLink,
  setContent,
  setYoutubeLink,
  onSave,
}) {
  return (
    <>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Digite ou cole a cifra aqui..."
        className="w-full min-h-[300px] max-h-[600px] p-4 rounded-xl border border-gray-300"
      />

      <input
        type="text"
        value={youtubeLink}
        onChange={(e) => setYoutubeLink(e.target.value)}
        placeholder="Cole o link do YouTube aqui..."
        className="w-full p-3 rounded-xl border border-gray-300"
      />

      <button
        onClick={onSave}
        className="bg-black text-white py-3 rounded-xl font-semibold"
      >
        Salvar cifra
      </button>
    </>
  );
}

export default CifraEditor;
