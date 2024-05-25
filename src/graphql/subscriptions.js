/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAccount = /* GraphQL */ `
  subscription OnCreateAccount($filter: ModelSubscriptionAccountFilterInput) {
    onCreateAccount(filter: $filter) {
      id
      accountNumber
      accountHolderName
      accountType
      balance
      currency
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateAccount = /* GraphQL */ `
  subscription OnUpdateAccount($filter: ModelSubscriptionAccountFilterInput) {
    onUpdateAccount(filter: $filter) {
      id
      accountNumber
      accountHolderName
      accountType
      balance
      currency
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteAccount = /* GraphQL */ `
  subscription OnDeleteAccount($filter: ModelSubscriptionAccountFilterInput) {
    onDeleteAccount(filter: $filter) {
      id
      accountNumber
      accountHolderName
      accountType
      balance
      currency
      createdAt
      updatedAt
      __typename
    }
  }
`;
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
