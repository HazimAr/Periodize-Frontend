/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLift = /* GraphQL */ `
  subscription OnCreateLift {
    onCreateLift {
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
export const onUpdateLift = /* GraphQL */ `
  subscription OnUpdateLift {
    onUpdateLift {
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
export const onDeleteLift = /* GraphQL */ `
  subscription OnDeleteLift {
    onDeleteLift {
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
export const onCreateRecord = /* GraphQL */ `
  subscription OnCreateRecord {
    onCreateRecord {
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
export const onUpdateRecord = /* GraphQL */ `
  subscription OnUpdateRecord {
    onUpdateRecord {
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
export const onDeleteRecord = /* GraphQL */ `
  subscription OnDeleteRecord {
    onDeleteRecord {
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
