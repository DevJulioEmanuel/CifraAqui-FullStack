import { useState } from "react";
import { extractYoutubeVideoId } from "../utils/youtubeUtils";

export function useCifraEditor(handleSaveCifra, id) {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");

  const startEditing = () => setIsEditing(true);

  const stopEditing = () => setIsEditing(false);

  const save = async () => {
    if (!content.trim()) return false;

    const videoId = extractYoutubeVideoId(youtubeLink);

    const success = await handleSaveCifra(content, id, videoId);

    if (success) stopEditing();

    return success;
  };

  return {
    isEditing,
    content,
    youtubeLink,
    setContent,
    setYoutubeLink,
    startEditing,
    stopEditing,
    save,
  };
}
