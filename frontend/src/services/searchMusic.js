import api from "./api";

export const searchMusic = async (name) => {
  const response = await api.get(`/search/${name}`);
  return response;
};
