import { useEffect, useRef, useState } from "react";

export default function YoutubePlayer({ videoId }) {
  const playerRef = useRef(null);
  const containerRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  const createPlayer = () => {
    if (!videoId) return;
    playerRef.current = new window.YT.Player(containerRef.current, {
      height: "270",
      width: "480",
      videoId: videoId,
      playerVars: {
        rel: 0, // não mostrar vídeos relacionados
      },
      events: {
        onReady: () => {
          setIsReady(true);
        },
      },
    });
  };

  useEffect(() => {
    // Se já carregou a API
    if (window.YT && window.YT.Player) {
      createPlayer();
      return;
    }

    // Carrega script apenas uma vez
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";

    window.onYouTubeIframeAPIReady = () => {
      createPlayer();
    };

    document.body.appendChild(tag);
  }, []);

  useEffect(() => {
    if (!videoId) return; // <-- ignora se ainda não tem

    if (playerRef.current && isReady) {
      playerRef.current.loadVideoById(videoId);
      return;
    }

    if (window.YT && window.YT.Player) {
      createPlayer();
    }
  }, [videoId, isReady]);

  return (
    <div>
      <div ref={containerRef} />
      {!isReady && videoId && <p>Carregando player...</p>}
    </div>
  );
}
