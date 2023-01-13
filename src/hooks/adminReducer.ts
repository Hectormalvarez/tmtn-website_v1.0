import { Reducer } from 'react'
import { TadminState } from './AdminContext'

export enum EAdminAction {
  LOGGEDIN = 'loggedIn',
  ADDING_PROJECT = 'addingProject',
  ADDING_LINK = 'addingLink',
}

export type TadminAction = { type: EAdminAction; payload?: boolean; projectID?: string }

export const adminReducer: Reducer<TadminState, TadminAction> = (
  adminState,
  action,
) => {
  switch (action.type) {
    case EAdminAction.ADDING_LINK:
      return { ...adminState, addingLinkProjectID: action.projectID }
    case EAdminAction.ADDING_PROJECT:
      return { ...adminState, addingProject: action.payload }
    case EAdminAction.LOGGEDIN:
      return { ...adminState, loggedIn: action.payload }
    default:
      throw new Error()
  }
}