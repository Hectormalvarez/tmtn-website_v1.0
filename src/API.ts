/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTMTNProjectInput = {
  id?: string | null
  name: string
  description: string
  techstack: string
}

export type ModelTMTNProjectConditionInput = {
  name?: ModelStringInput | null
  description?: ModelStringInput | null
  techstack?: ModelStringInput | null
  and?: Array<ModelTMTNProjectConditionInput | null> | null
  or?: Array<ModelTMTNProjectConditionInput | null> | null
  not?: ModelTMTNProjectConditionInput | null
}

export type ModelStringInput = {
  ne?: string | null
  eq?: string | null
  le?: string | null
  lt?: string | null
  ge?: string | null
  gt?: string | null
  contains?: string | null
  notContains?: string | null
  between?: Array<string | null> | null
  beginsWith?: string | null
  attributeExists?: boolean | null
  attributeType?: ModelAttributeTypes | null
  size?: ModelSizeInput | null
}

export enum ModelAttributeTypes {
  binary = 'binary',
  binarySet = 'binarySet',
  bool = 'bool',
  list = 'list',
  map = 'map',
  number = 'number',
  numberSet = 'numberSet',
  string = 'string',
  stringSet = 'stringSet',
  _null = '_null',
}

export type ModelSizeInput = {
  ne?: number | null
  eq?: number | null
  le?: number | null
  lt?: number | null
  ge?: number | null
  gt?: number | null
  between?: Array<number | null> | null
}

export type TMTNProject = {
  __typename: 'TMTNProject'
  id: string
  name: string
  description: string
  techstack: string
  links?: ModelProjectLinksConnection | null
  createdAt: string
  updatedAt: string
  owner?: string | null
}

export type ModelProjectLinksConnection = {
  __typename: 'ModelProjectLinksConnection'
  items: Array<ProjectLinks | null>
  nextToken?: string | null
}

export type ProjectLinks = {
  __typename: 'ProjectLinks'
  id: string
  tMTNProjectId: string
  tMTNProjectLinkId: string
  tMTNProject: TMTNProject
  tMTNProjectLink: TMTNProjectLink
  createdAt: string
  updatedAt: string
  owner?: string | null
}

export type TMTNProjectLink = {
  __typename: 'TMTNProjectLink'
  id: string
  name: string
  url: string
  projects?: ModelProjectLinksConnection | null
  type?: LinkType | null
  createdAt: string
  updatedAt: string
  owner?: string | null
}

export enum LinkType {
  GITHUB = 'GITHUB',
  FIGMA = 'FIGMA',
  WEBSITE = 'WEBSITE',
}

export type UpdateTMTNProjectInput = {
  id: string
  name?: string | null
  description?: string | null
  techstack?: string | null
}

export type DeleteTMTNProjectInput = {
  id: string
}

export type CreateTMTNProjectLinkInput = {
  id?: string | null
  name: string
  url: string
  type?: LinkType | null
}

export type ModelTMTNProjectLinkConditionInput = {
  name?: ModelStringInput | null
  url?: ModelStringInput | null
  type?: ModelLinkTypeInput | null
  and?: Array<ModelTMTNProjectLinkConditionInput | null> | null
  or?: Array<ModelTMTNProjectLinkConditionInput | null> | null
  not?: ModelTMTNProjectLinkConditionInput | null
}

export type ModelLinkTypeInput = {
  eq?: LinkType | null
  ne?: LinkType | null
}

export type UpdateTMTNProjectLinkInput = {
  id: string
  name?: string | null
  url?: string | null
  type?: LinkType | null
}

export type DeleteTMTNProjectLinkInput = {
  id: string
}

export type CreateProjectLinksInput = {
  id?: string | null
  tMTNProjectId: string
  tMTNProjectLinkId: string
}

export type ModelProjectLinksConditionInput = {
  tMTNProjectId?: ModelIDInput | null
  tMTNProjectLinkId?: ModelIDInput | null
  and?: Array<ModelProjectLinksConditionInput | null> | null
  or?: Array<ModelProjectLinksConditionInput | null> | null
  not?: ModelProjectLinksConditionInput | null
}

export type ModelIDInput = {
  ne?: string | null
  eq?: string | null
  le?: string | null
  lt?: string | null
  ge?: string | null
  gt?: string | null
  contains?: string | null
  notContains?: string | null
  between?: Array<string | null> | null
  beginsWith?: string | null
  attributeExists?: boolean | null
  attributeType?: ModelAttributeTypes | null
  size?: ModelSizeInput | null
}

