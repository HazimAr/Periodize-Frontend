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
export const onCreateRecord = /* GraphQL */ `
  subscription OnCreateRecord {
    onCreateRecord {
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
export const onUpdateRecord = /* GraphQL */ `
  subscription OnUpdateRecord {
    onUpdateRecord {
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
export const onDeleteRecord = /* GraphQL */ `
  subscription OnDeleteRecord {
    onDeleteRecord {
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
