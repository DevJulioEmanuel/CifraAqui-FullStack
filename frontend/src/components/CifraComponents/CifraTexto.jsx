import { useMemo } from "react";

function CifraTexto({ texto }) {
  const partes = useMemo(() => {
    const regex = /\{([^}]+)\}/g;
    const resultado = [];
    let ultimoIndex = 0;
    let match;

    while ((match = regex.exec(texto)) !== null) {
      const [acordeCompleto, acorde] = match;
      if (match.index > ultimoIndex) {
        resultado.push(texto.slice(ultimoIndex, match.index));
      }

      resultado.push(
        <span key={`acorde-${match.index}`} className="font-bold text-blue-500">
          {acorde}
        </span>,
      );

      ultimoIndex = match.index + acordeCompleto.length;
    }

    if (ultimoIndex < texto.length) {
      resultado.push(texto.slice(ultimoIndex));
    }

    return resultado;
  }, [texto]);

  return (
    <div className="whitespace-pre-wrap font-mono text-lg p-10 rounded-xl bg-gray-100">
      {partes}
    </div>
  );
}

export default CifraTexto;