export type UpdateProjectLinksInput = {
  id: string
  tMTNProjectId?: string | null
  tMTNProjectLinkId?: string | null
}

export type DeleteProjectLinksInput = {
  id: string
}

export type ModelTMTNProjectFilterInput = {
  id?: ModelIDInput | null
  name?: ModelStringInput | null
  description?: ModelStringInput | null
  techstack?: ModelStringInput | null
  and?: Array<ModelTMTNProjectFilterInput | null> | null
  or?: Array<ModelTMTNProjectFilterInput | null> | null
  not?: ModelTMTNProjectFilterInput | null
}

export type ModelTMTNProjectConnection = {
  __typename: 'ModelTMTNProjectConnection'
  items: Array<TMTNProject | null>
  nextToken?: string | null
}

export type ModelTMTNProjectLinkFilterInput = {
  id?: ModelIDInput | null
  name?: ModelStringInput | null
  url?: ModelStringInput | null
  type?: ModelLinkTypeInput | null
  and?: Array<ModelTMTNProjectLinkFilterInput | null> | null
  or?: Array<ModelTMTNProjectLinkFilterInput | null> | null
  not?: ModelTMTNProjectLinkFilterInput | null
}

export type ModelTMTNProjectLinkConnection = {
  __typename: 'ModelTMTNProjectLinkConnection'
  items: Array<TMTNProjectLink | null>
  nextToken?: string | null
}

export type ModelProjectLinksFilterInput = {
  id?: ModelIDInput | null
  tMTNProjectId?: ModelIDInput | null
  tMTNProjectLinkId?: ModelIDInput | null
  and?: Array<ModelProjectLinksFilterInput | null> | null
  or?: Array<ModelProjectLinksFilterInput | null> | null
  not?: ModelProjectLinksFilterInput | null
}

export enum ModelSortDirection {
  ASC = 'ASC',
  DESC = 'DESC',
}

export type ModelSubscriptionTMTNProjectFilterInput = {
  id?: ModelSubscriptionIDInput | null
  name?: ModelSubscriptionStringInput | null
  description?: ModelSubscriptionStringInput | null
  techstack?: ModelSubscriptionStringInput | null
  and?: Array<ModelSubscriptionTMTNProjectFilterInput | null> | null
  or?: Array<ModelSubscriptionTMTNProjectFilterInput | null> | null
}

export type ModelSubscriptionIDInput = {
  ne?: string | null
  eq?: string | null
  le?: string | null
  lt?: string | null
  ge?: string | null
  gt?: string | null
  contains?: string | null
  notContains?: string | null
  between?: Array<string | null> | null
  beginsWith?: string | null
  in?: Array<string | null> | null
  notIn?: Array<string | null> | null
}

export type ModelSubscriptionStringInput = {
  ne?: string | null
  eq?: string | null
  le?: string | null
  lt?: string | null
  ge?: string | null
  gt?: string | null
  contains?: string | null
  notContains?: string | null
  between?: Array<string | null> | null
  beginsWith?: string | null
  in?: Array<string | null> | null
  notIn?: Array<string | null> | null
}

export type ModelSubscriptionTMTNProjectLinkFilterInput = {
  id?: ModelSubscriptionIDInput | null
  name?: ModelSubscriptionStringInput | null
  url?: ModelSubscriptionStringInput | null
  type?: ModelSubscriptionStringInput | null
  and?: Array<ModelSubscriptionTMTNProjectLinkFilterInput | null> | null
  or?: Array<ModelSubscriptionTMTNProjectLinkFilterInput | null> | null
}

export type ModelSubscriptionProjectLinksFilterInput = {
  id?: ModelSubscriptionIDInput | null
  tMTNProjectId?: ModelSubscriptionIDInput | null
  tMTNProjectLinkId?: ModelSubscriptionIDInput | null
  and?: Array<ModelSubscriptionProjectLinksFilterInput | null> | null
  or?: Array<ModelSubscriptionProjectLinksFilterInput | null> | null
}

export type CreateTMTNProjectMutationVariables = {
  input: CreateTMTNProjectInput
  condition?: ModelTMTNProjectConditionInput | null
}

