/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProgramInput = {
  id?: string | null,
  name: string,
  summary?: string | null,
  catergory?: string | null,
};

export type ModelProgramConditionInput = {
  name?: ModelStringInput | null,
  summary?: ModelStringInput | null,
  catergory?: ModelStringInput | null,
  and?: Array< ModelProgramConditionInput | null > | null,
  or?: Array< ModelProgramConditionInput | null > | null,
  not?: ModelProgramConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Program = {
  __typename: "Program",
  id: string,
  name: string,
  summary?: string | null,
  catergory?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
  days?: ModelDayConnection | null,
};

export type ModelDayConnection = {
  __typename: "ModelDayConnection",
  items?:  Array<Day | null > | null,
  nextToken?: string | null,
};

export type Day = {
  __typename: "Day",
  id: string,
  name: string,
  description?: string | null,
  catergory?: string | null,
  programID: string,
  createdAt: string,
  updatedAt: string,
  program?: Program | null,
  owner?: string | null,
  workout?: ModelWorkoutConnection | null,
};

export type ModelWorkoutConnection = {
  __typename: "ModelWorkoutConnection",
  items?:  Array<Workout | null > | null,
  nextToken?: string | null,
};

export type Workout = {
  __typename: "Workout",
  id: string,
  name: string,
  description?: string | null,
  catergory: Array< string >,
  dayID: string,
  createdAt: string,
  updatedAt: string,
  day?: Day | null,
  owner?: string | null,
  lift?: ModelLiftWorkoutJoinConnection | null,
};

export type ModelLiftWorkoutJoinConnection = {
  __typename: "ModelLiftWorkoutJoinConnection",
  items?:  Array<LiftWorkoutJoin | null > | null,
  nextToken?: string | null,
};

export type LiftWorkoutJoin = {
  __typename: "LiftWorkoutJoin",
  id: string,
  liftID: string,
  workoutID: string,
  createdAt: string,
  updatedAt: string,
  workout: Workout,
  owner?: string | null,
  lift: Lift,
};

export type Lift = {
  __typename: "Lift",
  id: string,
  name: string,
  description?: string | null,
  category: Array< string >,
  favorite: boolean,
  createdAt: string,
  updatedAt: string,
  workout?: ModelLiftWorkoutJoinConnection | null,
  owner?: string | null,
  records?: ModelRecordConnection | null,
};

export type ModelRecordConnection = {
  __typename: "ModelRecordConnection",
  items?:  Array<Record | null > | null,
  nextToken?: string | null,
};

export type Record = {
  __typename: "Record",
  id: string,
  load: number,
  warmup: number,
  sets: number,
  reps: number,
  unit: string,
  rpe: string,
  percent: string,
  liftID: string,
  createdAt: string,
  updatedAt: string,
  lift?: Lift | null,
  owner?: string | null,
};

export type UpdateProgramInput = {
  id: string,
  name?: string | null,
  summary?: string | null,
  catergory?: string | null,
};

export type DeleteProgramInput = {
  id: string,
};

export type CreateDayInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  catergory?: string | null,
  programID: string,
};

export type ModelDayConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  catergory?: ModelStringInput | null,
  programID?: ModelIDInput | null,
  and?: Array< ModelDayConditionInput | null > | null,
  or?: Array< ModelDayConditionInput | null > | null,
  not?: ModelDayConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateDayInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  catergory?: string | null,
  programID?: string | null,
};

export type DeleteDayInput = {
  id: string,
};

export type CreateWorkoutInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  catergory: Array< string >,
  dayID: string,
};

export type ModelWorkoutConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  catergory?: ModelStringInput | null,
  dayID?: ModelIDInput | null,
  and?: Array< ModelWorkoutConditionInput | null > | null,
  or?: Array< ModelWorkoutConditionInput | null > | null,
  not?: ModelWorkoutConditionInput | null,
};

export type UpdateWorkoutInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  catergory?: Array< string > | null,
  dayID?: string | null,
};

export type DeleteWorkoutInput = {
  id: string,
};

export type CreateLiftWorkoutJoinInput = {
  id?: string | null,
  liftID: string,
  workoutID: string,
};

export type ModelLiftWorkoutJoinConditionInput = {
  liftID?: ModelIDInput | null,
  workoutID?: ModelIDInput | null,
  and?: Array< ModelLiftWorkoutJoinConditionInput | null > | null,
  or?: Array< ModelLiftWorkoutJoinConditionInput | null > | null,
  not?: ModelLiftWorkoutJoinConditionInput | null,
};

export type UpdateLiftWorkoutJoinInput = {
  id: string,
  liftID?: string | null,
  workoutID?: string | null,
};

export type DeleteLiftWorkoutJoinInput = {
  id: string,
};

export type CreateLiftInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  category: Array< string >,
  favorite: boolean,
};

export type ModelLiftConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  category?: ModelStringInput | null,
  favorite?: ModelBooleanInput | null,
  and?: Array< ModelLiftConditionInput | null > | null,
  or?: Array< ModelLiftConditionInput | null > | null,
  not?: ModelLiftConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateLiftInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  category?: Array< string > | null,
  favorite?: boolean | null,
};

export type DeleteLiftInput = {
  id: string,
};

export type CreateRecordInput = {
  id?: string | null,
  load: number,
  warmup: number,
  sets: number,
  reps: number,
  unit: string,
  rpe: string,
  percent: string,
  liftID: string,
};

