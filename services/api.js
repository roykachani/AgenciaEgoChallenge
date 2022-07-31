import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const getAll = async () => {
  const { data } = await axios.get(baseUrl);

  return data;
};

export const getModelById = async (id) => {
  const { data } = await axios.get(`${baseUrl}${id}`);

  return data;
};
