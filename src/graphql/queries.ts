/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        }
        owner
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
      nextToken
    }
  }
`;
export const liftsByUser = /* GraphQL */ `
  query LiftsByUser(
    $owner: String
    $sortDirection: ModelSortDirection
    $filter: ModelLiftFilterInput
    $limit: Int
    $nextToken: String
  ) {
    liftsByUser(
      owner: $owner
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        }
        owner
      }
      nextToken
    }
  }
`;
