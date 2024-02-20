import { CommentPreview, List, PostPreview } from './interfaces';

const BASE_URL = 'https://dummyapi.io/data/v1';
const APP_ID = '65d4267ee137ca74004e15ec';
const HEADERS = { 'app-id': APP_ID };

export const api = {
  async getPosts(searchParams?: URLSearchParams) {
    const response = await fetch(
      `${BASE_URL}/post?${searchParams?.toString()}`,
      { headers: HEADERS }
    );

    return (await response.json()) as List<PostPreview[]>;
  },

  async getComments(searchparams?: URLSearchParams) {
    const response = await fetch(
      `${BASE_URL}/comment?${searchparams?.toString()}`,
      { headers: HEADERS }
    );

    return (await response.json()) as List<CommentPreview[]>;
  },
};
