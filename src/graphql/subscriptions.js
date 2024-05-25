/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAccountTransfer = /* GraphQL */ `
  subscription OnCreateAccountTransfer(
    $filter: ModelSubscriptionAccountTransferFilterInput
  ) {
    onCreateAccountTransfer(filter: $filter) {
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
export const onUpdateAccountTransfer = /* GraphQL */ `
  subscription OnUpdateAccountTransfer(
    $filter: ModelSubscriptionAccountTransferFilterInput
  ) {
    onUpdateAccountTransfer(filter: $filter) {
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
export const onDeleteAccountTransfer = /* GraphQL */ `
  subscription OnDeleteAccountTransfer(
    $filter: ModelSubscriptionAccountTransferFilterInput
  ) {
    onDeleteAccountTransfer(filter: $filter) {
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
