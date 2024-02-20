export type List<T> = {
  data: T;
  total: number;
  page: number;
  limit: number;
};

export type UserPreview = {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
};

export type PostPreview = {
  id: string;
  text: string;
  image: string;
  likes: number;
  tags: string[];
  publishDate: string;
  owner: UserPreview;
};
