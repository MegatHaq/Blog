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
