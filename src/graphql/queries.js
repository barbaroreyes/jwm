/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getJoya = /* GraphQL */ `
  query GetJoya($id: ID!) {
    getJoya(id: $id) {
      id
      name
      description
      category
      price
      picture
      createdAt
      updatedAt
    }
  }
`;
export const listJoyas = /* GraphQL */ `
  query ListJoyas(
    $filter: ModelJoyaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJoyas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        category
        price
        picture
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
