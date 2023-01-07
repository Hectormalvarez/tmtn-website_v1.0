/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTMTNProject = /* GraphQL */ `
  query GetTMTNProject($id: ID!) {
    getTMTNProject(id: $id) {
      id
      name
      description
      techstack
      links {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listTMTNProjects = /* GraphQL */ `
  query ListTMTNProjects(
    $filter: ModelTMTNProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTMTNProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        techstack
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getTMTNProjectLink = /* GraphQL */ `
  query GetTMTNProjectLink($id: ID!) {
    getTMTNProjectLink(id: $id) {
      id
      name
      url
      projects {
        nextToken
      }
      type
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listTMTNProjectLinks = /* GraphQL */ `
  query ListTMTNProjectLinks(
    $filter: ModelTMTNProjectLinkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTMTNProjectLinks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        url
        type
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getProjectLinks = /* GraphQL */ `
  query GetProjectLinks($id: ID!) {
    getProjectLinks(id: $id) {
      id
      tMTNProjectId
      tMTNProjectLinkId
      tMTNProject {
        id
        name
        description
        techstack
        createdAt
        updatedAt
        owner
      }
      tMTNProjectLink {
        id
        name
        url
        type
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listProjectLinks = /* GraphQL */ `
  query ListProjectLinks(
    $filter: ModelProjectLinksFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjectLinks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tMTNProjectId
        tMTNProjectLinkId
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const projectLinksByTMTNProjectId = /* GraphQL */ `
  query ProjectLinksByTMTNProjectId(
    $tMTNProjectId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProjectLinksFilterInput
    $limit: Int
    $nextToken: String
  ) {
    projectLinksByTMTNProjectId(
      tMTNProjectId: $tMTNProjectId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tMTNProjectId
        tMTNProjectLinkId
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const projectLinksByTMTNProjectLinkId = /* GraphQL */ `
  query ProjectLinksByTMTNProjectLinkId(
    $tMTNProjectLinkId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProjectLinksFilterInput
    $limit: Int
    $nextToken: String
  ) {
    projectLinksByTMTNProjectLinkId(
      tMTNProjectLinkId: $tMTNProjectLinkId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tMTNProjectId
        tMTNProjectLinkId
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
