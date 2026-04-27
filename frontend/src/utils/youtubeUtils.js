export function extractYoutubeVideoId(url) {
  if (!url) return null;

  // formato: https://www.youtube.com/watch?v=ID
  if (url.includes("v=")) {
    const match = url.match(/v=([^&\s]+)/);
    return match ? match[1] : null;
  }

  // formato: https://youtu.be/ID
  if (url.includes("youtu.be")) {
    const match = url.match(/youtu\.be\/([^&\s]+)/);
    return match ? match[1] : null;
  }

  // extensão futura (OCP)
  if (url.includes("youtube.com/shorts")) {
    const match = url.match(/shorts\/([^&\s]+)/);
    return match ? match[1] : null;
  }

  return null;
}