export type ModelRecordConditionInput = {
  load?: ModelFloatInput | null,
  warmup?: ModelIntInput | null,
  sets?: ModelIntInput | null,
  reps?: ModelIntInput | null,
  unit?: ModelStringInput | null,
  rpe?: ModelStringInput | null,
  percent?: ModelStringInput | null,
  liftID?: ModelIDInput | null,
  and?: Array< ModelRecordConditionInput | null > | null,
  or?: Array< ModelRecordConditionInput | null > | null,
  not?: ModelRecordConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateRecordInput = {
  id: string,
  load?: number | null,
  warmup?: number | null,
  sets?: number | null,
  reps?: number | null,
  unit?: string | null,
  rpe?: string | null,
  percent?: string | null,
  liftID?: string | null,
};

export type DeleteRecordInput = {
  id: string,
};

export type ModelProgramFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  summary?: ModelStringInput | null,
  catergory?: ModelStringInput | null,
  and?: Array< ModelProgramFilterInput | null > | null,
  or?: Array< ModelProgramFilterInput | null > | null,
  not?: ModelProgramFilterInput | null,
};

export type ModelProgramConnection = {
  __typename: "ModelProgramConnection",
  items?:  Array<Program | null > | null,
  nextToken?: string | null,
};

export type ModelDayFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  catergory?: ModelStringInput | null,
  programID?: ModelIDInput | null,
  and?: Array< ModelDayFilterInput | null > | null,
  or?: Array< ModelDayFilterInput | null > | null,
  not?: ModelDayFilterInput | null,
};

export type ModelWorkoutFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  catergory?: ModelStringInput | null,
  dayID?: ModelIDInput | null,
  and?: Array< ModelWorkoutFilterInput | null > | null,
  or?: Array< ModelWorkoutFilterInput | null > | null,
  not?: ModelWorkoutFilterInput | null,
};

export type ModelLiftWorkoutJoinFilterInput = {
  id?: ModelIDInput | null,
  liftID?: ModelIDInput | null,
  workoutID?: ModelIDInput | null,
  and?: Array< ModelLiftWorkoutJoinFilterInput | null > | null,
  or?: Array< ModelLiftWorkoutJoinFilterInput | null > | null,
  not?: ModelLiftWorkoutJoinFilterInput | null,
};

export type ModelLiftFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  category?: ModelStringInput | null,
  favorite?: ModelBooleanInput | null,
  and?: Array< ModelLiftFilterInput | null > | null,
  or?: Array< ModelLiftFilterInput | null > | null,
  not?: ModelLiftFilterInput | null,
};

export type ModelLiftConnection = {
  __typename: "ModelLiftConnection",
  items?:  Array<Lift | null > | null,
  nextToken?: string | null,
};

export type ModelRecordFilterInput = {
  id?: ModelIDInput | null,
  load?: ModelFloatInput | null,
  warmup?: ModelIntInput | null,
  sets?: ModelIntInput | null,
  reps?: ModelIntInput | null,
  unit?: ModelStringInput | null,
  rpe?: ModelStringInput | null,
  percent?: ModelStringInput | null,
  liftID?: ModelIDInput | null,
  and?: Array< ModelRecordFilterInput | null > | null,
  or?: Array< ModelRecordFilterInput | null > | null,
  not?: ModelRecordFilterInput | null,
};

export type CreateProgramMutationVariables = {
  input: CreateProgramInput,
  condition?: ModelProgramConditionInput | null,
};

