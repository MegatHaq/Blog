export interface postData {
  content: contentData[];
  createdAt: string;
  documentId: string;
  id: number;
  title: string;
  publishedAt: string;
  updatedAt: string;
}

export interface contentData {
  children: childrenData[];
  type: string;
  level: number;
}

export interface childrenData {
  text: string;
  type: string;
}

export interface HomeData {
  id: number;
  documentId: string;
  content: contentData[];
  description: string;
  lastcontent: contentData[];
  midcontent: contentData[];
  imagetag1: string;
  imagetag2: string;
  imagetag3: string;
  tags1: string;
  tags2: string;
  tags3: string;
}