export type CreateTMTNProjectMutation = {
  createTMTNProject?: {
    __typename: 'TMTNProject'
    id: string
    name: string
    description: string
    techstack: string
    links?: {
      __typename: 'ModelProjectLinksConnection'
      nextToken?: string | null
    } | null
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type UpdateTMTNProjectMutationVariables = {
  input: UpdateTMTNProjectInput
  condition?: ModelTMTNProjectConditionInput | null
}

export type UpdateTMTNProjectMutation = {
  updateTMTNProject?: {
    __typename: 'TMTNProject'
    id: string
    name: string
    description: string
    techstack: string
    links?: {
      __typename: 'ModelProjectLinksConnection'
      nextToken?: string | null
    } | null
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type DeleteTMTNProjectMutationVariables = {
  input: DeleteTMTNProjectInput
  condition?: ModelTMTNProjectConditionInput | null
}

export type DeleteTMTNProjectMutation = {
  deleteTMTNProject?: {
    __typename: 'TMTNProject'
    id: string
    name: string
    description: string
    techstack: string
    links?: {
      __typename: 'ModelProjectLinksConnection'
      nextToken?: string | null
    } | null
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type CreateTMTNProjectLinkMutationVariables = {
  input: CreateTMTNProjectLinkInput
  condition?: ModelTMTNProjectLinkConditionInput | null
}

export type CreateTMTNProjectLinkMutation = {
  createTMTNProjectLink?: {
    __typename: 'TMTNProjectLink'
    id: string
    name: string
    url: string
    projects?: {
      __typename: 'ModelProjectLinksConnection'
      nextToken?: string | null
    } | null
    type?: LinkType | null
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type UpdateTMTNProjectLinkMutationVariables = {
  input: UpdateTMTNProjectLinkInput
  condition?: ModelTMTNProjectLinkConditionInput | null
}

export type UpdateTMTNProjectLinkMutation = {
  updateTMTNProjectLink?: {
    __typename: 'TMTNProjectLink'
    id: string
    name: string
    url: string
    projects?: {
      __typename: 'ModelProjectLinksConnection'
      nextToken?: string | null
    } | null
    type?: LinkType | null
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type DeleteTMTNProjectLinkMutationVariables = {
  input: DeleteTMTNProjectLinkInput
  condition?: ModelTMTNProjectLinkConditionInput | null
}

export type DeleteTMTNProjectLinkMutation = {
  deleteTMTNProjectLink?: {
    __typename: 'TMTNProjectLink'
    id: string
    name: string
    url: string
    projects?: {
      __typename: 'ModelProjectLinksConnection'
      nextToken?: string | null
    } | null
    type?: LinkType | null
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type CreateProjectLinksMutationVariables = {
  input: CreateProjectLinksInput
  condition?: ModelProjectLinksConditionInput | null
}

export type CreateProjectLinksMutation = {
  createProjectLinks?: {
    __typename: 'ProjectLinks'
    id: string
    tMTNProjectId: string
    tMTNProjectLinkId: string
    tMTNProject: {
      __typename: 'TMTNProject'
      id: string
      name: string
      description: string
      techstack: string
      createdAt: string
      updatedAt: string
      owner?: string | null
    }
    tMTNProjectLink: {
      __typename: 'TMTNProjectLink'
      id: string
      name: string
      url: string
      type?: LinkType | null
      createdAt: string
      updatedAt: string
      owner?: string | null
    }
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type UpdateProjectLinksMutationVariables = {
  input: UpdateProjectLinksInput
  condition?: ModelProjectLinksConditionInput | null
}

export type UpdateProjectLinksMutation = {
  updateProjectLinks?: {
    __typename: 'ProjectLinks'
    id: string
    tMTNProjectId: string
    tMTNProjectLinkId: string
    tMTNProject: {
      __typename: 'TMTNProject'
      id: string
      name: string
      description: string
      techstack: string
      createdAt: string
      updatedAt: string
      owner?: string | null
    }
    tMTNProjectLink: {
      __typename: 'TMTNProjectLink'
      id: string
      name: string
      url: string
      type?: LinkType | null
      createdAt: string
      updatedAt: string
      owner?: string | null
    }
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type DeleteProjectLinksMutationVariables = {
  input: DeleteProjectLinksInput
  condition?: ModelProjectLinksConditionInput | null
}

export type DeleteProjectLinksMutation = {
  deleteProjectLinks?: {
    __typename: 'ProjectLinks'
    id: string
    tMTNProjectId: string
    tMTNProjectLinkId: string
    tMTNProject: {
      __typename: 'TMTNProject'
      id: string
      name: string
      description: string
      techstack: string
      createdAt: string
      updatedAt: string
      owner?: string | null
    }
    tMTNProjectLink: {
      __typename: 'TMTNProjectLink'
      id: string
      name: string
      url: string
      type?: LinkType | null
      createdAt: string
      updatedAt: string
      owner?: string | null
    }
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type GetTMTNProjectQueryVariables = {
  id: string
}

export type GetTMTNProjectQuery = {
  getTMTNProject?: {
    __typename: 'TMTNProject'
    id: string
    name: string
    description: string
    techstack: string
    links?: {
      __typename: 'ModelProjectLinksConnection'
      nextToken?: string | null
    } | null
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type ListTMTNProjectsQueryVariables = {
  filter?: ModelTMTNProjectFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListTMTNProjectsQuery = {
  listTMTNProjects?: {
    __typename: 'ModelTMTNProjectConnection'
    items: Array<{
      __typename: 'TMTNProject'
      id: string
      name: string
      description: string
      techstack: string
      createdAt: string
      updatedAt: string
      owner?: string | null
    } | null>
    nextToken?: string | null
  } | null
}

export type GetTMTNProjectLinkQueryVariables = {
  id: string
}

export type GetTMTNProjectLinkQuery = {
  getTMTNProjectLink?: {
    __typename: 'TMTNProjectLink'
    id: string
    name: string
    url: string
    projects?: {
      __typename: 'ModelProjectLinksConnection'
      nextToken?: string | null
    } | null
    type?: LinkType | null
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type ListTMTNProjectLinksQueryVariables = {
  filter?: ModelTMTNProjectLinkFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListTMTNProjectLinksQuery = {
  listTMTNProjectLinks?: {
    __typename: 'ModelTMTNProjectLinkConnection'
    items: Array<{
      __typename: 'TMTNProjectLink'
      id: string
      name: string
      url: string
      type?: LinkType | null
      createdAt: string
      updatedAt: string
      owner?: string | null
    } | null>
    nextToken?: string | null
  } | null
}

export type GetProjectLinksQueryVariables = {
  id: string
}

export type GetProjectLinksQuery = {
  getProjectLinks?: {
    __typename: 'ProjectLinks'
    id: string
    tMTNProjectId: string
    tMTNProjectLinkId: string
    tMTNProject: {
      __typename: 'TMTNProject'
      id: string
      name: string
      description: string
      techstack: string
      createdAt: string
      updatedAt: string
      owner?: string | null
    }
    tMTNProjectLink: {
      __typename: 'TMTNProjectLink'
      id: string
      name: string
      url: string
      type?: LinkType | null
      createdAt: string
      updatedAt: string
      owner?: string | null
    }
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type ListProjectLinksQueryVariables = {
  filter?: ModelProjectLinksFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListProjectLinksQuery = {
  listProjectLinks?: {
    __typename: 'ModelProjectLinksConnection'
    items: Array<{
      __typename: 'ProjectLinks'
      id: string
      tMTNProjectId: string
      tMTNProjectLinkId: string
      createdAt: string
      updatedAt: string
      owner?: string | null
    } | null>
    nextToken?: string | null
  } | null
}

export type ProjectLinksByTMTNProjectIdQueryVariables = {
  tMTNProjectId: string
  sortDirection?: ModelSortDirection | null
  filter?: ModelProjectLinksFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ProjectLinksByTMTNProjectIdQuery = {
  projectLinksByTMTNProjectId?: {
    __typename: 'ModelProjectLinksConnection'
    items: Array<{
      __typename: 'ProjectLinks'
      id: string
      tMTNProjectId: string
      tMTNProjectLinkId: string
      createdAt: string
      updatedAt: string
      owner?: string | null
    } | null>
    nextToken?: string | null
  } | null
}

export type ProjectLinksByTMTNProjectLinkIdQueryVariables = {
  tMTNProjectLinkId: string
  sortDirection?: ModelSortDirection | null
  filter?: ModelProjectLinksFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ProjectLinksByTMTNProjectLinkIdQuery = {
  projectLinksByTMTNProjectLinkId?: {
    __typename: 'ModelProjectLinksConnection'
    items: Array<{
      __typename: 'ProjectLinks'
      id: string
      tMTNProjectId: string
      tMTNProjectLinkId: string
      createdAt: string
      updatedAt: string
      owner?: string | null
    } | null>
    nextToken?: string | null
  } | null
}

export type OnCreateTMTNProjectSubscriptionVariables = {
  filter?: ModelSubscriptionTMTNProjectFilterInput | null
  owner?: string | null
}

export type OnCreateTMTNProjectSubscription = {
  onCreateTMTNProject?: {
    __typename: 'TMTNProject'
    id: string
    name: string
    description: string
    techstack: string
    links?: {
      __typename: 'ModelProjectLinksConnection'
      nextToken?: string | null
    } | null
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type OnUpdateTMTNProjectSubscriptionVariables = {
  filter?: ModelSubscriptionTMTNProjectFilterInput | null
  owner?: string | null
}

export type OnUpdateTMTNProjectSubscription = {
  onUpdateTMTNProject?: {
    __typename: 'TMTNProject'
    id: string
    name: string
    description: string
    techstack: string
    links?: {
      __typename: 'ModelProjectLinksConnection'
      nextToken?: string | null
    } | null
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type OnDeleteTMTNProjectSubscriptionVariables = {
  filter?: ModelSubscriptionTMTNProjectFilterInput | null
  owner?: string | null
}

export type OnDeleteTMTNProjectSubscription = {
  onDeleteTMTNProject?: {
    __typename: 'TMTNProject'
    id: string
    name: string
    description: string
    techstack: string
    links?: {
      __typename: 'ModelProjectLinksConnection'
      nextToken?: string | null
    } | null
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type OnCreateTMTNProjectLinkSubscriptionVariables = {
  filter?: ModelSubscriptionTMTNProjectLinkFilterInput | null
  owner?: string | null
}

export type OnCreateTMTNProjectLinkSubscription = {
  onCreateTMTNProjectLink?: {
    __typename: 'TMTNProjectLink'
    id: string
    name: string
    url: string
    projects?: {
      __typename: 'ModelProjectLinksConnection'
      nextToken?: string | null
    } | null
    type?: LinkType | null
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type OnUpdateTMTNProjectLinkSubscriptionVariables = {
  filter?: ModelSubscriptionTMTNProjectLinkFilterInput | null
  owner?: string | null
}

export type OnUpdateTMTNProjectLinkSubscription = {
  onUpdateTMTNProjectLink?: {
    __typename: 'TMTNProjectLink'
    id: string
    name: string
    url: string
    projects?: {
      __typename: 'ModelProjectLinksConnection'
      nextToken?: string | null
    } | null
    type?: LinkType | null
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type OnDeleteTMTNProjectLinkSubscriptionVariables = {
  filter?: ModelSubscriptionTMTNProjectLinkFilterInput | null
  owner?: string | null
}

export type OnDeleteTMTNProjectLinkSubscription = {
  onDeleteTMTNProjectLink?: {
    __typename: 'TMTNProjectLink'
    id: string
    name: string
    url: string
    projects?: {
      __typename: 'ModelProjectLinksConnection'
      nextToken?: string | null
    } | null
    type?: LinkType | null
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type OnCreateProjectLinksSubscriptionVariables = {
  filter?: ModelSubscriptionProjectLinksFilterInput | null
  owner?: string | null
}

export type OnCreateProjectLinksSubscription = {
  onCreateProjectLinks?: {
    __typename: 'ProjectLinks'
    id: string
    tMTNProjectId: string
    tMTNProjectLinkId: string
    tMTNProject: {
      __typename: 'TMTNProject'
      id: string
      name: string
      description: string
      techstack: string
      createdAt: string
      updatedAt: string
      owner?: string | null
    }
    tMTNProjectLink: {
      __typename: 'TMTNProjectLink'
      id: string
      name: string
      url: string
      type?: LinkType | null
      createdAt: string
      updatedAt: string
      owner?: string | null
    }
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type OnUpdateProjectLinksSubscriptionVariables = {
  filter?: ModelSubscriptionProjectLinksFilterInput | null
  owner?: string | null
}

export type OnUpdateProjectLinksSubscription = {
  onUpdateProjectLinks?: {
    __typename: 'ProjectLinks'
    id: string
    tMTNProjectId: string
    tMTNProjectLinkId: string
    tMTNProject: {
      __typename: 'TMTNProject'
      id: string
      name: string
      description: string
      techstack: string
      createdAt: string
      updatedAt: string
      owner?: string | null
    }
    tMTNProjectLink: {
      __typename: 'TMTNProjectLink'
      id: string
      name: string
      url: string
      type?: LinkType | null
      createdAt: string
      updatedAt: string
      owner?: string | null
    }
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type OnDeleteProjectLinksSubscriptionVariables = {
  filter?: ModelSubscriptionProjectLinksFilterInput | null
  owner?: string | null
}

export type OnDeleteProjectLinksSubscription = {
  onDeleteProjectLinks?: {
    __typename: 'ProjectLinks'
    id: string
    tMTNProjectId: string
    tMTNProjectLinkId: string
    tMTNProject: {
      __typename: 'TMTNProject'
      id: string
      name: string
      description: string
      techstack: string
      createdAt: string
      updatedAt: string
      owner?: string | null
    }
    tMTNProjectLink: {
      __typename: 'TMTNProjectLink'
      id: string
      name: string
      url: string
      type?: LinkType | null
      createdAt: string
      updatedAt: string
      owner?: string | null
    }
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}