export type CreateProgramMutation = {
  createProgram?:  {
    __typename: "Program",
    id: string,
    name: string,
    summary?: string | null,
    catergory?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    days?:  {
      __typename: "ModelDayConnection",
      items?:  Array< {
        __typename: "Day",
        id: string,
        name: string,
        description?: string | null,
        catergory?: string | null,
        programID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateProgramMutationVariables = {
  input: UpdateProgramInput,
  condition?: ModelProgramConditionInput | null,
};

export type UpdateProgramMutation = {
  updateProgram?:  {
    __typename: "Program",
    id: string,
    name: string,
    summary?: string | null,
    catergory?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    days?:  {
      __typename: "ModelDayConnection",
      items?:  Array< {
        __typename: "Day",
        id: string,
        name: string,
        description?: string | null,
        catergory?: string | null,
        programID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteProgramMutationVariables = {
  input: DeleteProgramInput,
  condition?: ModelProgramConditionInput | null,
};

export type DeleteProgramMutation = {
  deleteProgram?:  {
    __typename: "Program",
    id: string,
    name: string,
    summary?: string | null,
    catergory?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    days?:  {
      __typename: "ModelDayConnection",
      items?:  Array< {
        __typename: "Day",
        id: string,
        name: string,
        description?: string | null,
        catergory?: string | null,
        programID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateDayMutationVariables = {
  input: CreateDayInput,
  condition?: ModelDayConditionInput | null,
};

export type CreateDayMutation = {
  createDay?:  {
    __typename: "Day",
    id: string,
    name: string,
    description?: string | null,
    catergory?: string | null,
    programID: string,
    createdAt: string,
    updatedAt: string,
    program?:  {
      __typename: "Program",
      id: string,
      name: string,
      summary?: string | null,
      catergory?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      days?:  {
        __typename: "ModelDayConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
    workout?:  {
      __typename: "ModelWorkoutConnection",
      items?:  Array< {
        __typename: "Workout",
        id: string,
        name: string,
        description?: string | null,
        catergory: Array< string >,
        dayID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateDayMutationVariables = {
  input: UpdateDayInput,
  condition?: ModelDayConditionInput | null,
};

export type UpdateDayMutation = {
  updateDay?:  {
    __typename: "Day",
    id: string,
    name: string,
    description?: string | null,
    catergory?: string | null,
    programID: string,
    createdAt: string,
    updatedAt: string,
    program?:  {
      __typename: "Program",
      id: string,
      name: string,
      summary?: string | null,
      catergory?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      days?:  {
        __typename: "ModelDayConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
    workout?:  {
      __typename: "ModelWorkoutConnection",
      items?:  Array< {
        __typename: "Workout",
        id: string,
        name: string,
        description?: string | null,
        catergory: Array< string >,
        dayID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteDayMutationVariables = {
  input: DeleteDayInput,
  condition?: ModelDayConditionInput | null,
};

export type DeleteDayMutation = {
  deleteDay?:  {
    __typename: "Day",
    id: string,
    name: string,
    description?: string | null,
    catergory?: string | null,
    programID: string,
    createdAt: string,
    updatedAt: string,
    program?:  {
      __typename: "Program",
      id: string,
      name: string,
      summary?: string | null,
      catergory?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      days?:  {
        __typename: "ModelDayConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
    workout?:  {
      __typename: "ModelWorkoutConnection",
      items?:  Array< {
        __typename: "Workout",
        id: string,
        name: string,
        description?: string | null,
        catergory: Array< string >,
        dayID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateWorkoutMutationVariables = {
  input: CreateWorkoutInput,
  condition?: ModelWorkoutConditionInput | null,
};

export type CreateWorkoutMutation = {
  createWorkout?:  {
    __typename: "Workout",
    id: string,
    name: string,
    description?: string | null,
    catergory: Array< string >,
    dayID: string,
    createdAt: string,
    updatedAt: string,
    day?:  {
      __typename: "Day",
      id: string,
      name: string,
      description?: string | null,
      catergory?: string | null,
      programID: string,
      createdAt: string,
      updatedAt: string,
      program?:  {
        __typename: "Program",
        id: string,
        name: string,
        summary?: string | null,
        catergory?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
      workout?:  {
        __typename: "ModelWorkoutConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
    lift?:  {
      __typename: "ModelLiftWorkoutJoinConnection",
      items?:  Array< {
        __typename: "LiftWorkoutJoin",
        id: string,
        liftID: string,
        workoutID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateWorkoutMutationVariables = {
  input: UpdateWorkoutInput,
  condition?: ModelWorkoutConditionInput | null,
};

export type UpdateWorkoutMutation = {
  updateWorkout?:  {
    __typename: "Workout",
    id: string,
    name: string,
    description?: string | null,
    catergory: Array< string >,
    dayID: string,
    createdAt: string,
    updatedAt: string,
    day?:  {
      __typename: "Day",
      id: string,
      name: string,
      description?: string | null,
      catergory?: string | null,
      programID: string,
      createdAt: string,
      updatedAt: string,
      program?:  {
        __typename: "Program",
        id: string,
        name: string,
        summary?: string | null,
        catergory?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
      workout?:  {
        __typename: "ModelWorkoutConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
    lift?:  {
      __typename: "ModelLiftWorkoutJoinConnection",
      items?:  Array< {
        __typename: "LiftWorkoutJoin",
        id: string,
        liftID: string,
        workoutID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteWorkoutMutationVariables = {
  input: DeleteWorkoutInput,
  condition?: ModelWorkoutConditionInput | null,
};

export type DeleteWorkoutMutation = {
  deleteWorkout?:  {
    __typename: "Workout",
    id: string,
    name: string,
    description?: string | null,
    catergory: Array< string >,
    dayID: string,
    createdAt: string,
    updatedAt: string,
    day?:  {
      __typename: "Day",
      id: string,
      name: string,
      description?: string | null,
      catergory?: string | null,
      programID: string,
      createdAt: string,
      updatedAt: string,
      program?:  {
        __typename: "Program",
        id: string,
        name: string,
        summary?: string | null,
        catergory?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
      workout?:  {
        __typename: "ModelWorkoutConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
    lift?:  {
      __typename: "ModelLiftWorkoutJoinConnection",
      items?:  Array< {
        __typename: "LiftWorkoutJoin",
        id: string,
        liftID: string,
        workoutID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateLiftWorkoutJoinMutationVariables = {
  input: CreateLiftWorkoutJoinInput,
  condition?: ModelLiftWorkoutJoinConditionInput | null,
};

export type CreateLiftWorkoutJoinMutation = {
  createLiftWorkoutJoin?:  {
    __typename: "LiftWorkoutJoin",
    id: string,
    liftID: string,
    workoutID: string,
    createdAt: string,
    updatedAt: string,
    workout:  {
      __typename: "Workout",
      id: string,
      name: string,
      description?: string | null,
      catergory: Array< string >,
      dayID: string,
      createdAt: string,
      updatedAt: string,
      day?:  {
        __typename: "Day",
        id: string,
        name: string,
        description?: string | null,
        catergory?: string | null,
        programID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
      lift?:  {
        __typename: "ModelLiftWorkoutJoinConnection",
        nextToken?: string | null,
      } | null,
    },
    owner?: string | null,
    lift:  {
      __typename: "Lift",
      id: string,
      name: string,
      description?: string | null,
      category: Array< string >,
      favorite: boolean,
      createdAt: string,
      updatedAt: string,
      workout?:  {
        __typename: "ModelLiftWorkoutJoinConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      records?:  {
        __typename: "ModelRecordConnection",
        nextToken?: string | null,
      } | null,
    },
  } | null,
};

export type UpdateLiftWorkoutJoinMutationVariables = {
  input: UpdateLiftWorkoutJoinInput,
  condition?: ModelLiftWorkoutJoinConditionInput | null,
};

export type UpdateLiftWorkoutJoinMutation = {
  updateLiftWorkoutJoin?:  {
    __typename: "LiftWorkoutJoin",
    id: string,
    liftID: string,
    workoutID: string,
    createdAt: string,
    updatedAt: string,
    workout:  {
      __typename: "Workout",
      id: string,
      name: string,
      description?: string | null,
      catergory: Array< string >,
      dayID: string,
      createdAt: string,
      updatedAt: string,
      day?:  {
        __typename: "Day",
        id: string,
        name: string,
        description?: string | null,
        catergory?: string | null,
        programID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
      lift?:  {
        __typename: "ModelLiftWorkoutJoinConnection",
        nextToken?: string | null,
      } | null,
    },
    owner?: string | null,
    lift:  {
      __typename: "Lift",
      id: string,
      name: string,
      description?: string | null,
      category: Array< string >,
      favorite: boolean,
      createdAt: string,
      updatedAt: string,
      workout?:  {
        __typename: "ModelLiftWorkoutJoinConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      records?:  {
        __typename: "ModelRecordConnection",
        nextToken?: string | null,
      } | null,
    },
  } | null,
};

export type DeleteLiftWorkoutJoinMutationVariables = {
  input: DeleteLiftWorkoutJoinInput,
  condition?: ModelLiftWorkoutJoinConditionInput | null,
};

export type DeleteLiftWorkoutJoinMutation = {
  deleteLiftWorkoutJoin?:  {
    __typename: "LiftWorkoutJoin",
    id: string,
    liftID: string,
    workoutID: string,
    createdAt: string,
    updatedAt: string,
    workout:  {
      __typename: "Workout",
      id: string,
      name: string,
      description?: string | null,
      catergory: Array< string >,
      dayID: string,
      createdAt: string,
      updatedAt: string,
      day?:  {
        __typename: "Day",
        id: string,
        name: string,
        description?: string | null,
        catergory?: string | null,
        programID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
      lift?:  {
        __typename: "ModelLiftWorkoutJoinConnection",
        nextToken?: string | null,
      } | null,
    },
    owner?: string | null,
    lift:  {
      __typename: "Lift",
      id: string,
      name: string,
      description?: string | null,
      category: Array< string >,
      favorite: boolean,
      createdAt: string,
      updatedAt: string,
      workout?:  {
        __typename: "ModelLiftWorkoutJoinConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      records?:  {
        __typename: "ModelRecordConnection",
        nextToken?: string | null,
      } | null,
    },
  } | null,
};

export type CreateLiftMutationVariables = {
  input: CreateLiftInput,
  condition?: ModelLiftConditionInput | null,
};

export type CreateLiftMutation = {
  createLift?:  {
    __typename: "Lift",
    id: string,
    name: string,
    description?: string | null,
    category: Array< string >,
    favorite: boolean,
    createdAt: string,
    updatedAt: string,
    workout?:  {
      __typename: "ModelLiftWorkoutJoinConnection",
      items?:  Array< {
        __typename: "LiftWorkoutJoin",
        id: string,
        liftID: string,
        workoutID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    records?:  {
      __typename: "ModelRecordConnection",
      items?:  Array< {
        __typename: "Record",
        id: string,
        load: number,
        warmup: number,
        sets: number,
        reps: number,
        unit: string,
        rpe: string,
        percent: string,
        liftID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateLiftMutationVariables = {
  input: UpdateLiftInput,
  condition?: ModelLiftConditionInput | null,
};

export type UpdateLiftMutation = {
  updateLift?:  {
    __typename: "Lift",
    id: string,
    name: string,
    description?: string | null,
    category: Array< string >,
    favorite: boolean,
    createdAt: string,
    updatedAt: string,
    workout?:  {
      __typename: "ModelLiftWorkoutJoinConnection",
      items?:  Array< {
        __typename: "LiftWorkoutJoin",
        id: string,
        liftID: string,
        workoutID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    records?:  {
      __typename: "ModelRecordConnection",
      items?:  Array< {
        __typename: "Record",
        id: string,
        load: number,
        warmup: number,
        sets: number,
        reps: number,
        unit: string,
        rpe: string,
        percent: string,
        liftID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteLiftMutationVariables = {
  input: DeleteLiftInput,
  condition?: ModelLiftConditionInput | null,
};

export type DeleteLiftMutation = {
  deleteLift?:  {
    __typename: "Lift",
    id: string,
    name: string,
    description?: string | null,
    category: Array< string >,
    favorite: boolean,
    createdAt: string,
    updatedAt: string,
    workout?:  {
      __typename: "ModelLiftWorkoutJoinConnection",
      items?:  Array< {
        __typename: "LiftWorkoutJoin",
        id: string,
        liftID: string,
        workoutID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    records?:  {
      __typename: "ModelRecordConnection",
      items?:  Array< {
        __typename: "Record",
        id: string,
        load: number,
        warmup: number,
        sets: number,
        reps: number,
        unit: string,
        rpe: string,
        percent: string,
        liftID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateRecordMutationVariables = {
  input: CreateRecordInput,
  condition?: ModelRecordConditionInput | null,
};

export type CreateRecordMutation = {
  createRecord?:  {
    __typename: "Record",
    id: string,
    load: number,
    warmup: number,
    sets: number,
    reps: number,
    unit: string,
    rpe: string,
    percent: string,
    liftID: string,
    createdAt: string,
    updatedAt: string,
    lift?:  {
      __typename: "Lift",
      id: string,
      name: string,
      description?: string | null,
      category: Array< string >,
      favorite: boolean,
      createdAt: string,
      updatedAt: string,
      workout?:  {
        __typename: "ModelLiftWorkoutJoinConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      records?:  {
        __typename: "ModelRecordConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type UpdateRecordMutationVariables = {
  input: UpdateRecordInput,
  condition?: ModelRecordConditionInput | null,
};

export type UpdateRecordMutation = {
  updateRecord?:  {
    __typename: "Record",
    id: string,
    load: number,
    warmup: number,
    sets: number,
    reps: number,
    unit: string,
    rpe: string,
    percent: string,
    liftID: string,
    createdAt: string,
    updatedAt: string,
    lift?:  {
      __typename: "Lift",
      id: string,
      name: string,
      description?: string | null,
      category: Array< string >,
      favorite: boolean,
      createdAt: string,
      updatedAt: string,
      workout?:  {
        __typename: "ModelLiftWorkoutJoinConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      records?:  {
        __typename: "ModelRecordConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type DeleteRecordMutationVariables = {
  input: DeleteRecordInput,
  condition?: ModelRecordConditionInput | null,
};

export type DeleteRecordMutation = {
  deleteRecord?:  {
    __typename: "Record",
    id: string,
    load: number,
    warmup: number,
    sets: number,
    reps: number,
    unit: string,
    rpe: string,
    percent: string,
    liftID: string,
    createdAt: string,
    updatedAt: string,
    lift?:  {
      __typename: "Lift",
      id: string,
      name: string,
      description?: string | null,
      category: Array< string >,
      favorite: boolean,
      createdAt: string,
      updatedAt: string,
      workout?:  {
        __typename: "ModelLiftWorkoutJoinConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      records?:  {
        __typename: "ModelRecordConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type GetProgramQueryVariables = {
  id: string,
};

export type GetProgramQuery = {
  getProgram?:  {
    __typename: "Program",
    id: string,
    name: string,
    summary?: string | null,
    catergory?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    days?:  {
      __typename: "ModelDayConnection",
      items?:  Array< {
        __typename: "Day",
        id: string,
        name: string,
        description?: string | null,
        catergory?: string | null,
        programID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListProgramsQueryVariables = {
  filter?: ModelProgramFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProgramsQuery = {
  listPrograms?:  {
    __typename: "ModelProgramConnection",
    items?:  Array< {
      __typename: "Program",
      id: string,
      name: string,
      summary?: string | null,
      catergory?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      days?:  {
        __typename: "ModelDayConnection",
        nextToken?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetDayQueryVariables = {
  id: string,
};

export type GetDayQuery = {
  getDay?:  {
    __typename: "Day",
    id: string,
    name: string,
    description?: string | null,
    catergory?: string | null,
    programID: string,
    createdAt: string,
    updatedAt: string,
    program?:  {
      __typename: "Program",
      id: string,
      name: string,
      summary?: string | null,
      catergory?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      days?:  {
        __typename: "ModelDayConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
    workout?:  {
      __typename: "ModelWorkoutConnection",
      items?:  Array< {
        __typename: "Workout",
        id: string,
        name: string,
        description?: string | null,
        catergory: Array< string >,
        dayID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListDaysQueryVariables = {
  filter?: ModelDayFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDaysQuery = {
  listDays?:  {
    __typename: "ModelDayConnection",
    items?:  Array< {
      __typename: "Day",
      id: string,
      name: string,
      description?: string | null,
      catergory?: string | null,
      programID: string,
      createdAt: string,
      updatedAt: string,
      program?:  {
        __typename: "Program",
        id: string,
        name: string,
        summary?: string | null,
        catergory?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
      workout?:  {
        __typename: "ModelWorkoutConnection",
        nextToken?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetWorkoutQueryVariables = {
  id: string,
};

export type GetWorkoutQuery = {
  getWorkout?:  {
    __typename: "Workout",
    id: string,
    name: string,
    description?: string | null,
    catergory: Array< string >,
    dayID: string,
    createdAt: string,
    updatedAt: string,
    day?:  {
      __typename: "Day",
      id: string,
      name: string,
      description?: string | null,
      catergory?: string | null,
      programID: string,
      createdAt: string,
      updatedAt: string,
      program?:  {
        __typename: "Program",
        id: string,
        name: string,
        summary?: string | null,
        catergory?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
      workout?:  {
        __typename: "ModelWorkoutConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
    lift?:  {
      __typename: "ModelLiftWorkoutJoinConnection",
      items?:  Array< {
        __typename: "LiftWorkoutJoin",
        id: string,
        liftID: string,
        workoutID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListWorkoutsQueryVariables = {
  filter?: ModelWorkoutFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWorkoutsQuery = {
  listWorkouts?:  {
    __typename: "ModelWorkoutConnection",
    items?:  Array< {
      __typename: "Workout",
      id: string,
      name: string,
      description?: string | null,
      catergory: Array< string >,
      dayID: string,
      createdAt: string,
      updatedAt: string,
      day?:  {
        __typename: "Day",
        id: string,
        name: string,
        description?: string | null,
        catergory?: string | null,
        programID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
      lift?:  {
        __typename: "ModelLiftWorkoutJoinConnection",
        nextToken?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetLiftWorkoutJoinQueryVariables = {
  id: string,
};

export type GetLiftWorkoutJoinQuery = {
  getLiftWorkoutJoin?:  {
    __typename: "LiftWorkoutJoin",
    id: string,
    liftID: string,
    workoutID: string,
    createdAt: string,
    updatedAt: string,
    workout:  {
      __typename: "Workout",
      id: string,
      name: string,
      description?: string | null,
      catergory: Array< string >,
      dayID: string,
      createdAt: string,
      updatedAt: string,
      day?:  {
        __typename: "Day",
        id: string,
        name: string,
        description?: string | null,
        catergory?: string | null,
        programID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
      lift?:  {
        __typename: "ModelLiftWorkoutJoinConnection",
        nextToken?: string | null,
      } | null,
    },
    owner?: string | null,
    lift:  {
      __typename: "Lift",
      id: string,
      name: string,
      description?: string | null,
      category: Array< string >,
      favorite: boolean,
      createdAt: string,
      updatedAt: string,
      workout?:  {
        __typename: "ModelLiftWorkoutJoinConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      records?:  {
        __typename: "ModelRecordConnection",
        nextToken?: string | null,
      } | null,
    },
  } | null,
};

export type ListLiftWorkoutJoinsQueryVariables = {
  filter?: ModelLiftWorkoutJoinFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLiftWorkoutJoinsQuery = {
  listLiftWorkoutJoins?:  {
    __typename: "ModelLiftWorkoutJoinConnection",
    items?:  Array< {
      __typename: "LiftWorkoutJoin",
      id: string,
      liftID: string,
      workoutID: string,
      createdAt: string,
      updatedAt: string,
      workout:  {
        __typename: "Workout",
        id: string,
        name: string,
        description?: string | null,
        catergory: Array< string >,
        dayID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      owner?: string | null,
      lift:  {
        __typename: "Lift",
        id: string,
        name: string,
        description?: string | null,
        category: Array< string >,
        favorite: boolean,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetLiftQueryVariables = {
  id: string,
};

export type GetLiftQuery = {
  getLift?:  {
    __typename: "Lift",
    id: string,
    name: string,
    description?: string | null,
    category: Array< string >,
    favorite: boolean,
    createdAt: string,
    updatedAt: string,
    workout?:  {
      __typename: "ModelLiftWorkoutJoinConnection",
      items?:  Array< {
        __typename: "LiftWorkoutJoin",
        id: string,
        liftID: string,
        workoutID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    records?:  {
      __typename: "ModelRecordConnection",
      items?:  Array< {
        __typename: "Record",
        id: string,
        load: number,
        warmup: number,
        sets: number,
        reps: number,
        unit: string,
        rpe: string,
        percent: string,
        liftID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListLiftsQueryVariables = {
  filter?: ModelLiftFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLiftsQuery = {
  listLifts?:  {
    __typename: "ModelLiftConnection",
    items?:  Array< {
      __typename: "Lift",
      id: string,
      name: string,
      description?: string | null,
      category: Array< string >,
      favorite: boolean,
      createdAt: string,
      updatedAt: string,
      workout?:  {
        __typename: "ModelLiftWorkoutJoinConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      records?:  {
        __typename: "ModelRecordConnection",
        nextToken?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetRecordQueryVariables = {
  id: string,
};

export type GetRecordQuery = {
  getRecord?:  {
    __typename: "Record",
    id: string,
    load: number,
    warmup: number,
    sets: number,
    reps: number,
    unit: string,
    rpe: string,
    percent: string,
    liftID: string,
    createdAt: string,
    updatedAt: string,
    lift?:  {
      __typename: "Lift",
      id: string,
      name: string,
      description?: string | null,
      category: Array< string >,
      favorite: boolean,
      createdAt: string,
      updatedAt: string,
      workout?:  {
        __typename: "ModelLiftWorkoutJoinConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      records?:  {
        __typename: "ModelRecordConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type ListRecordsQueryVariables = {
  filter?: ModelRecordFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRecordsQuery = {
  listRecords?:  {
    __typename: "ModelRecordConnection",
    items?:  Array< {
      __typename: "Record",
      id: string,
      load: number,
      warmup: number,
      sets: number,
      reps: number,
      unit: string,
      rpe: string,
      percent: string,
      liftID: string,
      createdAt: string,
      updatedAt: string,
      lift?:  {
        __typename: "Lift",
        id: string,
        name: string,
        description?: string | null,
        category: Array< string >,
        favorite: boolean,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateProgramSubscription = {
  onCreateProgram?:  {
    __typename: "Program",
    id: string,
    name: string,
    summary?: string | null,
    catergory?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    days?:  {
      __typename: "ModelDayConnection",
      items?:  Array< {
        __typename: "Day",
        id: string,
        name: string,
        description?: string | null,
        catergory?: string | null,
        programID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateProgramSubscription = {
  onUpdateProgram?:  {
    __typename: "Program",
    id: string,
    name: string,
    summary?: string | null,
    catergory?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    days?:  {
      __typename: "ModelDayConnection",
      items?:  Array< {
        __typename: "Day",
        id: string,
        name: string,
        description?: string | null,
        catergory?: string | null,
        programID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteProgramSubscription = {
  onDeleteProgram?:  {
    __typename: "Program",
    id: string,
    name: string,
    summary?: string | null,
    catergory?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    days?:  {
      __typename: "ModelDayConnection",
      items?:  Array< {
        __typename: "Day",
        id: string,
        name: string,
        description?: string | null,
        catergory?: string | null,
        programID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateDaySubscription = {
  onCreateDay?:  {
    __typename: "Day",
    id: string,
    name: string,
    description?: string | null,
    catergory?: string | null,
    programID: string,
    createdAt: string,
    updatedAt: string,
    program?:  {
      __typename: "Program",
      id: string,
      name: string,
      summary?: string | null,
      catergory?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      days?:  {
        __typename: "ModelDayConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
    workout?:  {
      __typename: "ModelWorkoutConnection",
      items?:  Array< {
        __typename: "Workout",
        id: string,
        name: string,
        description?: string | null,
        catergory: Array< string >,
        dayID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateDaySubscription = {
  onUpdateDay?:  {
    __typename: "Day",
    id: string,
    name: string,
    description?: string | null,
    catergory?: string | null,
    programID: string,
    createdAt: string,
    updatedAt: string,
    program?:  {
      __typename: "Program",
      id: string,
      name: string,
      summary?: string | null,
      catergory?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      days?:  {
        __typename: "ModelDayConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
    workout?:  {
      __typename: "ModelWorkoutConnection",
      items?:  Array< {
        __typename: "Workout",
        id: string,
        name: string,
        description?: string | null,
        catergory: Array< string >,
        dayID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteDaySubscription = {
  onDeleteDay?:  {
    __typename: "Day",
    id: string,
    name: string,
    description?: string | null,
    catergory?: string | null,
    programID: string,
    createdAt: string,
    updatedAt: string,
    program?:  {
      __typename: "Program",
      id: string,
      name: string,
      summary?: string | null,
      catergory?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      days?:  {
        __typename: "ModelDayConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
    workout?:  {
      __typename: "ModelWorkoutConnection",
      items?:  Array< {
        __typename: "Workout",
        id: string,
        name: string,
        description?: string | null,
        catergory: Array< string >,
        dayID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateWorkoutSubscription = {
  onCreateWorkout?:  {
    __typename: "Workout",
    id: string,
    name: string,
    description?: string | null,
    catergory: Array< string >,
    dayID: string,
    createdAt: string,
    updatedAt: string,
    day?:  {
      __typename: "Day",
      id: string,
      name: string,
      description?: string | null,
      catergory?: string | null,
      programID: string,
      createdAt: string,
      updatedAt: string,
      program?:  {
        __typename: "Program",
        id: string,
        name: string,
        summary?: string | null,
        catergory?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
      workout?:  {
        __typename: "ModelWorkoutConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
    lift?:  {
      __typename: "ModelLiftWorkoutJoinConnection",
      items?:  Array< {
        __typename: "LiftWorkoutJoin",
        id: string,
        liftID: string,
        workoutID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateWorkoutSubscription = {
  onUpdateWorkout?:  {
    __typename: "Workout",
    id: string,
    name: string,
    description?: string | null,
    catergory: Array< string >,
    dayID: string,
    createdAt: string,
    updatedAt: string,
    day?:  {
      __typename: "Day",
      id: string,
      name: string,
      description?: string | null,
      catergory?: string | null,
      programID: string,
      createdAt: string,
      updatedAt: string,
      program?:  {
        __typename: "Program",
        id: string,
        name: string,
        summary?: string | null,
        catergory?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
      workout?:  {
        __typename: "ModelWorkoutConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
    lift?:  {
      __typename: "ModelLiftWorkoutJoinConnection",
      items?:  Array< {
        __typename: "LiftWorkoutJoin",
        id: string,
        liftID: string,
        workoutID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteWorkoutSubscription = {
  onDeleteWorkout?:  {
    __typename: "Workout",
    id: string,
    name: string,
    description?: string | null,
    catergory: Array< string >,
    dayID: string,
    createdAt: string,
    updatedAt: string,
    day?:  {
      __typename: "Day",
      id: string,
      name: string,
      description?: string | null,
      catergory?: string | null,
      programID: string,
      createdAt: string,
      updatedAt: string,
      program?:  {
        __typename: "Program",
        id: string,
        name: string,
        summary?: string | null,
        catergory?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
      workout?:  {
        __typename: "ModelWorkoutConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
    lift?:  {
      __typename: "ModelLiftWorkoutJoinConnection",
      items?:  Array< {
        __typename: "LiftWorkoutJoin",
        id: string,
        liftID: string,
        workoutID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateLiftWorkoutJoinSubscription = {
  onCreateLiftWorkoutJoin?:  {
    __typename: "LiftWorkoutJoin",
    id: string,
    liftID: string,
    workoutID: string,
    createdAt: string,
    updatedAt: string,
    workout:  {
      __typename: "Workout",
      id: string,
      name: string,
      description?: string | null,
      catergory: Array< string >,
      dayID: string,
      createdAt: string,
      updatedAt: string,
      day?:  {
        __typename: "Day",
        id: string,
        name: string,
        description?: string | null,
        catergory?: string | null,
        programID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
      lift?:  {
        __typename: "ModelLiftWorkoutJoinConnection",
        nextToken?: string | null,
      } | null,
    },
    owner?: string | null,
    lift:  {
      __typename: "Lift",
      id: string,
      name: string,
      description?: string | null,
      category: Array< string >,
      favorite: boolean,
      createdAt: string,
      updatedAt: string,
      workout?:  {
        __typename: "ModelLiftWorkoutJoinConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      records?:  {
        __typename: "ModelRecordConnection",
        nextToken?: string | null,
      } | null,
    },
  } | null,
};

export type OnUpdateLiftWorkoutJoinSubscription = {
  onUpdateLiftWorkoutJoin?:  {
    __typename: "LiftWorkoutJoin",
    id: string,
    liftID: string,
    workoutID: string,
    createdAt: string,
    updatedAt: string,
    workout:  {
      __typename: "Workout",
      id: string,
      name: string,
      description?: string | null,
      catergory: Array< string >,
      dayID: string,
      createdAt: string,
      updatedAt: string,
      day?:  {
        __typename: "Day",
        id: string,
        name: string,
        description?: string | null,
        catergory?: string | null,
        programID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
      lift?:  {
        __typename: "ModelLiftWorkoutJoinConnection",
        nextToken?: string | null,
      } | null,
    },
    owner?: string | null,
    lift:  {
      __typename: "Lift",
      id: string,
      name: string,
      description?: string | null,
      category: Array< string >,
      favorite: boolean,
      createdAt: string,
      updatedAt: string,
      workout?:  {
        __typename: "ModelLiftWorkoutJoinConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      records?:  {
        __typename: "ModelRecordConnection",
        nextToken?: string | null,
      } | null,
    },
  } | null,
};

export type OnDeleteLiftWorkoutJoinSubscription = {
  onDeleteLiftWorkoutJoin?:  {
    __typename: "LiftWorkoutJoin",
    id: string,
    liftID: string,
    workoutID: string,
    createdAt: string,
    updatedAt: string,
    workout:  {
      __typename: "Workout",
      id: string,
      name: string,
      description?: string | null,
      catergory: Array< string >,
      dayID: string,
      createdAt: string,
      updatedAt: string,
      day?:  {
        __typename: "Day",
        id: string,
        name: string,
        description?: string | null,
        catergory?: string | null,
        programID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
      lift?:  {
        __typename: "ModelLiftWorkoutJoinConnection",
        nextToken?: string | null,
      } | null,
    },
    owner?: string | null,
    lift:  {
      __typename: "Lift",
      id: string,
      name: string,
      description?: string | null,
      category: Array< string >,
      favorite: boolean,
      createdAt: string,
      updatedAt: string,
      workout?:  {
        __typename: "ModelLiftWorkoutJoinConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      records?:  {
        __typename: "ModelRecordConnection",
        nextToken?: string | null,
      } | null,
    },
  } | null,
};

export type OnCreateLiftSubscription = {
  onCreateLift?:  {
    __typename: "Lift",
    id: string,
    name: string,
    description?: string | null,
    category: Array< string >,
    favorite: boolean,
    createdAt: string,
    updatedAt: string,
    workout?:  {
      __typename: "ModelLiftWorkoutJoinConnection",
      items?:  Array< {
        __typename: "LiftWorkoutJoin",
        id: string,
        liftID: string,
        workoutID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    records?:  {
      __typename: "ModelRecordConnection",
      items?:  Array< {
        __typename: "Record",
        id: string,
        load: number,
        warmup: number,
        sets: number,
        reps: number,
        unit: string,
        rpe: string,
        percent: string,
        liftID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateLiftSubscription = {
  onUpdateLift?:  {
    __typename: "Lift",
    id: string,
    name: string,
    description?: string | null,
    category: Array< string >,
    favorite: boolean,
    createdAt: string,
    updatedAt: string,
    workout?:  {
      __typename: "ModelLiftWorkoutJoinConnection",
      items?:  Array< {
        __typename: "LiftWorkoutJoin",
        id: string,
        liftID: string,
        workoutID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    records?:  {
      __typename: "ModelRecordConnection",
      items?:  Array< {
        __typename: "Record",
        id: string,
        load: number,
        warmup: number,
        sets: number,
        reps: number,
        unit: string,
        rpe: string,
        percent: string,
        liftID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteLiftSubscription = {
  onDeleteLift?:  {
    __typename: "Lift",
    id: string,
    name: string,
    description?: string | null,
    category: Array< string >,
    favorite: boolean,
    createdAt: string,
    updatedAt: string,
    workout?:  {
      __typename: "ModelLiftWorkoutJoinConnection",
      items?:  Array< {
        __typename: "LiftWorkoutJoin",
        id: string,
        liftID: string,
        workoutID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    records?:  {
      __typename: "ModelRecordConnection",
      items?:  Array< {
        __typename: "Record",
        id: string,
        load: number,
        warmup: number,
        sets: number,
        reps: number,
        unit: string,
        rpe: string,
        percent: string,
        liftID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateRecordSubscription = {
  onCreateRecord?:  {
    __typename: "Record",
    id: string,
    load: number,
    warmup: number,
    sets: number,
    reps: number,
    unit: string,
    rpe: string,
    percent: string,
    liftID: string,
    createdAt: string,
    updatedAt: string,
    lift?:  {
      __typename: "Lift",
      id: string,
      name: string,
      description?: string | null,
      category: Array< string >,
      favorite: boolean,
      createdAt: string,
      updatedAt: string,
      workout?:  {
        __typename: "ModelLiftWorkoutJoinConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      records?:  {
        __typename: "ModelRecordConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateRecordSubscription = {
  onUpdateRecord?:  {
    __typename: "Record",
    id: string,
    load: number,
    warmup: number,
    sets: number,
    reps: number,
    unit: string,
    rpe: string,
    percent: string,
    liftID: string,
    createdAt: string,
    updatedAt: string,
    lift?:  {
      __typename: "Lift",
      id: string,
      name: string,
      description?: string | null,
      category: Array< string >,
      favorite: boolean,
      createdAt: string,
      updatedAt: string,
      workout?:  {
        __typename: "ModelLiftWorkoutJoinConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      records?:  {
        __typename: "ModelRecordConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteRecordSubscription = {
  onDeleteRecord?:  {
    __typename: "Record",
    id: string,
    load: number,
    warmup: number,
    sets: number,
    reps: number,
    unit: string,
    rpe: string,
    percent: string,
    liftID: string,
    createdAt: string,
    updatedAt: string,
    lift?:  {
      __typename: "Lift",
      id: string,
      name: string,
      description?: string | null,
      category: Array< string >,
      favorite: boolean,
      createdAt: string,
      updatedAt: string,
      workout?:  {
        __typename: "ModelLiftWorkoutJoinConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      records?:  {
        __typename: "ModelRecordConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};
