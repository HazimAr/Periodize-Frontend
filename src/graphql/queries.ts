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
      discipline
      createdAt
      updatedAt
      records {
        items {
          id
          load
          sets
          reps
          rpe
          performedDate
          liftID
          owner
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
            discipline
            createdAt
            updatedAt
          }
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
        discipline
        createdAt
        updatedAt
        records {
          items {
            id
            load
            sets
            reps
            rpe
            performedDate
            liftID
            owner
            createdAt
            updatedAt
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
        discipline
        createdAt
        updatedAt
        records {
          items {
            id
            load
            sets
            reps
            rpe
            performedDate
            liftID
            owner
            createdAt
            updatedAt
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
      sets
      reps
      rpe
      performedDate
      liftID
      owner
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
        discipline
        createdAt
        updatedAt
        records {
          items {
            id
            load
            sets
            reps
            rpe
            performedDate
            liftID
            owner
            createdAt
            updatedAt
          }
          nextToken
        }
      }
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
        sets
        reps
        rpe
        performedDate
        liftID
        owner
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
          discipline
          createdAt
          updatedAt
          records {
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const recordsByUser = /* GraphQL */ `
  query RecordsByUser(
    $owner: String
    $sortDirection: ModelSortDirection
    $filter: ModelRecordFilterInput
    $limit: Int
    $nextToken: String
  ) {
    recordsByUser(
      owner: $owner
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        load
        sets
        reps
        rpe
        performedDate
        liftID
        owner
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
          discipline
          createdAt
          updatedAt
          records {
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
