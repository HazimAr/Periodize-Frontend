/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLift = /* GraphQL */ `
  mutation CreateLift(
    $input: CreateLiftInput!
    $condition: ModelLiftConditionInput
  ) {
    createLift(input: $input, condition: $condition) {
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
export const updateLift = /* GraphQL */ `
  mutation UpdateLift(
    $input: UpdateLiftInput!
    $condition: ModelLiftConditionInput
  ) {
    updateLift(input: $input, condition: $condition) {
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
export const deleteLift = /* GraphQL */ `
  mutation DeleteLift(
    $input: DeleteLiftInput!
    $condition: ModelLiftConditionInput
  ) {
    deleteLift(input: $input, condition: $condition) {
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
export const createRecord = /* GraphQL */ `
  mutation CreateRecord(
    $input: CreateRecordInput!
    $condition: ModelRecordConditionInput
  ) {
    createRecord(input: $input, condition: $condition) {
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
export const updateRecord = /* GraphQL */ `
  mutation UpdateRecord(
    $input: UpdateRecordInput!
    $condition: ModelRecordConditionInput
  ) {
    updateRecord(input: $input, condition: $condition) {
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
export const deleteRecord = /* GraphQL */ `
  mutation DeleteRecord(
    $input: DeleteRecordInput!
    $condition: ModelRecordConditionInput
  ) {
    deleteRecord(input: $input, condition: $condition) {
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
