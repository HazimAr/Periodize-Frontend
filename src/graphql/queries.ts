/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProgram = /* GraphQL */ `
  query GetProgram($id: ID!) {
    getProgram(id: $id) {
      id
      name
      summary
      catergory
      createdAt
      updatedAt
      owner
      days {
        items {
          id
          name
          description
          catergory
          programID
          createdAt
          updatedAt
          program {
            id
            name
            summary
            catergory
            createdAt
            updatedAt
            owner
          }
          owner
          workout {
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const listPrograms = /* GraphQL */ `
  query ListPrograms(
    $filter: ModelProgramFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrograms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        summary
        catergory
        createdAt
        updatedAt
        owner
        days {
          items {
            id
            name
            description
            catergory
            programID
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
export const getDay = /* GraphQL */ `
  query GetDay($id: ID!) {
    getDay(id: $id) {
      id
      name
      description
      catergory
      programID
      createdAt
      updatedAt
      program {
        id
        name
        summary
        catergory
        createdAt
        updatedAt
        owner
        days {
          items {
            id
            name
            description
            catergory
            programID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      owner
      workout {
        items {
          id
          name
          description
          catergory
          dayID
          createdAt
          updatedAt
          day {
            id
            name
            description
            catergory
            programID
            createdAt
            updatedAt
            owner
          }
          owner
          lift {
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const listDays = /* GraphQL */ `
  query ListDays(
    $filter: ModelDayFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDays(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        catergory
        programID
        createdAt
        updatedAt
        program {
          id
          name
          summary
          catergory
          createdAt
          updatedAt
          owner
          days {
            nextToken
          }
        }
        owner
        workout {
          items {
            id
            name
            description
            catergory
            dayID
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
export const getWorkout = /* GraphQL */ `
  query GetWorkout($id: ID!) {
    getWorkout(id: $id) {
      id
      name
      description
      catergory
      dayID
      createdAt
      updatedAt
      day {
        id
        name
        description
        catergory
        programID
        createdAt
        updatedAt
        program {
          id
          name
          summary
          catergory
          createdAt
          updatedAt
          owner
          days {
            nextToken
          }
        }
        owner
        workout {
          items {
            id
            name
            description
            catergory
            dayID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      owner
      lift {
        items {
          id
          liftID
          workoutID
          createdAt
          updatedAt
          workout {
            id
            name
            description
            catergory
            dayID
            createdAt
            updatedAt
            owner
          }
          owner
          lift {
            id
            name
            description
            category
            favorite
            createdAt
            updatedAt
            owner
          }
        }
        nextToken
      }
    }
  }
`;
export const listWorkouts = /* GraphQL */ `
  query ListWorkouts(
    $filter: ModelWorkoutFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkouts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        catergory
        dayID
        createdAt
        updatedAt
        day {
          id
          name
          description
          catergory
          programID
          createdAt
          updatedAt
          program {
            id
            name
            summary
            catergory
            createdAt
            updatedAt
            owner
          }
          owner
          workout {
            nextToken
          }
        }
        owner
        lift {
          items {
            id
            liftID
            workoutID
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
export const getLiftWorkoutJoin = /* GraphQL */ `
  query GetLiftWorkoutJoin($id: ID!) {
    getLiftWorkoutJoin(id: $id) {
      id
      liftID
      workoutID
      createdAt
      updatedAt
      workout {
        id
        name
        description
        catergory
        dayID
        createdAt
        updatedAt
        day {
          id
          name
          description
          catergory
          programID
          createdAt
          updatedAt
          program {
            id
            name
            summary
            catergory
            createdAt
            updatedAt
            owner
          }
          owner
          workout {
            nextToken
          }
        }
        owner
        lift {
          items {
            id
            liftID
            workoutID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      owner
      lift {
        id
        name
        description
        category
        favorite
        createdAt
        updatedAt
        workout {
          items {
            id
            liftID
            workoutID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        owner
        records {
          items {
            id
            load
            warmup
            sets
            reps
            unit
            rpe
            percent
            liftID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
    }
  }
`;
export const listLiftWorkoutJoins = /* GraphQL */ `
  query ListLiftWorkoutJoins(
    $filter: ModelLiftWorkoutJoinFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLiftWorkoutJoins(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        liftID
        workoutID
        createdAt
        updatedAt
        workout {
          id
          name
          description
          catergory
          dayID
          createdAt
          updatedAt
          day {
            id
            name
            description
            catergory
            programID
            createdAt
            updatedAt
            owner
          }
          owner
          lift {
            nextToken
          }
        }
        owner
        lift {
          id
          name
          description
          category
          favorite
          createdAt
          updatedAt
          workout {
            nextToken
          }
          owner
          records {
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const getLift = /* GraphQL */ `
  query GetLift($id: ID!) {
    getLift(id: $id) {
      id
      name
      description
      category
      favorite
      createdAt
      updatedAt
      workout {
        items {
          id
          liftID
          workoutID
          createdAt
          updatedAt
          workout {
            id
            name
            description
            catergory
            dayID
            createdAt
            updatedAt
            owner
          }
          owner
          lift {
            id
            name
            description
            category
            favorite
            createdAt
            updatedAt
            owner
          }
        }
        nextToken
      }
      owner
      records {
        items {
          id
          load
          warmup
          sets
          reps
          unit
          rpe
          percent
          liftID
          createdAt
          updatedAt
          lift {
            id
            name
            description
            category
            favorite
            createdAt
            updatedAt
            owner
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
        description
        category
        favorite
        createdAt
        updatedAt
        workout {
          items {
            id
            liftID
            workoutID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        owner
        records {
          items {
            id
            load
            warmup
            sets
            reps
            unit
            rpe
            percent
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
      unit
      rpe
      percent
      liftID
      createdAt
      updatedAt
      lift {
        id
        name
        description
        category
        favorite
        createdAt
        updatedAt
        workout {
          items {
            id
            liftID
            workoutID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        owner
        records {
          items {
            id
            load
            warmup
            sets
            reps
            unit
            rpe
            percent
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
        unit
        rpe
        percent
        liftID
        createdAt
        updatedAt
        lift {
          id
          name
          description
          category
          favorite
          createdAt
          updatedAt
          workout {
            nextToken
          }
          owner
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
