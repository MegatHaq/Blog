import { gql } from "@apollo/client";

export const GET_POST_TITLES = gql`
  query Post {
    posts {
      title
      synopsis
      image {
        url
      }
      publishedAt
      category {
        id
        tag
      }
      documentId
    }
  }
`;

export const GET_POST = gql`
  query Query($documentId: ID!) {
    post(documentId: $documentId) {
      content
      title
      publishedAt
    }
  }
`;
