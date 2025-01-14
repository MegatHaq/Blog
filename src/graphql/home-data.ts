import { gql } from "@apollo/client";

export const GET_HOME_PAGE_DATA = gql`
  query Query {
    homePage {
      content
      lastcontent
      midcontent
      description
      documentId
      tags1
      tags2
      tags3
      imagetag1
      imagetag2
      imagetag3
    }
  }
`;
