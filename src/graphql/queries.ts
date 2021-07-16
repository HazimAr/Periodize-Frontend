/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLift = /* GraphQL */ `
  query GetLift($id: ID!) {
    getLift(id: $id) {
      id
      name
      category
      bodypart
      tags
      favorite
      unit
      owner
      createdAt
      updatedAt
      records {
        items {
          id
          load
          warmup
          sets
          reps
          rpe
          performedDate
          liftID
          createdAt
          updatedAt
          lift {
            id
            name
            category
            bodypart
            tags
            favorite
            unit
            owner
            createdAt
            updatedAt
          }
          owner
        }
        nextToken
      }
    }
  }
`;
export const listLifts = /* GraphQL */ `
  query ListLifts(
    $filter: ModelLiftFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLifts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        category
        bodypart
        tags
        favorite
        unit
        owner
        createdAt
        updatedAt
        records {
          items {
            id
            load
            warmup
            sets
            reps
            rpe
            performedDate
            liftID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const liftsByUser = /* GraphQL */ `
  query LiftsByUser(
    $owner: String
    $sortDirection: ModelSortDirection
    $filter: ModelLiftFilterInput
    $limit: Int
    $nextToken: String
  ) {
    liftsByUser(
      owner: $owner
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        category
        bodypart
        tags
        favorite
        unit
        owner
        createdAt
        updatedAt
        records {
          items {
            id
            load
            warmup
            sets
            reps
            rpe
            performedDate
            liftID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getRecord = /* GraphQL */ `
  query GetRecord($id: ID!) {
    getRecord(id: $id) {
      id
      load
      warmup
      sets
      reps
      rpe
      performedDate
      liftID
      createdAt
      updatedAt
      lift {
        id
        name
        category
        bodypart
        tags
        favorite
        unit
        owner
        createdAt
        updatedAt
        records {
          items {
            id
            load
            warmup
            sets
            reps
            rpe
            performedDate
            liftID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      owner
    }
  }
`;
export const listRecords = /* GraphQL */ `
  query ListRecords(
    $filter: ModelRecordFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecords(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        load
        warmup
        sets
        reps
        rpe
        performedDate
        liftID
        createdAt
        updatedAt
        lift {
          id
          name
          category
          bodypart
          tags
          favorite
          unit
          owner
          createdAt
          updatedAt
          records {
            nextToken
          }
        }
        owner
      }
      nextToken
    }
  }
`;
