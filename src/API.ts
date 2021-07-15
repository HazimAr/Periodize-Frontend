/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePostInput = {
  id?: string | null,
  title: string,
  contents: string,
  image?: string | null,
  upvotes: number,
  downvotes: number,
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null,
  contents?: ModelStringInput | null,
  image?: ModelStringInput | null,
  upvotes?: ModelIntInput | null,
  downvotes?: ModelIntInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
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

export type Post = {
  __typename: "Post",
  id: string,
  title: string,
  contents: string,
  image?: string | null,
  upvotes: number,
  downvotes: number,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
  comments?: ModelCommentConnection | null,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items?:  Array<Comment | null > | null,
  nextToken?: string | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  postID: string,
  content: string,
  createdAt: string,
  updatedAt: string,
  post?: Post | null,
  owner?: string | null,
};

export type UpdatePostInput = {
  id: string,
  title?: string | null,
  contents?: string | null,
  image?: string | null,
  upvotes?: number | null,
  downvotes?: number | null,
};

export type DeletePostInput = {
  id: string,
};

export type CreateCommentInput = {
  id?: string | null,
  postID: string,
  content: string,
};

export type ModelCommentConditionInput = {
  postID?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
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

export type UpdateCommentInput = {
  id: string,
  postID?: string | null,
  content?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

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
  warmup?: number | null,
  sets: number,
  reps: number,
  rpe?: string | null,
  percent?: string | null,
  performedDate?: string | null,
  liftID: string,
  createdAt: string,
  updatedAt: string,
  lift?: Lift | null,
  owner?: string | null,
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
  warmup?: number | null,
  sets: number,
  reps: number,
  rpe?: string | null,
  percent?: string | null,
  performedDate?: string | null,
  liftID: string,
};

export type ModelRecordConditionInput = {
  load?: ModelFloatInput | null,
  warmup?: ModelIntInput | null,
  sets?: ModelIntInput | null,
  reps?: ModelIntInput | null,
  rpe?: ModelStringInput | null,
  percent?: ModelStringInput | null,
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

export type UpdateRecordInput = {
  id: string,
  load?: number | null,
  warmup?: number | null,
  sets?: number | null,
  reps?: number | null,
  rpe?: string | null,
  percent?: string | null,
  performedDate?: string | null,
  liftID?: string | null,
};

export type DeleteRecordInput = {
  id: string,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  contents?: ModelStringInput | null,
  image?: ModelStringInput | null,
  upvotes?: ModelIntInput | null,
  downvotes?: ModelIntInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items?:  Array<Post | null > | null,
  nextToken?: string | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
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
  warmup?: ModelIntInput | null,
  sets?: ModelIntInput | null,
  reps?: ModelIntInput | null,
  rpe?: ModelStringInput | null,
  percent?: ModelStringInput | null,
  performedDate?: ModelStringInput | null,
  liftID?: ModelIDInput | null,
  and?: Array< ModelRecordFilterInput | null > | null,
  or?: Array< ModelRecordFilterInput | null > | null,
  not?: ModelRecordFilterInput | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    contents: string,
    image?: string | null,
    upvotes: number,
    downvotes: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        postID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    contents: string,
    image?: string | null,
    upvotes: number,
    downvotes: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        postID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    contents: string,
    image?: string | null,
    upvotes: number,
    downvotes: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        postID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      contents: string,
      image?: string | null,
      upvotes: number,
      downvotes: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      contents: string,
      image?: string | null,
      upvotes: number,
      downvotes: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      contents: string,
      image?: string | null,
      upvotes: number,
      downvotes: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
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
        warmup?: number | null,
        sets: number,
        reps: number,
        rpe?: string | null,
        percent?: string | null,
        performedDate?: string | null,
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
        warmup?: number | null,
        sets: number,
        reps: number,
        rpe?: string | null,
        percent?: string | null,
        performedDate?: string | null,
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
        warmup?: number | null,
        sets: number,
        reps: number,
        rpe?: string | null,
        percent?: string | null,
        performedDate?: string | null,
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
    warmup?: number | null,
    sets: number,
    reps: number,
    rpe?: string | null,
    percent?: string | null,
    performedDate?: string | null,
    liftID: string,
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
    warmup?: number | null,
    sets: number,
    reps: number,
    rpe?: string | null,
    percent?: string | null,
    performedDate?: string | null,
    liftID: string,
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
    warmup?: number | null,
    sets: number,
    reps: number,
    rpe?: string | null,
    percent?: string | null,
    performedDate?: string | null,
    liftID: string,
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
    owner?: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    contents: string,
    image?: string | null,
    upvotes: number,
    downvotes: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        postID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items?:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      contents: string,
      image?: string | null,
      upvotes: number,
      downvotes: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      contents: string,
      image?: string | null,
      upvotes: number,
      downvotes: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items?:  Array< {
      __typename: "Comment",
      id: string,
      postID: string,
      content: string,
      createdAt: string,
      updatedAt: string,
      post?:  {
        __typename: "Post",
        id: string,
        title: string,
        contents: string,
        image?: string | null,
        upvotes: number,
        downvotes: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
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
        warmup?: number | null,
        sets: number,
        reps: number,
        rpe?: string | null,
        percent?: string | null,
        performedDate?: string | null,
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
    warmup?: number | null,
    sets: number,
    reps: number,
    rpe?: string | null,
    percent?: string | null,
    performedDate?: string | null,
    liftID: string,
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
      warmup?: number | null,
      sets: number,
      reps: number,
      rpe?: string | null,
      percent?: string | null,
      performedDate?: string | null,
      liftID: string,
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
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    contents: string,
    image?: string | null,
    upvotes: number,
    downvotes: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        postID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    contents: string,
    image?: string | null,
    upvotes: number,
    downvotes: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        postID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    contents: string,
    image?: string | null,
    upvotes: number,
    downvotes: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        postID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      contents: string,
      image?: string | null,
      upvotes: number,
      downvotes: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      contents: string,
      image?: string | null,
      upvotes: number,
      downvotes: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      contents: string,
      image?: string | null,
      upvotes: number,
      downvotes: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
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
        warmup?: number | null,
        sets: number,
        reps: number,
        rpe?: string | null,
        percent?: string | null,
        performedDate?: string | null,
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
        warmup?: number | null,
        sets: number,
        reps: number,
        rpe?: string | null,
        percent?: string | null,
        performedDate?: string | null,
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
        warmup?: number | null,
        sets: number,
        reps: number,
        rpe?: string | null,
        percent?: string | null,
        performedDate?: string | null,
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
    warmup?: number | null,
    sets: number,
    reps: number,
    rpe?: string | null,
    percent?: string | null,
    performedDate?: string | null,
    liftID: string,
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
    owner?: string | null,
  } | null,
};

export type OnUpdateRecordSubscription = {
  onUpdateRecord?:  {
    __typename: "Record",
    id: string,
    load: number,
    warmup?: number | null,
    sets: number,
    reps: number,
    rpe?: string | null,
    percent?: string | null,
    performedDate?: string | null,
    liftID: string,
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
    owner?: string | null,
  } | null,
};

export type OnDeleteRecordSubscription = {
  onDeleteRecord?:  {
    __typename: "Record",
    id: string,
    load: number,
    warmup?: number | null,
    sets: number,
    reps: number,
    rpe?: string | null,
    percent?: string | null,
    performedDate?: string | null,
    liftID: string,
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
    owner?: string | null,
  } | null,
};
