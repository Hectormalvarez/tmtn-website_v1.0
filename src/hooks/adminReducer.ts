import { Reducer } from 'react'
import { TadminState } from './AdminContext'

export enum EAdminAction {
  LOGGEDIN = 'loggedIn',
  ADDING_PROJECT = 'addingProject',
  ADDING_LINK = 'addingLink',
  EDITING_PROJECTS = 'editingProjects',
  SET_CURRENTLY_EDITING = 'setCurrentlyEditing',
  SET_CURRENTLY_DELETING = 'setCurrentlyDeleting',
}

export type TadminAction = {
  type: EAdminAction
  payload?: boolean
  addingLinkProjectID?: string | null
  setCurrentlyEditing?: { type: string; id?: string } | null
  setCurrentlyDeleting?: { type: string; id?: string } | null
}

export const adminReducer: Reducer<TadminState, TadminAction> = (adminState, action) => {
  switch (action.type) {
    case EAdminAction.ADDING_LINK:
      return { ...adminState, addingLinkProjectID: action.addingLinkProjectID }
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
    case EAdminAction.SET_CURRENTLY_DELETING:
      return {
        ...adminState,
        currentlyDeleting: {
          type: action.setCurrentlyDeleting?.type,
          id: action.setCurrentlyDeleting?.id,
        },
      }
    default:
      throw new Error()
  }
}
