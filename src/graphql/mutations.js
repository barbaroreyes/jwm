/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createJoya = /* GraphQL */ `
  mutation CreateJoya(
    $input: CreateJoyaInput!
    $condition: ModelJoyaConditionInput
  ) {
    createJoya(input: $input, condition: $condition) {
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
export const updateJoya = /* GraphQL */ `
  mutation UpdateJoya(
    $input: UpdateJoyaInput!
    $condition: ModelJoyaConditionInput
  ) {
    updateJoya(input: $input, condition: $condition) {
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
export const deleteJoya = /* GraphQL */ `
  mutation DeleteJoya(
    $input: DeleteJoyaInput!
    $condition: ModelJoyaConditionInput
  ) {
    deleteJoya(input: $input, condition: $condition) {
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
