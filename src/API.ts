/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateLiftInput = {
  id?: string | null,
  name: string,
  category?: string | null,
  bodypart: Array< string >,
  tags?: Array< string > | null,
  favorite: string,
  unit: string,
  owner?: string | null,
};

export type ModelLiftConditionInput = {
  name?: ModelStringInput | null,
  category?: ModelStringInput | null,
  bodypart?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  favorite?: ModelStringInput | null,
  unit?: ModelStringInput | null,
  and?: Array< ModelLiftConditionInput | null > | null,
  or?: Array< ModelLiftConditionInput | null > | null,
  not?: ModelLiftConditionInput | null,
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

export type Lift = {
  __typename: "Lift",
  id: string,
  name: string,
  category?: string | null,
  bodypart: Array< string >,
  tags?: Array< string > | null,
  favorite: string,
  unit: string,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
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
  sets: number,
  reps: number,
  rpe?: number | null,
  performedDate?: string | null,
  liftID: string,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
  lift?: Lift | null,
};

export type UpdateLiftInput = {
  id: string,
  name?: string | null,
  category?: string | null,
  bodypart?: Array< string > | null,
  tags?: Array< string > | null,
  favorite?: string | null,
  unit?: string | null,
  owner?: string | null,
};

export type DeleteLiftInput = {
  id: string,
};

export type CreateRecordInput = {
  id?: string | null,
  load: number,
  sets: number,
  reps: number,
  rpe?: number | null,
  performedDate?: string | null,
  liftID: string,
  owner?: string | null,
};

export type ModelRecordConditionInput = {
  load?: ModelFloatInput | null,
  sets?: ModelIntInput | null,
  reps?: ModelIntInput | null,
  rpe?: ModelFloatInput | null,
  performedDate?: ModelStringInput | null,
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

export type UpdateRecordInput = {
  id: string,
  load?: number | null,
  sets?: number | null,
  reps?: number | null,
  rpe?: number | null,
  performedDate?: string | null,
  liftID?: string | null,
  owner?: string | null,
};

export type DeleteRecordInput = {
  id: string,
};

export type ModelLiftFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  category?: ModelStringInput | null,
  bodypart?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  favorite?: ModelStringInput | null,
  unit?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelLiftFilterInput | null > | null,
  or?: Array< ModelLiftFilterInput | null > | null,
  not?: ModelLiftFilterInput | null,
};

export type ModelLiftConnection = {
  __typename: "ModelLiftConnection",
  items?:  Array<Lift | null > | null,
  nextToken?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelRecordFilterInput = {
  id?: ModelIDInput | null,
  load?: ModelFloatInput | null,
  sets?: ModelIntInput | null,
  reps?: ModelIntInput | null,
  rpe?: ModelFloatInput | null,
  performedDate?: ModelStringInput | null,
  liftID?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelRecordFilterInput | null > | null,
  or?: Array< ModelRecordFilterInput | null > | null,
  not?: ModelRecordFilterInput | null,
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
    category?: string | null,
    bodypart: Array< string >,
    tags?: Array< string > | null,
    favorite: string,
    unit: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    records?:  {
      __typename: "ModelRecordConnection",
      items?:  Array< {
        __typename: "Record",
        id: string,
        load: number,
        sets: number,
        reps: number,
        rpe?: number | null,
        performedDate?: string | null,
        liftID: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        lift?:  {
          __typename: "Lift",
          id: string,
          name: string,
          category?: string | null,
          bodypart: Array< string >,
          tags?: Array< string > | null,
          favorite: string,
          unit: string,
          owner?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
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
    category?: string | null,
    bodypart: Array< string >,
    tags?: Array< string > | null,
    favorite: string,
    unit: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    records?:  {
      __typename: "ModelRecordConnection",
      items?:  Array< {
        __typename: "Record",
        id: string,
        load: number,
        sets: number,
        reps: number,
        rpe?: number | null,
        performedDate?: string | null,
        liftID: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        lift?:  {
          __typename: "Lift",
          id: string,
          name: string,
          category?: string | null,
          bodypart: Array< string >,
          tags?: Array< string > | null,
          favorite: string,
          unit: string,
          owner?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
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
    category?: string | null,
    bodypart: Array< string >,
    tags?: Array< string > | null,
    favorite: string,
    unit: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    records?:  {
      __typename: "ModelRecordConnection",
      items?:  Array< {
        __typename: "Record",
        id: string,
        load: number,
        sets: number,
        reps: number,
        rpe?: number | null,
        performedDate?: string | null,
        liftID: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        lift?:  {
          __typename: "Lift",
          id: string,
          name: string,
          category?: string | null,
          bodypart: Array< string >,
          tags?: Array< string > | null,
          favorite: string,
          unit: string,
          owner?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
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
    sets: number,
    reps: number,
    rpe?: number | null,
    performedDate?: string | null,
    liftID: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    lift?:  {
      __typename: "Lift",
      id: string,
      name: string,
      category?: string | null,
      bodypart: Array< string >,
      tags?: Array< string > | null,
      favorite: string,
      unit: string,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      records?:  {
        __typename: "ModelRecordConnection",
        items?:  Array< {
          __typename: "Record",
          id: string,
          load: number,
          sets: number,
          reps: number,
          rpe?: number | null,
          performedDate?: string | null,
          liftID: string,
          owner?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    } | null,
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
    sets: number,
    reps: number,
    rpe?: number | null,
    performedDate?: string | null,
    liftID: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    lift?:  {
      __typename: "Lift",
      id: string,
      name: string,
      category?: string | null,
      bodypart: Array< string >,
      tags?: Array< string > | null,
      favorite: string,
      unit: string,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      records?:  {
        __typename: "ModelRecordConnection",
        items?:  Array< {
          __typename: "Record",
          id: string,
          load: number,
          sets: number,
          reps: number,
          rpe?: number | null,
          performedDate?: string | null,
          liftID: string,
          owner?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    } | null,
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
    sets: number,
    reps: number,
    rpe?: number | null,
    performedDate?: string | null,
    liftID: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    lift?:  {
      __typename: "Lift",
      id: string,
      name: string,
      category?: string | null,
      bodypart: Array< string >,
      tags?: Array< string > | null,
      favorite: string,
      unit: string,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      records?:  {
        __typename: "ModelRecordConnection",
        items?:  Array< {
          __typename: "Record",
          id: string,
          load: number,
          sets: number,
          reps: number,
          rpe?: number | null,
          performedDate?: string | null,
          liftID: string,
          owner?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    } | null,
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
    category?: string | null,
    bodypart: Array< string >,
    tags?: Array< string > | null,
    favorite: string,
    unit: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    records?:  {
      __typename: "ModelRecordConnection",
      items?:  Array< {
        __typename: "Record",
        id: string,
        load: number,
        sets: number,
        reps: number,
        rpe?: number | null,
        performedDate?: string | null,
        liftID: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        lift?:  {
          __typename: "Lift",
          id: string,
          name: string,
          category?: string | null,
          bodypart: Array< string >,
          tags?: Array< string > | null,
          favorite: string,
          unit: string,
          owner?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
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
      category?: string | null,
      bodypart: Array< string >,
      tags?: Array< string > | null,
      favorite: string,
      unit: string,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      records?:  {
        __typename: "ModelRecordConnection",
        items?:  Array< {
          __typename: "Record",
          id: string,
          load: number,
          sets: number,
          reps: number,
          rpe?: number | null,
          performedDate?: string | null,
          liftID: string,
          owner?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type LiftsByUserQueryVariables = {
  owner?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelLiftFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type LiftsByUserQuery = {
  liftsByUser?:  {
    __typename: "ModelLiftConnection",
    items?:  Array< {
      __typename: "Lift",
      id: string,
      name: string,
      category?: string | null,
      bodypart: Array< string >,
      tags?: Array< string > | null,
      favorite: string,
      unit: string,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      records?:  {
        __typename: "ModelRecordConnection",
        items?:  Array< {
          __typename: "Record",
          id: string,
          load: number,
          sets: number,
          reps: number,
          rpe?: number | null,
          performedDate?: string | null,
          liftID: string,
          owner?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
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
    sets: number,
    reps: number,
    rpe?: number | null,
    performedDate?: string | null,
    liftID: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    lift?:  {
      __typename: "Lift",
      id: string,
      name: string,
      category?: string | null,
      bodypart: Array< string >,
      tags?: Array< string > | null,
      favorite: string,
      unit: string,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      records?:  {
        __typename: "ModelRecordConnection",
        items?:  Array< {
          __typename: "Record",
          id: string,
          load: number,
          sets: number,
          reps: number,
          rpe?: number | null,
          performedDate?: string | null,
          liftID: string,
          owner?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    } | null,
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
      sets: number,
      reps: number,
      rpe?: number | null,
      performedDate?: string | null,
      liftID: string,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      lift?:  {
        __typename: "Lift",
        id: string,
        name: string,
        category?: string | null,
        bodypart: Array< string >,
        tags?: Array< string > | null,
        favorite: string,
        unit: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        records?:  {
          __typename: "ModelRecordConnection",
          nextToken?: string | null,
        } | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type RecordsByUserQueryVariables = {
  owner?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRecordFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type RecordsByUserQuery = {
  recordsByUser?:  {
    __typename: "ModelRecordConnection",
    items?:  Array< {
      __typename: "Record",
      id: string,
      load: number,
      sets: number,
      reps: number,
      rpe?: number | null,
      performedDate?: string | null,
      liftID: string,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      lift?:  {
        __typename: "Lift",
        id: string,
        name: string,
        category?: string | null,
        bodypart: Array< string >,
        tags?: Array< string > | null,
        favorite: string,
        unit: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        records?:  {
          __typename: "ModelRecordConnection",
          nextToken?: string | null,
        } | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateLiftSubscription = {
  onCreateLift?:  {
    __typename: "Lift",
    id: string,
    name: string,
    category?: string | null,
    bodypart: Array< string >,
    tags?: Array< string > | null,
    favorite: string,
    unit: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    records?:  {
      __typename: "ModelRecordConnection",
      items?:  Array< {
        __typename: "Record",
        id: string,
        load: number,
        sets: number,
        reps: number,
        rpe?: number | null,
        performedDate?: string | null,
        liftID: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        lift?:  {
          __typename: "Lift",
          id: string,
          name: string,
          category?: string | null,
          bodypart: Array< string >,
          tags?: Array< string > | null,
          favorite: string,
          unit: string,
          owner?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
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
    category?: string | null,
    bodypart: Array< string >,
    tags?: Array< string > | null,
    favorite: string,
    unit: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    records?:  {
      __typename: "ModelRecordConnection",
      items?:  Array< {
        __typename: "Record",
        id: string,
        load: number,
        sets: number,
        reps: number,
        rpe?: number | null,
        performedDate?: string | null,
        liftID: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        lift?:  {
          __typename: "Lift",
          id: string,
          name: string,
          category?: string | null,
          bodypart: Array< string >,
          tags?: Array< string > | null,
          favorite: string,
          unit: string,
          owner?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
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
    category?: string | null,
    bodypart: Array< string >,
    tags?: Array< string > | null,
    favorite: string,
    unit: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    records?:  {
      __typename: "ModelRecordConnection",
      items?:  Array< {
        __typename: "Record",
        id: string,
        load: number,
        sets: number,
        reps: number,
        rpe?: number | null,
        performedDate?: string | null,
        liftID: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        lift?:  {
          __typename: "Lift",
          id: string,
          name: string,
          category?: string | null,
          bodypart: Array< string >,
          tags?: Array< string > | null,
          favorite: string,
          unit: string,
          owner?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
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
    sets: number,
    reps: number,
    rpe?: number | null,
    performedDate?: string | null,
    liftID: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    lift?:  {
      __typename: "Lift",
      id: string,
      name: string,
      category?: string | null,
      bodypart: Array< string >,
      tags?: Array< string > | null,
      favorite: string,
      unit: string,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      records?:  {
        __typename: "ModelRecordConnection",
        items?:  Array< {
          __typename: "Record",
          id: string,
          load: number,
          sets: number,
          reps: number,
          rpe?: number | null,
          performedDate?: string | null,
          liftID: string,
          owner?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateRecordSubscription = {
  onUpdateRecord?:  {
    __typename: "Record",
    id: string,
    load: number,
    sets: number,
    reps: number,
    rpe?: number | null,
    performedDate?: string | null,
    liftID: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    lift?:  {
      __typename: "Lift",
      id: string,
      name: string,
      category?: string | null,
      bodypart: Array< string >,
      tags?: Array< string > | null,
      favorite: string,
      unit: string,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      records?:  {
        __typename: "ModelRecordConnection",
        items?:  Array< {
          __typename: "Record",
          id: string,
          load: number,
          sets: number,
          reps: number,
          rpe?: number | null,
          performedDate?: string | null,
          liftID: string,
          owner?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteRecordSubscription = {
  onDeleteRecord?:  {
    __typename: "Record",
    id: string,
    load: number,
    sets: number,
    reps: number,
    rpe?: number | null,
    performedDate?: string | null,
    liftID: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    lift?:  {
      __typename: "Lift",
      id: string,
      name: string,
      category?: string | null,
      bodypart: Array< string >,
      tags?: Array< string > | null,
      favorite: string,
      unit: string,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      records?:  {
        __typename: "ModelRecordConnection",
        items?:  Array< {
          __typename: "Record",
          id: string,
          load: number,
          sets: number,
          reps: number,
          rpe?: number | null,
          performedDate?: string | null,
          liftID: string,
          owner?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};
