import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const getAll = async () => {
  const { data } = await axios.get(process.env.NEXT_PUBLIC_API_URL);

  return data;
};

export const getModelById = async (id) => {
  const { data } = await axios.get({
    method: 'GET',
    url: `${process.env.NEXT_PUBLIC_API_URL}${id}`,
  });

  return data;
};
