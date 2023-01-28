import { Reducer } from 'react'
import { TadminState } from './AdminContext'

export enum EAdminAction {
  LOGGEDIN = 'loggedIn',
  ADDING_PROJECT = 'addingProject',
  ADDING_LINK = 'addingLink',
  EDITING_PROJECTS = 'editingProjects',
  SET_CURRENTLY_EDITING = 'setCurrentlyEditing',
}

export type TadminAction = {
  type: EAdminAction
  payload?: boolean
  projectID?: string
  setCurrentlyEditing?: { type: string; id?: string } | null
}

export const adminReducer: Reducer<TadminState, TadminAction> = (adminState, action) => {
  switch (action.type) {
    case EAdminAction.ADDING_LINK:
      return { ...adminState, addingLinkProjectID: action.projectID }
    case EAdminAction.ADDING_PROJECT:
      return { ...adminState, addingProject: action.payload }
    case EAdminAction.LOGGEDIN:
      return { ...adminState, loggedIn: action.payload }
    case EAdminAction.EDITING_PROJECTS:
      return { ...adminState, editingProjects: action.payload }
    case EAdminAction.SET_CURRENTLY_EDITING:
      return {
        ...adminState,
        currentlyEditing: {
          type: action.setCurrentlyEditing?.type,
          id: action.setCurrentlyEditing?.id,
        },
      }
    default:
      throw new Error()
  }
}
