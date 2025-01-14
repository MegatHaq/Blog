import { gql } from "@apollo/client";

export const GET_HOME_PAGE_DATA = gql`
  query HomePage {
    homePage {
      content
      publishedAt
      lastcontent
      midcontent
      header_tag {
        id
        tag
        uri
      }
      image_description {
        id
        image_tag {
          id
          tag
        }
      }
    }
  }
`;
