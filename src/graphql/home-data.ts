import { gql } from "@apollo/client";

export const GET_HOME_PAGE_DATA = gql`
  query HomePage {
    homePage {
      main_content {
        content
        tags {
          tag
          id
        }
        id
        card {
          id
          image_tag {
            id
            tag
          }
          image_description
          image {
            caption
            url
          }
        }
      }
    }
  }
`;
