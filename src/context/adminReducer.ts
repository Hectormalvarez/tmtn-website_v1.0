import { Reducer } from 'react'
import { initialAdminState } from './AdminContext'

export enum AdminActionType {
  LOGGEDIN = 'loggedIn',
  ADDING_PROJECT = 'addingProject',
  ADDING_LINK = 'addingLink',
}

export type adminAction = { type: AdminActionType; payload: boolean }

export const adminReducer: Reducer<typeof initialAdminState, adminAction> = (
  adminState,
  action,
) => {
  switch (action.type) {
    case AdminActionType.ADDING_LINK:
      return { ...adminState, addingLink: action.payload }
    case AdminActionType.ADDING_PROJECT:
      return { ...adminState, addingProject: action.payload }
    case AdminActionType.LOGGEDIN:
      return { ...adminState, loggedIn: action.payload }
    default:
      throw new Error()
  }
}
