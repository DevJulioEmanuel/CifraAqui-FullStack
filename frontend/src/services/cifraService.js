import api from "./api";

export const getCifraByDeezerId = async (deezerId) => {
  try {
    const response = await api.get(`/cifras/${deezerId}`);
    return response.data;
  } catch (err) {
    if (err.response?.status === 404) {
      return null;
    }
    throw err;
  }
};

export const saveCifra = async ({ content, deezerId, isUpdate }) => {
  const method = isUpdate ? "put" : "post";

  const response = await api({
    url: "/cifras",
    method,
    data: {
      content,
      deezerId,
    },
  });

  return response.data;
};
