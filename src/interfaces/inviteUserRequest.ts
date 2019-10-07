
import { UserGroup } from './referenceTypes'

export interface InviteUserRequest {
  /** Max length 50 characters */
  email: string
  role?: UserGroup
}
