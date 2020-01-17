import { UserGroup } from './referenceTypes'

export interface UserResponse {
  first_name?: string
  last_name?: string
  organisation_name: string
  roles?: UserGroup[]
}
