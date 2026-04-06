import api from "./api";

export const searchMusicById = async (id) => {
  const response = await api.get(`/search/track/${id}`);
  return response;
};
