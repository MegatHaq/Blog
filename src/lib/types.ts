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
  documentId: string;
  tags1: string;
  tags2: string;
  tags3: string;
  imagetag1: string;
  imagetag2: string;
  imagetag3: string;
};

export type HomeData = {
  homePage: Home;
};
