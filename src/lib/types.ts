export type PostsTitle = {
  title: String;
  documentId: string;
};

export type PostsTitleList = {
  posts: PostsTitle[];
};

export type PostData = {
  post: Post;
};

export type Post = {
  content: contentData[];
  title: string;
  publishedAt: string;
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
export type Home = {
  content: contentData[];
  lastcontent: contentData[];
  midcontent: contentData[];
  description: string;
  header_tag: HeaderTag[];
  image_tag: ImageTag[];
};

export type HeaderTag = {
  id: string;
  tag: string;
};

export type ImageTag = {
  id: string;
  tag: string;
};

export type HomeData = {
  homePage: Home;
};
