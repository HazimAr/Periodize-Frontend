/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProgram = /* GraphQL */ `
  subscription OnCreateProgram {
    onCreateProgram {
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
export const onUpdateProgram = /* GraphQL */ `
  subscription OnUpdateProgram {
    onUpdateProgram {
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
export const onDeleteProgram = /* GraphQL */ `
  subscription OnDeleteProgram {
    onDeleteProgram {
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
export const onCreateDay = /* GraphQL */ `
  subscription OnCreateDay {
    onCreateDay {
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
export const onUpdateDay = /* GraphQL */ `
  subscription OnUpdateDay {
    onUpdateDay {
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
export const onDeleteDay = /* GraphQL */ `
  subscription OnDeleteDay {
    onDeleteDay {
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
export const onCreateWorkout = /* GraphQL */ `
  subscription OnCreateWorkout {
    onCreateWorkout {
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
export const onUpdateWorkout = /* GraphQL */ `
  subscription OnUpdateWorkout {
    onUpdateWorkout {
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
export const onDeleteWorkout = /* GraphQL */ `
  subscription OnDeleteWorkout {
    onDeleteWorkout {
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
export const onCreateLiftWorkoutJoin = /* GraphQL */ `
  subscription OnCreateLiftWorkoutJoin {
    onCreateLiftWorkoutJoin {
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
export const onUpdateLiftWorkoutJoin = /* GraphQL */ `
  subscription OnUpdateLiftWorkoutJoin {
    onUpdateLiftWorkoutJoin {
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
export const onDeleteLiftWorkoutJoin = /* GraphQL */ `
  subscription OnDeleteLiftWorkoutJoin {
    onDeleteLiftWorkoutJoin {
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
export const onCreateLift = /* GraphQL */ `
  subscription OnCreateLift {
    onCreateLift {
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
export const onUpdateLift = /* GraphQL */ `
  subscription OnUpdateLift {
    onUpdateLift {
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
export const onDeleteLift = /* GraphQL */ `
  subscription OnDeleteLift {
    onDeleteLift {
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
export const onCreateRecord = /* GraphQL */ `
  subscription OnCreateRecord {
    onCreateRecord {
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
export const onUpdateRecord = /* GraphQL */ `
  subscription OnUpdateRecord {
    onUpdateRecord {
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
export const onDeleteRecord = /* GraphQL */ `
  subscription OnDeleteRecord {
    onDeleteRecord {
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
