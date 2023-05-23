import { client } from '@/api/instance';

const getToken = async () => {
  return await client.get('/auth/anonymous?platform=subscriptions');
};

export const getAuthorisationHeader = async () => {
  const token = await getToken();
  return {
    headers: { Authorization: `Bearer ${token.data.token}` },
  };
};
