/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAccount = /* GraphQL */ `
  query GetAccount($id: ID!) {
    getAccount(id: $id) {
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
export const listAccounts = /* GraphQL */ `
  query ListAccounts(
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getAccountTransfer = /* GraphQL */ `
  query GetAccountTransfer($id: ID!) {
    getAccountTransfer(id: $id) {
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
export const listAccountTransfers = /* GraphQL */ `
  query ListAccountTransfers(
    $filter: ModelAccountTransferFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccountTransfers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
