/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProgram = /* GraphQL */ `
  mutation CreateProgram(
    $input: CreateProgramInput!
    $condition: ModelProgramConditionInput
  ) {
    createProgram(input: $input, condition: $condition) {
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
  }
`;
export const updateProgram = /* GraphQL */ `
  mutation UpdateProgram(
    $input: UpdateProgramInput!
    $condition: ModelProgramConditionInput
  ) {
    updateProgram(input: $input, condition: $condition) {
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
  }
`;
export const deleteProgram = /* GraphQL */ `
  mutation DeleteProgram(
    $input: DeleteProgramInput!
    $condition: ModelProgramConditionInput
  ) {
    deleteProgram(input: $input, condition: $condition) {
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
  }
`;
export const createDay = /* GraphQL */ `
  mutation CreateDay(
    $input: CreateDayInput!
    $condition: ModelDayConditionInput
  ) {
    createDay(input: $input, condition: $condition) {
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
  }
`;
export const updateDay = /* GraphQL */ `
  mutation UpdateDay(
    $input: UpdateDayInput!
    $condition: ModelDayConditionInput
  ) {
    updateDay(input: $input, condition: $condition) {
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
  }
`;
export const deleteDay = /* GraphQL */ `
  mutation DeleteDay(
    $input: DeleteDayInput!
    $condition: ModelDayConditionInput
  ) {
    deleteDay(input: $input, condition: $condition) {
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
  }
`;
export const createWorkout = /* GraphQL */ `
  mutation CreateWorkout(
    $input: CreateWorkoutInput!
    $condition: ModelWorkoutConditionInput
  ) {
    createWorkout(input: $input, condition: $condition) {
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
  }
`;
export const updateWorkout = /* GraphQL */ `
  mutation UpdateWorkout(
    $input: UpdateWorkoutInput!
    $condition: ModelWorkoutConditionInput
  ) {
    updateWorkout(input: $input, condition: $condition) {
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
  }
`;
export const deleteWorkout = /* GraphQL */ `
  mutation DeleteWorkout(
    $input: DeleteWorkoutInput!
    $condition: ModelWorkoutConditionInput
  ) {
    deleteWorkout(input: $input, condition: $condition) {
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
  }
`;
export const createLiftWorkoutJoin = /* GraphQL */ `
  mutation CreateLiftWorkoutJoin(
    $input: CreateLiftWorkoutJoinInput!
    $condition: ModelLiftWorkoutJoinConditionInput
  ) {
    createLiftWorkoutJoin(input: $input, condition: $condition) {
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
  }
`;
export const updateLiftWorkoutJoin = /* GraphQL */ `
  mutation UpdateLiftWorkoutJoin(
    $input: UpdateLiftWorkoutJoinInput!
    $condition: ModelLiftWorkoutJoinConditionInput
  ) {
    updateLiftWorkoutJoin(input: $input, condition: $condition) {
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
  }
`;
export const deleteLiftWorkoutJoin = /* GraphQL */ `
  mutation DeleteLiftWorkoutJoin(
    $input: DeleteLiftWorkoutJoinInput!
    $condition: ModelLiftWorkoutJoinConditionInput
  ) {
    deleteLiftWorkoutJoin(input: $input, condition: $condition) {
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
  }
`;
export const createLift = /* GraphQL */ `
  mutation CreateLift(
    $input: CreateLiftInput!
    $condition: ModelLiftConditionInput
  ) {
    createLift(input: $input, condition: $condition) {
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
`;
export const updateLift = /* GraphQL */ `
  mutation UpdateLift(
    $input: UpdateLiftInput!
    $condition: ModelLiftConditionInput
  ) {
    updateLift(input: $input, condition: $condition) {
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
`;
export const deleteLift = /* GraphQL */ `
  mutation DeleteLift(
    $input: DeleteLiftInput!
    $condition: ModelLiftConditionInput
  ) {
    deleteLift(input: $input, condition: $condition) {
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
  }
`;
