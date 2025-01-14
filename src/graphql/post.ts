import { gql } from "@apollo/client";

export const GET_POST_TITLES = gql`
  query Query {
    posts {
      title
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
