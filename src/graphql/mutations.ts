/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTMTNProject = /* GraphQL */ `
  mutation CreateTMTNProject(
    $input: CreateTMTNProjectInput!
    $condition: ModelTMTNProjectConditionInput
  ) {
    createTMTNProject(input: $input, condition: $condition) {
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
export const updateTMTNProject = /* GraphQL */ `
  mutation UpdateTMTNProject(
    $input: UpdateTMTNProjectInput!
    $condition: ModelTMTNProjectConditionInput
  ) {
    updateTMTNProject(input: $input, condition: $condition) {
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
export const deleteTMTNProject = /* GraphQL */ `
  mutation DeleteTMTNProject(
    $input: DeleteTMTNProjectInput!
    $condition: ModelTMTNProjectConditionInput
  ) {
    deleteTMTNProject(input: $input, condition: $condition) {
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
export const createTMTNProjectLink = /* GraphQL */ `
  mutation CreateTMTNProjectLink(
    $input: CreateTMTNProjectLinkInput!
    $condition: ModelTMTNProjectLinkConditionInput
  ) {
    createTMTNProjectLink(input: $input, condition: $condition) {
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
export const updateTMTNProjectLink = /* GraphQL */ `
  mutation UpdateTMTNProjectLink(
    $input: UpdateTMTNProjectLinkInput!
    $condition: ModelTMTNProjectLinkConditionInput
  ) {
    updateTMTNProjectLink(input: $input, condition: $condition) {
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
export const deleteTMTNProjectLink = /* GraphQL */ `
  mutation DeleteTMTNProjectLink(
    $input: DeleteTMTNProjectLinkInput!
    $condition: ModelTMTNProjectLinkConditionInput
  ) {
    deleteTMTNProjectLink(input: $input, condition: $condition) {
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
export const createProjectLinks = /* GraphQL */ `
  mutation CreateProjectLinks(
    $input: CreateProjectLinksInput!
    $condition: ModelProjectLinksConditionInput
  ) {
    createProjectLinks(input: $input, condition: $condition) {
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
export const updateProjectLinks = /* GraphQL */ `
  mutation UpdateProjectLinks(
    $input: UpdateProjectLinksInput!
    $condition: ModelProjectLinksConditionInput
  ) {
    updateProjectLinks(input: $input, condition: $condition) {
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
export const deleteProjectLinks = /* GraphQL */ `
  mutation DeleteProjectLinks(
    $input: DeleteProjectLinksInput!
    $condition: ModelProjectLinksConditionInput
  ) {
    deleteProjectLinks(input: $input, condition: $condition) {
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
