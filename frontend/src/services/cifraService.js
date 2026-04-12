import api from "./api";

export const getCifraByDeezerId = async (deezerId) => {
  try {
    const response = await api.get(`/cifras/deezer/${deezerId}`);
    return response.data;
  } catch (err) {
    if (err.response?.status === 404) {
      return null;
    }
    throw err;
  }
};

export const saveCifra = async ({ content, deezerId, videoId }) => {
  const response = await api.post("/cifras", {
    content,
    deezerId,
    videoId,
  });

  return response.data;
};
