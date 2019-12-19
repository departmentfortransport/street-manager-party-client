import { UserGroup } from './referenceTypes'

export interface UpdateUserRolesRequest {
  /** Max length 50 characters */
  email: string
  roles: UserGroup[]
}
