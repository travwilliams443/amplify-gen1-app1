/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAccountTransfer = /* GraphQL */ `
  mutation CreateAccountTransfer(
    $input: CreateAccountTransferInput!
    $condition: ModelAccountTransferConditionInput
  ) {
    createAccountTransfer(input: $input, condition: $condition) {
      id
      fromAccountId
      fromAccountNumber
      fromAccountHolderName
      toAccountId
      toAccountNumber
      toAccountHolderName
      amount
      currency
      transferDate
      status
      notes
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateAccountTransfer = /* GraphQL */ `
  mutation UpdateAccountTransfer(
    $input: UpdateAccountTransferInput!
    $condition: ModelAccountTransferConditionInput
  ) {
    updateAccountTransfer(input: $input, condition: $condition) {
      id
      fromAccountId
      fromAccountNumber
      fromAccountHolderName
      toAccountId
      toAccountNumber
      toAccountHolderName
      amount
      currency
      transferDate
      status
      notes
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteAccountTransfer = /* GraphQL */ `
  mutation DeleteAccountTransfer(
    $input: DeleteAccountTransferInput!
    $condition: ModelAccountTransferConditionInput
  ) {
    deleteAccountTransfer(input: $input, condition: $condition) {
      id
      fromAccountId
      fromAccountNumber
      fromAccountHolderName
      toAccountId
      toAccountNumber
      toAccountHolderName
      amount
      currency
      transferDate
      status
      notes
      createdAt
      updatedAt
      __typename
    }
  }
`;
