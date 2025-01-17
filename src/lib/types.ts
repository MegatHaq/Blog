export type PostsTitle = {
  title: string;
  publishedAt: string;
  image: ImageData;
  documentId: string;
  synopsis: string;
  category: HeaderTag[];
};

export type PostsTitleList = {
  posts: PostsTitle[];
};

export type PostData = {
  post: Post;
};

export type Post = {
  title: string;
  category: HeaderTag[];
  content: contentData[];
  publishedAt: string;
  image: ImageData;
};

export interface contentData {
  children: childrenData[];
  type: string;
  level: number;
}

export interface childrenData {
  text: string;
  type: string;
}
export type HomeData = {
  homePage: Home;
};

export type Home = {
  main_content: HomeContent[];
};

export type HomeContent = {
  content: contentData[];
  tags?: HeaderTag[];
  card?: Card[];
  id: string;
};

export type Card = {
  id: string;
  image_tag: ImageTag[];
  image_description: string;
  image: ImageData;
};

export type ImageData = {
  url: string;
  caption: string;
};

export type HeaderTag = {
  id: string;
  tag: string;
};

export type ImageTag = {
  id: string;
  tag: string;
};
