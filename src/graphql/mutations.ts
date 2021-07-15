/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      title
      contents
      image
      upvotes
      downvotes
      createdAt
      updatedAt
      owner
      comments {
        items {
          id
          postID
          content
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      title
      contents
      image
      upvotes
      downvotes
      createdAt
      updatedAt
      owner
      comments {
        items {
          id
          postID
          content
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      title
      contents
      image
      upvotes
      downvotes
      createdAt
      updatedAt
      owner
      comments {
        items {
          id
          postID
          content
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      postID
      content
      createdAt
      updatedAt
      post {
        id
        title
        contents
        image
        upvotes
        downvotes
        createdAt
        updatedAt
        owner
        comments {
          nextToken
        }
      }
      owner
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      postID
      content
      createdAt
      updatedAt
      post {
        id
        title
        contents
        image
        upvotes
        downvotes
        createdAt
        updatedAt
        owner
        comments {
          nextToken
        }
      }
      owner
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      postID
      content
      createdAt
      updatedAt
      post {
        id
        title
        contents
        image
        upvotes
        downvotes
        createdAt
        updatedAt
        owner
        comments {
          nextToken
        }
      }
      owner
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
          percent
          performedDate
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
          percent
          performedDate
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
          percent
          performedDate
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
      rpe
      percent
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
      percent
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
      percent
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
          nextToken
        }
      }
      owner
    }
  }
`;
