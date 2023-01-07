/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTMTNProject = /* GraphQL */ `
  subscription OnCreateTMTNProject(
    $filter: ModelSubscriptionTMTNProjectFilterInput
    $owner: String
  ) {
    onCreateTMTNProject(filter: $filter, owner: $owner) {
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
export const onUpdateTMTNProject = /* GraphQL */ `
  subscription OnUpdateTMTNProject(
    $filter: ModelSubscriptionTMTNProjectFilterInput
    $owner: String
  ) {
    onUpdateTMTNProject(filter: $filter, owner: $owner) {
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
export const onDeleteTMTNProject = /* GraphQL */ `
  subscription OnDeleteTMTNProject(
    $filter: ModelSubscriptionTMTNProjectFilterInput
    $owner: String
  ) {
    onDeleteTMTNProject(filter: $filter, owner: $owner) {
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
export const onCreateTMTNProjectLink = /* GraphQL */ `
  subscription OnCreateTMTNProjectLink(
    $filter: ModelSubscriptionTMTNProjectLinkFilterInput
    $owner: String
  ) {
    onCreateTMTNProjectLink(filter: $filter, owner: $owner) {
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
export const onUpdateTMTNProjectLink = /* GraphQL */ `
  subscription OnUpdateTMTNProjectLink(
    $filter: ModelSubscriptionTMTNProjectLinkFilterInput
    $owner: String
  ) {
    onUpdateTMTNProjectLink(filter: $filter, owner: $owner) {
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
export const onDeleteTMTNProjectLink = /* GraphQL */ `
  subscription OnDeleteTMTNProjectLink(
    $filter: ModelSubscriptionTMTNProjectLinkFilterInput
    $owner: String
  ) {
    onDeleteTMTNProjectLink(filter: $filter, owner: $owner) {
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
export const onCreateProjectLinks = /* GraphQL */ `
  subscription OnCreateProjectLinks(
    $filter: ModelSubscriptionProjectLinksFilterInput
    $owner: String
  ) {
    onCreateProjectLinks(filter: $filter, owner: $owner) {
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
export const onUpdateProjectLinks = /* GraphQL */ `
  subscription OnUpdateProjectLinks(
    $filter: ModelSubscriptionProjectLinksFilterInput
    $owner: String
  ) {
    onUpdateProjectLinks(filter: $filter, owner: $owner) {
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
export const onDeleteProjectLinks = /* GraphQL */ `
  subscription OnDeleteProjectLinks(
    $filter: ModelSubscriptionProjectLinksFilterInput
    $owner: String
  ) {
    onDeleteProjectLinks(filter: $filter, owner: $owner) {
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
