import { List, PostPreview } from './interfaces';

const BASE_URL = 'https://dummyapi.io/data/v1';
const APP_ID = '65d4267ee137ca74004e15ec';

export const api = {
  async getPosts(searchParams?: URLSearchParams) {
    const response = await fetch(
      `${BASE_URL}/post?${searchParams?.toString()}`,
      { headers: { 'app-id': APP_ID } }
    );

    return (await response.json()) as List<PostPreview[]>;
  },
};
