
import { UserRole } from './referenceTypes'

export interface InviteUserRequest {
  /** Max length 50 characters */
  email: string
  /** Max length 50 characters */
  first_name: string
  /** Max length 50 characters */
  last_name: string
  role?: UserRole
}
