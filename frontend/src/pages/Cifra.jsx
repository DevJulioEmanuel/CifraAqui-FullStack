import { useState } from "react";
import { useParams } from "react-router-dom";

function Cifra() {
  const { id } = useParams();
  const [cifra, setCifra] = useState("");

  return (
    <div>
      <div>
        <img src="" alt="" />
        <div>
          <h1>Nome da música</h1>
          <p>Nome do artista</p>
        </div>
      </div>

      <textarea name="" id=""></textarea>

      <button></button>
    </div>
  );
}

export default Cifra;
